<template>
  <div class="home">
    <div class="btn-group mb-3">
      <button
        type="button"
        class="btn btn-sm btn-outline-primary rounded-0"
        :class="`${gridEdit ? 'active' : ''}`"
        @click="$store.dispatch('toggleEdit')"
      >
        <i class="bi bi-pencil-fill" />
      </button>

      <button
        type="button"
        class="btn btn-sm btn-outline-primary rounded-0"
        @click="$store.dispatch('openSettingItems')"
      >
        <i class="bi bi-list-task" />
      </button>

      <button
        type="button"
        class="btn btn-sm btn-outline-primary rounded-0"
        @click="newItem()"
      >
        <i class="bi bi-plus-lg" />
      </button>
    </div>

    <VueGridWrapper
      :layout.sync="gridItems"
      :col-num="12"
      :row-height="85"
      :is-draggable="gridEdit"
      :is-resizable="gridEdit"
      :is-mirrored="false"
      :vertical-compact="true"
      :use-css-transforms="true"
      @layout-updated="layoutUpdatedEvent"
    >
      <VueGridItem
        v-bind="{ ...vBindGridItem }"
        :class="`rounded d-flex flex-column p-1 ${gridEdit ? 'pb-3' : ''}`"
        v-for="item in gridItems"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @resize="resizeEvent"
      >
        <Item :itemData="item.data" v-bind="VBindItem" />
      </VueGridItem>
    </VueGridWrapper>
  </div>
</template>

<script lang="ts">
import VueGridLayout from "vue-grid-layout";
import { defineComponent } from "vue";
import Item from "@/components/GridItem/index.vue";
import { gridItemNew } from "@/utils/helpGrid";
import { GridItem, GridState } from "@/types";

export default defineComponent({
  name: "HomeView",

  components: {
    VueGridWrapper: VueGridLayout.GridLayout,
    VueGridItem: VueGridLayout.GridItem,
    Item: Item,
  },

  computed: {
    gridEdit(): boolean {
      return (this.$store.state.grid as GridState).edit;
    },
    gridItems(): GridItem[] {
      console.log('grid', this.$store.state.grid);
      
      return (this.$store.state.grid as GridState).items.filter(
        (item) => item.data.active
      );
    },
    vBindGridItem(): Record<string, unknown> {
      return {
        class: {
          shadow: this.gridEdit,
        },
      };
    },
    VBindItem(): Record<string, unknown> {
      return {
        class: [
          'gridItem',
          { editing: this.gridEdit },
        ]
      }
    }
  },

  methods: {
    layoutUpdatedEvent() {
      console.log("..... layoutUpdatedEvent");
    },
    resizeEvent() {
      console.log("..... resizeEvent");
    },
    newItem() {
      const items: GridItem[] = this.gridItems.map(({ ...e }) => e);

      const newItem = gridItemNew({ items });

      this.$store.dispatch("openSettingItem", newItem);
      this.$store.dispatch("addItem", newItem);
    },
  },
});
</script>
