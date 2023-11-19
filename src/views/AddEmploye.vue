<template>
  <div
    class="AddHuman text-black-900 mt-10 bg-slate-200 m-auto p-20 rounded-lg container flex w-96 h-full itmes-center justify-center"
  >
    <!-- <pre>{{route}}</pre> -->
    <!-- <pre>{{router}}</pre> -->
    <div class="contact h-96 text-center items-center">
      <input
        type="text"
        placeholder="Enter your fullName"
        v-model="name"
      /><br />
      <input
        :class="hidden"
        type="text"
        placeholder="Enter you Departament"
        class="bg-green-200"
        v-model="departament"
      /><br />
      <input
        type="text "
        placeholder="Enter you Position"
        v-model="position"
      /><br />
      <select
        class="w-72 m-4 py-2 px-4 outline-none font-mono rounded-lg bg-green-200"
        name="gender"
        id=""
      >
        <option class="" value="Male">Male</option>

        <option class="" value="Famale">Famale</option></select
      ><br />

      <input type="number" placeholder="Enter you Age" v-model="age" /><br />
      <button @click="addData()" class="py-1 px-5 m-4 rounded-lg bg-green-700">
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const User = computed(() => ({}));

const departament = ref("");
const name = ref("");
const position = ref("");
const gender = ref("Male");
const age = ref("");

function addData() {
  const giveData = {
    fullName: name.value,
    Departament: departament.value,
    Position: position.value,
    Gender: gender.value,
    Age: age.value,
  };

  axios
    .post("http://localhost:3000/posts", giveData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })

    .finally(() => {
      router.push("/");
    });

  // router.push("/")
}
</script>

<style  scoped>
input {
  color: rgb(8, 7, 7);
  margin: 10px;
  padding: 8px;
  border-radius: 8px;
  background: rgba(55, 225, 8, 0.2);
  width: 300px;
  border: 1px dashed white;
  outline: none;
}
button {
  border: 1px dashed white;
}
</style>