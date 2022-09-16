<template>
  <div class="flex-grow-1 d-flex flex-column item">
    <div class="pb-1 border-bottom d-flex align-items-center justify-content-between" style="height: 30px">
      <span class="fw-light fst-italic lh-1">Pomodoro</span>
      <button v-if="status" class="btn btn-sm py-0 text-white bg-primary" @click="status = !status">
        <i class="bi bi-bell"></i>
      </button>
    </div>

    <p class="fs-1 mb-0 py-2 text-center flex">{{ timeLeft }}</p>

    <div class="mt-auto btn-group d-flex justify-content-center">
      <button v-if="!status" class="btn btn-sm btn-outline-danger" @click="continueCounting()">
        <i class="action bi bi-play" />
      </button>
      
      <button v-else class="btn btn-sm btn-outline-danger" @click="pauseCounting()">
        <i class="action bi bi-pause" />
      </button>
      
      <button class="btn btn-sm btn-outline-danger" @click="resetCounting()">
        <i class="action bi bi-x" />
      </button>
    </div>
    
    <audio v-if="reloadMp3" controls hidden :ref="$props.fileName">
      <source :src="pathFile" type="audio/mpeg" >
    </audio>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    time: {
      type: String,
      default: '',
    },
    fileName: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    timeLeft: "00:00:00",
    seconds: 0,
    minutes: 0,
    status: false,
    interval: 0,
    reloadMp3: true
  }),

  created() {
    this.initialValues();
  },

  computed:{
    pathFile(): string {
      return require(`@/assets/audio/${this.$props.fileName}.mp3`)
    }
  },

  methods: {
    formatTime(num: number): string {
      return new Date(num).toISOString().slice(14, 19);
    },
    formatCurrentTime() {
      const seconds = this.seconds;
      this.timeLeft = this.formatTime(seconds * 1000)
    },
    initialValues() {
      const hms = this.$props.time
      const a = hms.split(':')

      this.seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
      this.formatCurrentTime();
    },
    continueCounting() {
      this.status = true;
      this.counting();
    },
    pauseCounting() {
      this.status = false;
      clearInterval(this.interval);
    },
    resetCounting() {
      this.pauseCounting();
      this.initialValues();
      this.stopNotify()
    },
    counting() {
      this.interval = setInterval(() => {
        if (this.seconds <= 0) {
          this.pauseCounting();
          this.timeLeft = this.formatTime(0) //new Date(0).toISOString().slice(14, 19);
          this.notify();
          return;
        }

        this.seconds--;

        this.formatCurrentTime();
      }, 1000);
    },
    notify(){
      let ref: any = this.$refs[this.$props.fileName];
      ref.play();
    },
    stopNotify(){
      let ref: any = this.$refs[this.$props.fileName];
      ref.pause();
    }
  },

  watch: {
    "$props.time"() {
      this.resetCounting()
    },
    "$props.fileName"() {
      this.reloadMp3 = false

      setTimeout(() => {
        this.reloadMp3 = true
      }, 500)
    },
  },
});
</script>
<style scoped>
.action {
  font-size: 22px;
}
</style>