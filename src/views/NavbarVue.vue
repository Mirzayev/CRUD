 <script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const Home = ref(true);
const AddEmployee = ref(false);
const infoHuman = ref("");

const route = useRoute();
</script>
 

<template>
  <div class="navbar">
    <div class="bg w-96 flex p-2 h-16 items-end mb-4 justify-between">
      <router-link to="/" class="text-xl cursor-pointer"
        ><span class="font-bold">UIC</span> Group</router-link
      >

      <div>
        <router-link
          :class="route.path === '/' ? 'Active' : ''"
          :to="{ name: 'home' }"
          class="home font-mono border"
        >
          Home</router-link
        >
        <router-link
          :class="route.path === '/add' ? 'Active' : ''"
          :to="{ name: 'about' }"
          class="font-mono font-bold"
        >
          Add Employee</router-link
        >
      </div>
    </div>
  </div>
</template>



<style  scoped>
.home {
  border: none;
  padding: 5px;
  border-right: 2.13px solid orange;
}
.navbar {
  border-bottom: 2.7px solid orange;
  padding-bottom: 0px;
}

.Active {
  color: green;
}
</style>