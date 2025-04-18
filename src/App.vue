<template>
  <el-container class="container">
    <el-aside width="200px">
      <Menu @selectMenu="selectMenu" />
    </el-aside>
    <el-container>
      <el-header height="40px">
        <ToggleTheme />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <TriggerActionDialog :isShow="isShowDialog" @close="closeDialog"/>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from '@/components/Menu.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import TriggerActionDialog from '@/components/TriggerActionDialog.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const isShowDialog = ref(false);

const selectMenu = (path: string) => {
  if (path === '/active_action') {
    isShowDialog.value = true
  } else {
    router.push(path)
  }
}

const closeDialog = () => {
  isShowDialog.value = false
}
</script>

<style scoped>
.content {
  padding: 10px 40px 40px 40px;
}
</style>