import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWebhookStore = defineStore('webhook', () => {
  const webhooks = ref<Webhook[]>([]);

  const storageWebhooks = JSON.parse(localStorage.getItem('webhooks') || '[]')
  if (storageWebhooks.length > 0) {
    webhooks.value = storageWebhooks
  } else {
    webhooks.value = [{
      id: '1',
      name: 'Default Webhook',
      description: 'This is a default webhook',
      enabled: true,
      urls: [{
        name: 'dayofweek',
        action: 'https://example.com/webhook?day='
      }]
    }]
  }

  // Persist data to localStorage
  const persistData = () => {
    localStorage.setItem('webhooks', JSON.stringify(webhooks.value))
  }

  const createWebhook = (urls: actionItem[]) => {
    const id = Date.now().toString()
    const data = {
      id,
      name: 'Lorem Ipsum' + id,
      description: 'Lorem Ipsum' + id,
      enabled: true,
      urls,
    }
    webhooks.value.push(data)
    persistData()
  }

  const updateWebhook = (id: string, urls: actionItem[]) => {
    const index = webhooks.value.findIndex(w => w.id === id)
    if (index >= 0) {
      webhooks.value[index].urls = urls;
      persistData()
    }
  }


  return {
    webhooks,
    createWebhook,
    updateWebhook,
  }
})
