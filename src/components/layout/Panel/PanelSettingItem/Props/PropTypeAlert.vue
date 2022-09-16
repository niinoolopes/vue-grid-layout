<template>
  <div>
    <div class="mb-3">
      <label for="time" class="form-label">Data e hora</label>
      <input type="time" class="form-control" id="time" v-model="time" @change="handleInput" />
    </div>
    
    <hr />

    <div class="mb-3">
      <label for="message" class="form-label">Mensagem</label>
      <input type="text" class="form-control" id="message" placeholder="Digite uma mensagem" v-model="message" @change="handleInput" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type IData = {
  debounce: number
  time: string
  message: string
};

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
        datetime: '00:00:00',
        message: ''
      })
    },
  },

  data: (): IData => ({
    debounce: 0,
    time: "",
    message: "",
  }),

  created() {
    this.time = this.$props.itemProps.time || '2022-01-01 00:00:15'
    this.message = this.$props.itemProps.message || ''
  },

  methods:{
    updateValues(): void {
      const newProps = {
        time: `${this.time}`,
        message: `${this.message}`,
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
    }
  }
});
</script>