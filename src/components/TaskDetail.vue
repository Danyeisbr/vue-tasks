<template>
  <div>
    <h1>Task Detail</h1>
    <form @submit.prevent="handleUpdate()">
      <input type="text" v-model="currentTask.title" />
      <textarea rows="10" v-model="currentTask.description"></textarea>
      <button>Update</button>
    </form>
    <button @click="handleDelete()">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTask, updateTask, deleteTask } from "@/services/TaskService";
import { Task } from "@/interfaces/Task";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
      console.log(res.data);
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask);
        console.log(res);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        const res = await deleteTask(this.$route.params.id);
        console.log(res.data);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
