<template>
    <div  @click="setActiveCol(col.id)" style="cursor: pointer;">
        <div class="uk-card uk-card-default uk-card-body" id="todo-col">
            <h3> {{col.name}}</h3>
            <Task v-for="task in col.tasks" :key="task.id" :task="task" :colId="col.id"/>
        </div>
    </div>   
</template>

<script>
import Task from "./Task.vue";
import { store } from "../store";
export default {
  name: "BoardColumnOne",
  props: ["col"],
  components: {
    Task,
  },
  methods: {
    setActiveCol(colId) {
      store.setActiveColumn(colId);
    },
  },
};
</script>
