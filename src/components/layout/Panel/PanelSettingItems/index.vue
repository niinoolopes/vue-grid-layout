
<template>
  <div class="d-flex flex-column">
    <PanelHeader title="Config Items" />
    
    <div
      v-for="(item, i) in items"
      :key="item.i"
      :class="`${i == 0 ? 'pb-2' : 'py-2 border-top'}`"
    >
      <div class="mb-2 d-flex align-items-center justify-content-between">
        <h5 class="mb-0 h4">{{ item.data.name }}</h5>

        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-dark border-0 py-0"
            @click="() => $store.dispatch('openSettingItem', item.data)"
          >
            <i class="bi bi-pencil-square" style="font-size: 18px" />
          </button>

          <button
            type="button"
            class="btn btn-sm btn-outline-dark border-0 py-0"
            @click="() => $store.dispatch('removeItem', item)"
          >
            <i class="bi bi-x-square" style="font-size: 18px" />
          </button>
        </div>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :id="`item-active-${item.i}`"
          :checked="item.data.active ? 'checked' : ''"
          @change="() => $store.dispatch('toggleActive', item)"
        />
        <label class="form-check-label" :for="`item-active-${item.i}`">
          {{ item.data.active ? "Visível" : "Oculto" }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PanelHeader from "@/components/layout/Panel/Header.vue";
import { Grid, GridItem } from "@/types";
import Vue from "vue";
export default Vue.extend({
  name: "PanelSettingItems",

  components: {
    PanelHeader,
  },

  data: () => ({
    items: [] as GridItem[],
  }),

  beforeDestroy(){
    this.$store.dispatch('resetSettingItems')
  },

  mounted() {
    this.setItems();
  },

  methods: {
    setItems(): void {
      const grid = this.$store.state.grid as Grid;

      this.items = [];

      Array.from(grid.items).forEach(({ ...item }) => {
        this.items.push(item);
      });
    },
    // handleForm(): void {
    //   const payload = [...this.items].map(({ ...item }) => item);

    //   console.log(payload);

    // this.$emit("updateItems", payload);

    // this.$emit("closePanel");

    //   this.$store.dispatch("setItems", payload);
    // },
  },

  watch: {
    "$store.state.grid": {
      handler: "setItems",
      deep: true,
    },
  },
});
</script>