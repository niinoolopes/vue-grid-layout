<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center mb-1">
      <div class="progress me-1 w-100" style="height: 12px;">
        <div class="progress-bar" role="progressbar" :style="`width: ${percentageCompleted}%`"></div> 
      </div>
      <div style="width: 40px" >
        {{percentageCompleted}}%
      </div>
    </div>

    <form class="d-flex align-items-center py-1 mb-2" @submit.prevent="addTodoItem">
      <input type="text" class="form-control rounded-0 me-2" required v-model="textInput" id="text-input" placeholder="new task">
      
      <button type="submit" class="btn btn-sm py-0 px-1 btn-outline-primary" style="width: 36px">
        <i class="bi bi-plus" style="font-size: 18px; cursor: pointer" />
      </button>
    </form>


    <ul class="list-group flex-grow-1 overflow-auto">
      <li v-for="item in list" :key="item.id" class="list-group-item d-flex align-items-center justify-content-between">
        <div class="form-check w-100">
          <input class="form-check-input" type="checkbox" v-model="item.completed"  :id="item.id" />
          <label class="form-check-label w-100" :class="{ 'text-decoration-line-through': item.completed, 'text-black-50': item.completed }" :for="item.id" >
            {{ item.text }}
          </label>
        </div>
        
        <button type="button" class="btn btn-sm py-0 border-0 rounded-0" @click="deleteTodoItem(item)" >
          <i class="bi bi-x" style="font-size: 18px; cursor: pointer" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "@/types/TypeTodo";

export default defineComponent({
  props: {
    itemId: {
      type: String, 
      retuired: true
    },
    items: {
      type: Array as () => TodoItem[],
      default: () => ([])
    }
  },

  data: () => ({
    list: [] as TodoItem[],
    textInput: "",
  }),

  created(){
    this.list = this.items
  },

  computed:{
    itemsSortCompleted(): TodoItem[] {
      return Array.from(this.list).sort((a,b) => a.completed === b.completed ? -1 : 1)
    },
    percentageCompleted(): number{
    const totalList = this.list.length
    const totalListCompleted = this.list.filter(e => e.completed).length

    const newValue = !!totalListCompleted && !!totalListCompleted 
      ? Number(totalListCompleted / totalList) * 100
      : 0 

      return +Number(newValue).toFixed(0)
    }
  },

  methods: {
    updateValues(): void {
      const newProps = {
        items: JSON.parse( JSON.stringify(this.list)),
      }

      this.$store.dispatch("updateItemProps", {
        id: this.$props.itemId,
        props: newProps
      });
    },
    // setPercentageCompleted(): void {
    //   console.log('setPercentageCompleted');

    //   const totalList = this.list.length
    //   const totalListCompleted = this.list.filter(e => e.completed).length

    //   const newValue = !totalListCompleted && !totalListCompleted 
    //     ? Number(totalListCompleted / totalList) * 100
    //     : 0 

    //     console.log('totalListCompleted', totalListCompleted);
    //     console.log('totalListCompleted', totalListCompleted);
    //     console.log('newValue', newValue);

    //   this.percentageCompleted = newValue
    // },
    addTodoItem(): void {
      const newItem: TodoItem = {
        id: uuidv4(),
        text: this.textInput,
        completed: false,
      };

      const newList: TodoItem[] = [newItem, ...this.list];

      this.list = newList;

      this.textInput = ''

      this.updateValues()
      // this.setPercentageCompleted()
    },
    deleteTodoItem({ id }: TodoItem): void {
      this.list = this.list.filter((item) => item.id !== id);

      this.updateValues()
      // this.setPercentageCompleted()
    },
  },
});
</script>