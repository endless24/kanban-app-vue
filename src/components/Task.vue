<template>
    <div class="uk-alert-default" uk-alert>
          <p>{{task.title}}</p>
        <div class="has-text-centered icons">

            <template v-if="task.edit">
                <input class="uk-input uk-form-width-large uk-margin-small-bottom uk-form-small uk-display-block" :placeholder="task.title" type="text" v-model="newTitle">
                <button class="uk-button uk-button-secondary uk-border-rounded uk-button-small" @click="UpdateEditedTitle(colId,task.id,newTitle)">
                    Save
                </button>
            </template>
            <template v-else>
                <button class="uk-button uk-button-primary uk-button-small" @click="editTaskTitle(colId,task.id)">
                    Edit
                </button>
                <span style="margin:2px">
                </span>
                <button class="uk-button uk-button-danger uk-button-small" @click="deleteTask(colId,task.id)">
                    Delete
                </button>
            </template >

           
        </div>   
    </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "Task",
  props: ["task", "colId"],

  data() {
    return {
      newTitle: "",
    };
  },

  methods: {
    editTaskTitle(colId, taskId) {
      store.editTask(colId, taskId);
    },

    UpdateEditedTitle(colId, taskId, tasksTitle) {
      if (tasksTitle === "") return;
      store.updateTask(colId, taskId, tasksTitle);
    },

    deleteTask(colId, taskId) {
      store.deleteTitle(colId, taskId);
    },
  },
};
</script>
