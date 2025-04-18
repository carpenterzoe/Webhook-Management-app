<template>
  <el-dialog
    v-model="dialogVisible"
    width="600px"
    :before-close="handleClose"
  >
    <div class="title">Active actions</div>

    <el-card
      class="card"
      v-for="(item, index) in webhookStore.webhooks"
      :key="index"
      shadow="always"
    >
      <div class="card-content">
        <span>{{item.name}}</span>
        <el-button type="primary" @click="handleTrigger">Trigger</el-button>
      </div>
    </el-card>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWebhookStore } from '@/stores/webhookStore'
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})

watch(() => props.isShow, (val) => {
  dialogVisible.value = val
}, { immediate: true })

const webhookStore = useWebhookStore()

const emits = defineEmits(['close'])
const handleClose = () => {
  emits('close', false)
}

const handleTrigger = () => {
  ElMessage.success('Webhook triggered successfully')
}
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  color: var(--el-color-primary);
  margin-bottom: 20px;
  margin-top: 10px;
}

.card {
  margin-bottom: 15px;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>