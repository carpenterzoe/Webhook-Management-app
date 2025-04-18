<template>
  <div class="toggle">
    <el-switch 
      v-model="isLight"
      active-text="light"
      inactive-text="dark"
      @click="() => toggleDark()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const isLight = computed(() => !isDark.value)
const toggleDark = useToggle(isDark)
</script>

<style scoped>
.toggle {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 5px;
}
</style>