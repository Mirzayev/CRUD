
<template>
  <div
    class="Parent grid grid-cols-2 pt-5 font-mono gap-4 md: grid grid-cols-1 lg:text-blue-700"
  >
    <main class="mt-20 bg-slate-100 ml-6 rounded-xl">
      <div class="flex h-20 items-center justify-around">
        <h1 class="text-xl">Employee Information</h1>
        <div
          class="AddButton flex items-center bg-green-500 px-2 py-1 rounded-lg"
        >
          <router-link
            @click="ClikHome"
            :to="{ name: 'about' }"
            class="home font-mono"
          >
            Add Employee
          </router-link>
          <img src="src/views/images/Add-btn.png" alt="" />
        </div>
      </div>

      <div class="container m-auto flex justify-center gap-1">
        <table class="w-full h-full">
          <tr class="">
            <th class=" "># fullName</th>
            <th>Departament</th>
            <th>Position</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Remove</th>
          </tr>
          <tr
            v-for="(newData, id) in posts"
            :key="newData"
            class="info text-black leading-10 items-end h-12 font-mono"
          >
            <td class="pl-3">{{ id + 1 }} {{ newData.fullName }}</td>
            <td>{{ newData.Departament }}</td>
            <td>{{ newData.Position }}</td>
            <td>{{ newData.Gender }}</td>
            <td>{{ newData.Age }}</td>
            <td class="flex justify-center">
              <img
                @click="removeData(newData.id)"
                class="w-6 mt-3 cursor-pointer"
                src=".././views/images/remove.png"
                alt=""
              />
            </td>
          </tr>
        </table>
        <div></div>
      </div>
    </main>

    <main class="">
      <div class="flex justify-center gap-10">
        <router-link :to="{ name: 'all' }" class="cursor-pointer">
          <div class="flex gap-2 h-10 items-center">
            <img width="25px" src="src/views/images/users.png" alt="" />
            <p>24</p>
          </div>
          <p>All Employee</p>
        </router-link>
        <router-link :to="{ name: 'about' }">
          <div class="cursor-pointer">
            <div class="flex gap-2 h-10 items-center">
              <img width="25px" src="src/views/images/user.png" alt="" />
              <p>8</p>
            </div>
            <p>Male Employee</p>
          </div>
        </router-link>

        <div class="cursor-pointer">
          <div class="flex gap-2 h-10 items-center">
            <img width="25px" src="src/views/images/user.png" alt="" />
            <p>16</p>
          </div>

          Famale Employee
        </div>
      </div>

      <div class="EmployeesStatistics bg-slate-100 text-center justify-center">
        <h2 class="text-center mt-5 pt-5 text-2xl">Employee Statistics</h2>
        <div
          class="Useremployee flex justify-center gap-6 pt-8 pb-4 rounded-lg"
        >
          <div class="justify-center text-center">
            <img class="w-5 text-center" alt="" />
            <h4>O'rtacha yosh</h4>
            <p>21</p>
          </div>

          <div>
            <img src="" alt="" />
            <h4>Total Employee</h4>
            <p>24</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Male Employee</h4>
            <p>16</p>
          </div>
          <div>
            <img src="" alt="" />
            <h4>Famale Employee</h4>
            <p>8</p>
          </div>
        </div>
        <div>
          <h2>Departament Statistics</h2>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const posts = ref([]);
console.log(posts);
function fetchPosts() {
  axios
    .get("http://localhost:3000/posts")
    .then((res) => {
      console.log(res);
      posts.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  // router.push("/")
}

function removeData(userId) {
  if (confirm("Haqiqatdan uchirmoqchimisz")) {
    axios.delete("http://localhost:3000/posts/" + userId).then((res) => {
      console.log(res);
      fetchPosts();
    });
  }
}

onMounted(() => {
  fetchPosts();
});
</script>



<style  scoped>
.Parent {
  background: rgb(195, 197, 200);
}
.AddButton img {
  width: 20px;
  height: 20px;
}
.AddButton:active {
  background: rgb(15, 128, 15);
  color: white;
  transition: 0.2s;
}
.info {
  font-size: 14px;
}
</style>


