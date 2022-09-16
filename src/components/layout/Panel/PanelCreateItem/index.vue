<template>
  <form
    @submit.prevent="handleForm"
    class="d-flex flex-column"
    autocomplete="off"
  >
    <div class="d-flex align-items-end justify-content-between">
      <h5 class="m-0">Novo</h5>

      <button
        type="button"
        class="btn btn-sm btn-outline-secondary rounded-0"
        @click="$store.dispatch('close')"
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <hr />

    <div class="mb-2 d-flex align-items-center justify-content-between">
      <h5 class="mb-0 h4">Tipos</h5>
    </div>

    <!-- 
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        Email address
      </label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div> 
    -->

    <select class="mb-2 form-select" v-model="item.data.type">
      <option v-for="type in types" :key="type.name" :value="type.value">
        {{ type.name }}
      </option>
    </select>

    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-sm btn-primary">Salvar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { GridItem } from "@/types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PanelCreateItem",

  data: () => ({
    types: [],
    item: {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      i: 0,
      data: {
        active: true,
        name: "",
        type: "pomodoro",
      },
    } as GridItem,
  }),

  methods: {
    handleForm() {
      const payload = { ...this.item };

      this.$emit("addItem", payload);

      this.$emit("closePanel");
    },
  },
});
</script>