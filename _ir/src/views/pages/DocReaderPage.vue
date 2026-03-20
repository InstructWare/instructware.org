<script setup lang="ts">
// @iwp.link views/pages/docs/protocol.md::n.1bac
// @iwp.link views/pages/docs/protocol.md::n.f388

// @iwp.link views/pages/docs/manifesto.md::n.79dd
// @iwp.link views/pages/docs/manifesto.md::n.f177

import { onMounted, watch } from "vue";
import type { DocId } from "../../models/content/types";
import { useIwpState } from "../../logic/store/useIwpState";

const props = defineProps<{
  docId: DocId;
}>();

const { syncDocForRoute } = useIwpState();

onMounted(() => {
  // @iwp.link views/pages/docs/manifesto.md::n.04a5
  // @iwp.link views/pages/docs/manifesto.md::n.0f90
  // @iwp.link views/pages/docs/manifesto.md::n.2c37
  // @iwp.link views/pages/docs/manifesto.md::n.a371
  // @iwp.link views/pages/docs/protocol.md::n.0f91
  // @iwp.link views/pages/docs/protocol.md::n.151d
  // @iwp.link views/pages/docs/protocol.md::n.2ce4
  // @iwp.link views/pages/docs/protocol.md::n.fc1e
  syncDocForRoute(props.docId);
});

watch(
  () => props.docId,
  (nextDocId) => {
    // @iwp.link views/pages/docs/manifesto.md::n.0f90
    // @iwp.link views/pages/docs/protocol.md::n.0f91
    syncDocForRoute(nextDocId);
  },
);
</script>

<template>
  <!-- @iwp.link views/pages/docs/manifesto.md::n.0951 -->
  <!-- @iwp.link views/pages/docs/manifesto.md::n.9ce6 -->
  <!-- @iwp.link views/pages/docs/manifesto.md::n.e6a0 -->
  <!-- @iwp.link views/pages/docs/protocol.md::n.108d -->
  <!-- @iwp.link views/pages/docs/protocol.md::n.7348 -->
  <!-- @iwp.link views/pages/docs/protocol.md::n.c147 -->
  <TopNavbar />
  <!-- @iwp.link views/pages/docs/manifesto.md::n.0f3d -->
  <!-- @iwp.link views/pages/docs/manifesto.md::n.26c4 -->
  <!-- @iwp.link views/pages/docs/manifesto.md::n.3356 -->
  <!-- @iwp.link views/pages/docs/protocol.md::n.635f -->
  <!-- @iwp.link views/pages/docs/protocol.md::n.e099 -->
  <!-- @iwp.link views/pages/docs/protocol.md::n.ec0a -->
  <main class="iwp-page">
    <!-- @iwp.link views/pages/docs/manifesto.md::n.b959 -->
    <!-- @iwp.link views/pages/docs/protocol.md::n.809b -->
    <div class="iwp-doc-layout iwp-doc-layout-single">
      <!-- @iwp.link views/pages/docs/manifesto.md::n.71d6 -->
      <!-- @iwp.link views/pages/docs/manifesto.md::n.81bb -->
      <!-- @iwp.link views/pages/docs/protocol.md::n.0b85 -->
      <!-- @iwp.link views/pages/docs/protocol.md::n.a349 -->
      <DocReader />
    </div>
  </main>
</template>
