<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue - TypeScript</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link"> Tasks </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/tasks/new" class="nav-link">Create Task</router-link>
      </li>
    </ul>

    </div>
      

    </div>
    
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Nav-bar",
});
</script>
