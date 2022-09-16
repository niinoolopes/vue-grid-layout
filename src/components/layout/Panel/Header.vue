<template>
  <section>
    <div class="d-flex align-items-end justify-content-between">
      <h5 class="m-0">{{ $props.title }}</h5>

      <div>
        <button
          v-if="$props.back"
          type="button"
          class="btn btn-sm btn-outline-secondary rounded-2 me-2"
          @click="$store.dispatch('openSettingItems')"
        >
          <i class="bi bi-arrow-left"></i>
        </button>

        <button
          type="button"
          class="btn btn-sm btn-outline-secondary rounded-2"
          @click="$store.dispatch('close')"
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>

    <hr />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PanelHeader",

  props: {
    title: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
      default: false,
    },
  },
});
</script>