<template>
  <div class="h-100 w-100 overflow-hidden">
    <div class="btn-group mb-1 w-100" role="group">
      <!--
			<button
        type="button"
        class="btn btn-sm btn-outline-primary rounded-0 px-3"
        @click="pagePreview"
      >
        <i class="bi bi-arrow-left-short" style="font-size: 22px" />
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-primary rounded-0 px-3"
        @click="pageNext"
      >
        <i class="bi bi-arrow-right-short" style="font-size: 22px" />
      </button> 
			-->
      <button
        type="button"
        class="btn btn-sm btn-outline-primary rounded-0 px-3"
        @click="pageReload"
      >
        <i class="bi bi-arrow-repeat" style="font-size: 18px" />
      </button>
      <input
        type="text"
        class="form-control rounded-0 border-primary ms-1 w-100"
        placeholder="url..."
        autocomplete="off"
        v-model.lazy.trim="inputUrl"
      />
    </div>

    <iframe
      width="100%"
      height="100%"
      ref="iframe"
      :src="inputUrl"
      frameborder="0"
      referrerpolicy="origin0when0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		url: {
			type: String,
			default: ''
		}
	},

  data() {
    return {
      inputUrl: "https://icons.getbootstrap.com/icons/bell/",
    };
  },

	created(){
		this.setPage()
	},

  methods: {
		setPage(){
			this.inputUrl = this.$props.url
		},
    // pagePreview() {
    //   const iframe = (this.$refs as any).iframe;
    //   iframe.contentWindow.top.history.go(-1);
    // },
    // pageNext() {
    //   const iframe = (this.$refs as any).iframe;
    //   iframe.contentWindow.top.history.go(1);
    // },
    pageReload() {
      const iframe = (this.$refs as any).iframe;

      var url = iframe.src;

      iframe.onload = () => {
        iframe.onload = undefined;
        iframe.src = url;
      };

      iframe.onload();
    },
  },

	watch: {
    "$props.url"() {
      this.setPage()
    },
	},
});
</script>