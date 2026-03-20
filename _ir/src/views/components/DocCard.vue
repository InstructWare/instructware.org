<script setup lang="ts">
// @iwp.link views/components/doc_card.md::n.68da
// @iwp.link views/components/doc_card.md::n.6fd1

import type { DocMeta, Locale } from "../../models/content/types";

const props = defineProps<{
  doc: DocMeta;
  locale: Locale;
  ctaLabel: string;
}>();

// @iwp.link views/components/doc_card.md::n.7fc0
const emit = defineEmits<{
  read: [];
}>();

function onRead(): void {
  // @iwp.link views/components/doc_card.md::n.4539
  // @iwp.link views/components/doc_card.md::n.958b
  if (props.doc.id !== "manifesto" && props.doc.id !== "protocol") {
    return;
  }
  emit("read");
}
</script>

<template>
  <!-- @iwp.link views/components/doc_card.md::n.9f3c -->
  <article class="iwp-card iwp-doc-card iwp-hover-card">
    <!-- @iwp.link views/components/doc_card.md::n.0980 -->
    <!-- @iwp.link views/components/doc_card.md::n.e0aa -->
    <h3>{{ doc.title[locale] }}</h3>
    <!-- @iwp.link views/components/doc_card.md::n.16a5 -->
    <!-- @iwp.link views/components/doc_card.md::n.8d19 -->
    <p class="iwp-doc-card-summary">{{ doc.summary[locale] }}</p>
    <!-- @iwp.link views/components/doc_card.md::n.86d0 -->
    <p class="iwp-doc-card-tags">
      <span v-for="tag in doc.tags" :key="tag" class="iwp-sub">#{{ tag }} </span>
    </p>
    <!-- @iwp.link views/components/doc_card.md::n.1d82 -->
    <!-- @iwp.link views/components/doc_card.md::n.b195 -->
    <button class="iwp-btn brand" @click="onRead">
      {{ ctaLabel }}
    </button>
  </article>
</template>
