<template>
  <el-menu class="menu" @select="handleSelect" :default-active="$route.path">
    <el-menu-item
      v-for="(item, index) in menus"
      :index="item.path"
      :key="index"
    >
      {{item.title}}
    </el-menu-item>
  </el-menu>
</template>

<script setup>
const emit = defineEmits(['selectMenu']);

const menus = [
  { path: '/', title: 'Webhooks' },
  { path: '/create_action', title: 'Create action' },
  { path: '/active_action', title: 'Active action' },
]
const handleSelect = (path) => {
  emit('selectMenu', path)
}
</script>

<style scoped>
.menu {
  height: 100vh;
}
</style>