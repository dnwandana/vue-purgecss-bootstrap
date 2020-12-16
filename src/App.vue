<template>
  <div>
    <NavBar />
    <div style="padding-top: 3.5rem;">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>
