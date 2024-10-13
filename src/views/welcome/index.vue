<script setup lang="ts">
import { getCaptcha } from "@/api/user";
defineOptions({
  name: "Welcome"
});
getCaptcha();
getCaptcha();
getCaptcha();
</script>

<template>
  <h1>智慧AI实验室</h1>
</template>
