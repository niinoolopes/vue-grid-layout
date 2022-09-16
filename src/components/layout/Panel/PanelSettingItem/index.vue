
<template>
  <form
    @submit.prevent="handleForm"
    class="d-flex flex-column"
    autocomplete="off"
  >
    <PanelHeader title="Config Item" back />

    <label for="itemDataType" class="form-label"> Tipo </label>
    <select
      class="form-select"
      id="itemDataType"
      :value="itemData.type"
      @change="handleType($event.target.value)"
    >
      <option
        v-for="type in types"
        :key="type.value"
        :value="type.value"
        :name="type.name"
        :disabled="type.disabled"
      >
        {{ type.name }}
      </option>
    </select>

    <hr />

    <div class="form-check">
      <input
        v-model="itemData.active"
        class="form-check-input"
        type="checkbox"
        :id="`item-active`"
      />
      <label class="form-check-label" :for="`item-active`">
        {{ itemData.active ? "Visível" : "Oculto" }}
      </label>
    </div>

    <hr v-show="!!currentPropType" />

    <Transition name="panel-transition" mode="out-in">
      <component
        :is="currentPropType"
        :itemId="itemData.id"
        :itemProps="itemData.props"
        @setItemProps="handleProps"
      />
    </Transition>
  </form>
</template>

<script lang="ts">
import PanelHeader from "@/components/layout/Panel/Header.vue";
import { gridItemData, itemTypesData } from "@/content";
import { GridItemData, GridItemProps, GridItemType, ItemType } from "@/types";

import Vue from "vue";

type IData = {
  types: ItemType[];
  itemData: GridItemData;
};

export default Vue.extend({
  name: "PanelSettingItem",

  components: {
    PanelHeader,
    PropTypeAlarm: () => import("./Props/PropTypeAlarm.vue"),
    PropTypeAlert: () => import("./Props/PropTypeAlert.vue"),
    PropTypePomodoro: () => import("./Props/PropTypePomodoro.vue"),
    PropTypePage: () => import("./Props/PropTypePage.vue"),
    PropTypeTodo: () => import("./Props/PropTypeTodo.vue"),
  },

  data: (): IData => ({
    types: [...itemTypesData],
    itemData: { ...gridItemData },
  }),

  beforeDestroy() {
    this.$store.dispatch("resetSettingItem");
  },

  created() {
    const statePanelSettingItem: GridItemData =
      this.$store.state.panel.settingItem;

    this.itemData = {
      ...this.itemData,
      ...statePanelSettingItem,
    };
  },

  computed: {
    currentPropType(): string {
      const currentPropTypes: Record<GridItemType, string> = {
        alarme: "PropTypeAlarm",
        alert: "PropTypeAlert",
        pomodoro: "PropTypePomodoro",
        page: "PropTypePage",
        todo: "",
      };

      return currentPropTypes[this.itemData.type];
    },
  },

  methods: {
    handleType(value: GridItemType) {
      const findType = this.types.find((type) => type.value === value);

      if (findType) {
        this.itemData.name = findType.name;
        this.itemData.type = findType.value;

        const newData = {
          name: `${findType.name}`,
          type: `${findType.value}`,
        };

        this.$store.dispatch("updateItemData", {
          id: this.itemData.id,
          data: newData,
        });
      }
    },
    handleProps(newItemProps: GridItemProps) {
      this.itemData.props = newItemProps;
    },
  },
});
</script>