<template>
  <div class="demos-container" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type L from "leaflet";
import "leaflet/dist/leaflet.css";

const container = ref<HTMLElement>();
let map: L.Map;

onMounted(async () => {
  const L = await import("leaflet");
  // @ts-ignore
  await import("leaflet.chinatmsproviders");

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
  initMap(container.value);
});
</script>

<style scoped>
.demos-container {
  height: calc(100vh - var(--vp-nav-height));
}
</style>
