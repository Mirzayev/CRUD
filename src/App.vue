

<template>
  <header >
    
     
   
<Navbar />
  </header>

  <RouterView />

    <footer>
    </footer>
</template>


<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Navbar from './views/NavbarVue.vue'

import { RouterLink, RouterView } from "vue-router";

</script>








