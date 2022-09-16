<template>
  <div>
    <div class="mb-3">
      <label for="time" class="form-label">Tempo</label>
      <input type="time" class="form-control" id="time" step="1" v-model="time" @change="handleInput" />
    </div>

    <hr />

    <div class="mb-3">
      <label for="time" class="form-label">Notificação</label>
      <div class="border px-2 pt-2 mb-1" v-for="itemMp3 in itemMp3List" :key="itemMp3.name">

        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" :id="itemMp3.name" :value="itemMp3.fileName" v-model="fileName" @change="handleInput" />
          <label class="form-check-label" :for="itemMp3.name">
            {{ itemMp3.name }}
          </label>
        </div>
        
        <audio controls :ref="itemMp3.fileName">
          <source :src="require(`@/assets/audio/${itemMp3.fileName}.mp3`)" type="audio/mpeg" >
        </audio>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { itemMp3ListData } from "@/content";
import { ItemMp3 } from "@/types";
import Vue from "vue";

type ItemMp3Play = ItemMp3 & {
  play: boolean
}
type IData = {
  debounce: number
  time: string
  fileName: string
  itemMp3List: ItemMp3Play[] 
  controls: Record<string, unknown>
};

const fileName_default = "dinner-chimes-the-u.s.-marine-corps-band"

export default Vue.extend({
  props: {
    itemId: {
      type: String,
      required: true,
    },
    itemProps: {
      type: Object,
      required: true,
      default: () => ({
        time: '00:00:00',
        fileName: ''
      })
    },
  },

  data: (): IData => ({
    debounce: 0,
    time: "",
    fileName: fileName_default,
    itemMp3List: [],
    controls: {},
  }),

  created() {
    this.itemMp3List = Array.from(itemMp3ListData).map(el => ({ ...el, play: false }));
    this.time = this.$props.itemProps.time || '00:00:15'
    this.fileName = this.$props.itemProps.fileName || fileName_default
  },

  methods: {
    updateValues(): void {
      const newProps = {
        time: `${this.time}`,
        fileName: `${this.fileName}`,
      }

      this.$store.dispatch("updateItemProps", {
        id: this.$props.itemId,
        props: newProps
      });

      this.$emit('setItemProps', newProps)
    },
    handleInput(){
      clearTimeout(this.debounce)
      
      this.debounce = setTimeout(() => {
        this.updateValues()
      }, 500)
    },
    handleMp3Item({ fileName }: ItemMp3Play): void {
      let [ref] = this.$refs[fileName] as [any];

       ref.play();
    },
  }
});
</script>

<style scoped>
audio {
  width: 100%;
  height: 35px;
  background: #f1f3f4;
}
</style>