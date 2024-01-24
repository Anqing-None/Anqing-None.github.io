<template>
  <div class="demos-container" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.chinatmsproviders";

const container = ref<HTMLElement>();
let map: L.Map;

watch(container, (div) => initMap(div));

function initMap(div) {
  if (!div) return;
  map = L.map(div, {
    center: [28, 116],
    zoom: 7,
  });

  const key = "11fdd47d60658e25f52f99243b960c13";

  const normalm = L.tileLayer.chinaProvider("TianDiTu.Normal.Map", {
    maxZoom: 18,
    minZoom: 5,
    key,
  });

  const normala = L.tileLayer.chinaProvider("TianDiTu.Normal.Annotion", {
    maxZoom: 18,
    minZoom: 5,
    key,
  });

  const layerGroup = L.layerGroup([normalm, normala]);

  map.addLayer(layerGroup);
}
</script>

<style scoped>
.demos-container {
  height: calc(100vh - var(--vp-nav-height));
}
</style>
