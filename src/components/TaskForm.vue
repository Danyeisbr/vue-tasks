<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask()" class="card card-body">
      <h2 class="text-center mb-3">Create Task</h2>
      <input
        type="text"
        placeholder="Write a Title"
        id=""
        v-model="task.title"
        class="form-control mb-4"
        autofocus
      />
      <textarea
        name=""
        id=""
        rows="4"
        placeholder="Write a Description"
        v-model="task.description"
        class="form-control mb-4"
      ></textarea>
      <button class="btn btn-lg btn-info" :disabled="!task.title || !task.description" >Save</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
