<template>
  
    <h1>Task List</h1>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action" style="cursor: pointer;"
        v-for="(task, index) in tasks"
        :key="index"
        @click="handleTaskClick(task)"
      >
        {{ index + 1 }}.
        {{ task.title }}
      </li>
    </ul>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";
import { RouteLocationRaw, Router } from "vue-router";

export default defineComponent({
  name: "TaskList",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
    handleTaskClick(task: Task): void {
      const route: RouteLocationRaw = { path: `/tasks/${task._id}` };
      (this.$router as Router).push(route);
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>