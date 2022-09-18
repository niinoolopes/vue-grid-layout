<template>
  <div
    id="app"
    class="container position-relative d-flex flex-column overflow-hidden"
  >
    <AppPanel />

    <AppHeader />

    <!-- <TypeTodo
      :style="{ height: '200px', width: '200px', border: '1px solid red' }"
    /> -->

    <router-view class="flex-grow-1 overflow-auto" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "./components/layout/Header.vue";
import AppPanel from "./components/layout/Panel/index.vue";
import { LocalStorageValues } from "./types";
import { localStorage } from "@/utils/localStorage";

export default Vue.extend({
  components: {
    AppHeader,
    AppPanel,
    // TypeTodo: () => import("./components/GridItem/Types/TypeTodo.vue"),
  },

  created() {
    this.initial();

    console.log(process.env.NODE_ENV);
  },

  methods: {
    initial(): void {
      const { items, edit, logged } = localStorage();

      Array.from([
        ["setItems", items],
        ["setEdit", edit],
        ["setLogged", logged],
      ]).forEach((args) => {
        const [action, payload] = args as [string, LocalStorageValues];

        this.$store.dispatch(action, payload);
      });
    },
  },
});
</script>