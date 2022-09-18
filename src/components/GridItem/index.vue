<template>
  <Transition mode="in-out">
    <component
      :is="currentType"
      :itemId="$props.itemData.id"
      class="overflow-hidden"
      v-if="currentType"
      v-bind="$props.itemData.props"
    />
  </Transition>
</template>

<script lang="ts">
import { GridItemData, GridItemType } from "@/types";
import Vue from "vue";
export default Vue.extend({
  name: "GridItem",

  components: {
    TypePomodoro: () => import("./Types/TypePomodoro.vue"),
    TypeAlert: () => import("./Types/TypeAlert.vue"),
    TypeAlarme: () => import("./Types/TypeAlarme.vue"),
    TypePage: () => import("./Types/TypePage.vue"),
    TypeTodo: () => import("./Types/TypeTodo.vue"),
  },

  props: {
    itemData: {
      type: Object as () => GridItemData,
      required: true,
    },
  },

  data: () => ({
    currentType: "",
    debounceCurrentType: 0,
  }),

  created() {
    this.setCurrentType();
  },

  methods: {
    setCurrentType() {
      this.currentType = "";

      clearTimeout(this.debounceCurrentType);

      this.debounceCurrentType = setTimeout(() => {
        const type = (this.$props.itemData as GridItemData).type;

        const currentTypes: Record<GridItemType, string> = {
          pomodoro: "TypePomodoro",
          alert: "TypeAlert",
          alarme: "TypeAlarme",
          page: "TypePage",
          todo: "TypeTodo",
        };

        this.currentType = currentTypes[type];
      }, 250);
    },
  },

  watch: {
    "$props.itemData": {
      handler(aa, bb) {
        if (aa.type !== bb.type) {
          this.setCurrentType();
        }
      },
      deep: true,
    },
  },
});
</script>