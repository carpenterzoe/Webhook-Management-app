<template>
  <div>
    <div class="text-btn" @click="goBack">Back</div>
    <div class="page-title">{{ isEdit ? 'Edit' : 'Creat'}} action</div>
    <div class="webhook-name">Lorem Ipsum</div>

    <el-form
      :model="formData"
      ref="ruleFormRef"
      label-position="top"
      label-width="100px"
    >
      <div v-for="(item, index) in formData.urls" :key="index">
        <el-form-item 
          :label="'Name' + (index+1)"
          :prop="`urls.${index}.name`"
          :rules="{ required: true, message: `Name${index+1} is required`, trigger: ['blur'] }">
          <el-input v-model=" item.name"></el-input>
        </el-form-item>
        <el-form-item
          :label="'Action' + (index+1)"
          :prop="`urls.${index}.action`"
          :rules="[
            { required: true, message: `Action${index+1} is required`, trigger: 'blur' },
            {
              pattern: /^(https?:\/\/)[\w-]+(\.[\w-]+)+([/?].*)?$/,
              message: 'Please enter a valid URL',
              trigger: 'blur'
            },
          ]">
          <el-input v-model=" item.action"></el-input>
        </el-form-item>
      </div>
    </el-form>

    <div class="btn-wrapper">
      <div class="text-btn" @click="handleAddMore">Add more</div>
    </div>
    <div class="btn-wrapper">
      <el-button type="primary"  @click="handleSave(ruleFormRef)">Save</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { computed, reactive, ref } from 'vue';
import { useWebhookStore } from '@/stores/webhookStore';
import { ElMessage } from 'element-plus';
import type { FormInstance } from 'element-plus'

const router = useRouter();
const route = useRoute();

const currentId = route.query.id || '';
const isEdit = computed(() => !!currentId);

const goBack = () => {
  router.back();
}
const webhookStore = useWebhookStore()

const formData = reactive({
  urls: [{ name:'', action:'' }],
})

// Initialize data for edit mode
const init = () => {
  if (isEdit.value) {
    const webhook = webhookStore.webhooks.find((item) => item.id === currentId);
    if (webhook) {
      formData.urls = [...webhook.urls];
    }
  }
}

const handleAddMore = () => {
  formData.urls.push({ name: '', action: '' })
}

const ruleFormRef = ref<FormInstance>()

const handleSave = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (isEdit.value) {
        webhookStore.updateWebhook(currentId as string, formData.urls);
      } else {
        webhookStore.createWebhook(formData.urls);
      }
      ElMessage.success('Webhook saved successfully')
      setTimeout(() => {
        router.replace('/')
      }, 200)
    }
  })
}

init();
</script>

<style scoped>
.page-title {
  margin-top: 40px;
}
.webhook-name {
  font-size: 20px;
  font-weight: bold;
  color: var(--el-color-primary);
  margin-top: 20px;
  margin-bottom: 20px;
}
.text-btn {
  color: var(--el-color-primary);
  cursor: pointer;
  margin-bottom: 15px;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
