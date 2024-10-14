<script setup lang="ts">
import { getCaptcha } from "@/api/user";
import { watchEffect } from "vue";
import { useWebSocket } from "@vueuse/core";

const { status, data, send, close, open } = useWebSocket(
  "ws://127.0.0.1:3000/socket"
);

watchEffect(() => {
  if (data) {
    console.log(data.value);
  }
});

defineOptions({
  name: "Welcome"
});

getCaptcha();
</script>

<template>
  <el-button @click="send('我是前端')">send</el-button>
</template>
