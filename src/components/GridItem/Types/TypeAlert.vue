<template>
  <div class="flex-grow-1 d-flex flex-column item">
    <div
      class="
        pb-1
        border-bottom
        d-flex
        align-items-center
        justify-content-between
      "
      style="height: 30px"
    >
      <span class="fw-light fst-italic lh-1">Alerta</span>
      <button
        v-if="status"
        class="btn btn-sm py-0 text-white bg-primary"
        @click="status = !status"
      >
        <i class="bi bi-bell"></i>
      </button>
    </div>
    <p class="fs-1 mb-0 py-2 text-center flex">{{ timePreview }}</p>
    <p class="fs-6 mb-0 py-1 text-center">{{ time }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "@/plugins/dayjs";

export default Vue.extend({
  props: {
    time: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    timePreview: "00:00",
    timeLeft: "",
    interval: 0,
    status: false,
  }),

  created() {
    if (this.$props.time) {
      this.initialValues();
      this.counting();
    }
  },

  methods: {
    initialValues() {
      const time = this.$props.time;
      const [hour, minute]: number[] = time.split(":");

      this.timeLeft = dayjs()
        .hour(hour)
        .minute(minute)
        .format("YYYY-MM-DD HH:mm");
    },
    pauseCounting() {
      clearInterval(this.interval);
    },
    resetCounting() {
      this.pauseCounting();
      this.initialValues();
      this.counting();
    },
    counting() {
      this.interval = setInterval(() => {
        const timeCurrent = dayjs();
        const timeLeft = dayjs(this.timeLeft);

        const diffHours = timeLeft.diff(timeCurrent, "h");
        const hours = String(diffHours).padStart(2, "0");

        const diffMinutes = timeLeft.diff(timeCurrent, "m");
        const minutes = String(diffMinutes).padStart(2, "0");

        if (+hours <= 0 && +minutes <= 0) {
          this.pauseCounting();
          this.status = true;
          return;
        }

        if (+hours > 0) {
          this.timePreview = `${hours}h`;
          return;
        }

        if (+minutes > 0) {
          this.timePreview = `${minutes}m`;
          return;
        }
      }, 1000);
    },
  },

  watch: {
    "$props.datetime"() {
      this.resetCounting();
    },
  },
});
</script>