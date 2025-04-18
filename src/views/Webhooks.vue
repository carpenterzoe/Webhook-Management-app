<template>
  <div class="webhooks-wrapper">
    <el-input v-model="input" placeholder="Find your webhook..."  :suffix-icon="Search" />

    <div class="title">Dashboard</div>
    <div class="sub-title">
      <div class="name">
        Your Webhooks
      </div>
      <el-button text type='primary' @click="handleCreate">Create new</el-button>
    </div>

    <div class="card-container">
      <el-card
        class="box-card"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="card-header">
          <span>{{ item.name }}</span>
        </div>
        <div class="text item">{{ item.description }}</div>
       <div class="icon-container">
          <el-button :icon="Promotion" text @click="handleTrigger" />
          <el-button :icon="Edit" text @click="handleEdit(item.id)"/>
          <el-button :icon="View" text /></div>
     </el-card>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Search, Edit, Promotion, View } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useWebhookStore } from '@/stores/webhookStore'
import { ElMessage } from 'element-plus'

const input = ref('')
const webhookStore = useWebhookStore()
const list = computed(() => {
  // search webhooks by keyword
  if (input.value) {
    return webhookStore.webhooks.filter((item) => {
      return item.name.toLowerCase().includes(input.value.toLowerCase())
    })
  }
  return webhookStore.webhooks
})

const router = useRouter();
const handleCreate = () => {
  router.push('/create_action')
}

const handleTrigger = () => {
  ElMessage.success('Webhook triggered successfully')
}

const handleEdit = (id: string) => {
  router.push({ path: '/create_action', query: { id }})
}
</script>

<style scoped>
.webhooks-wrapper {
  margin-top: 10px;
}
.title {
  margin-top: 20px;
  color:#999C9F;
}
.sub-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.name {
  color: var(--el-color-primary);
  font-size: 24px;
  margin-top: 25px;
  margin-bottom: 15px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  gap: 20px;
}

.card-header {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: -10px;
}
</style>