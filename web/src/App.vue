<template>
  <div>
    <Navbar />
    <main>
    </main>
    <Footer />
  </div>
</template>

<script>
  // Import components permanently
  import Navbar from './components/permanents/Navbar.vue'
  import Footer from './components/permanents/Footer.vue'


  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
