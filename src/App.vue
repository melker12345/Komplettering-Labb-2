<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


</script>

<template class="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden h-fit ">
  <Navbar />
 
  <RouterView />
  <Footer />

</template>
