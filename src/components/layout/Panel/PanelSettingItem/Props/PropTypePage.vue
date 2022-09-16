<template>
	<div>
    <div class="mb-3">
      <label for="url" class="form-label">Url</label>
      <input type="url" class="form-control" id="url" v-model="inputUrl" @change="handleInput" />
    </div>
	</div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    itemId: {
      type: String,
      required: true,
    },
    itemProps: {
      type: Object,
      required: true,
      default: () => ({
        url: 'https://www.tecmundo.com.br/',
      })
    },
  },

  data: () => ({
    debounce: 0,
    inputUrl: "",
  }),

  created() {
    this.inputUrl = this.$props.itemProps.url || 'https://www.tecmundo.com.br/'
  },

  methods:{
    updateValues(): void {
      const newProps = {
        url: `${this.inputUrl}`,
      }

      this.$store.dispatch("updateItemProps", {
        id: this.$props.itemId,
        props: newProps
      });

      this.$emit('setItemProps', newProps)
    },
    handleInput(): void{
      clearTimeout(this.debounce)
      
      this.debounce = setTimeout(() => {
        this.updateValues()
      }, 500)
    }
  }
})
</script>