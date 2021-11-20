<template>
  <Title>Index</Title>
  <div class="theme-button">
    <ThemeToggle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThemeToggle from '../components/ThemeToogle.vue'

export default defineComponent({
  name: 'Index',
  components: {
    ThemeToggle,
  },
})
</script>

<style lang="scss">
.theme-button {
  @apply text-center;
}
</style>
