<script setup lang="ts">
import { Content, useRoute, useRouter } from "vitepress";
import { onMounted, watch } from "vue";
import { useIwpState } from "../../src/logic/store/useIwpState";

const route = useRoute();
const router = useRouter();
const { initApp, ensureRouteContract } = useIwpState();

onMounted(() => {
  initApp();
  // @iwp.link logic/middleware/route_fallback.md::n.b4eb
  ensureRouteContract(route.path, router);
});

watch(
  () => route.path,
  (path) => {
    // @iwp.link logic/middleware/route_fallback.md::n.f42c
    ensureRouteContract(path, router);
  },
);
</script>

<template>
  <Content />
</template>
