<template>
  <div>
    home
    <NavHeader />
    <router-view />
    <NavFooter />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'

export default {
  name: 'nav-home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>