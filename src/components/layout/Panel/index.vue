<template>
  <div
    v-bind="vBindPanel"
    class="panel-settings position-absolute border p-2"
  >
    <Transition mode="out-in">
      <component :is="currentPanel" />
    </Transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import createItem from "./PanelCreateItem/index.vue";
import settingItem from "./PanelSettingItem/index.vue";
import settingItems from "./PanelSettingItems/index.vue";
import { PanelState } from "@/types";

export default Vue.extend({
  name: "AppPanel",

  components: {
    createItem,
    settingItem,
    settingItems,
  },

  computed: {
    currentPanel(): string {
      return (this.$store.state.panel as PanelState).name;
    },
    status(): boolean {
      return (this.$store.state.panel as PanelState).status;
    },
    vBindPanel(): Record<string, unknown> {
      return {
        class: {
          active: this.status && this.currentPanel,
        },
      };
    },
  }
});
</script>