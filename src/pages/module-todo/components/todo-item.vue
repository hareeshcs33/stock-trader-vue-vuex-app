<template>
  <div class="todo-item">
    <div class="d-flex w-100">
      <div class="mr-2">
        <input type="checkbox" v-model="todo.completed" />
      </div>
      <div class="d-flex justify-content-between w-100">
        <input
          v-if="editTodoItem"
          class="form-control"
          type="text"
          v-model="todo.title"
          @keydown.enter="editDone"
          @blur="editDone"
          @keydown.esc="cancelEdit"
          v-focus
        />
        <div
          :class="todo.completed ? 'font-weight-bold' : ''"
          @dblclick="editItem"
          v-else
        >
          {{ todo.title }}
        </div>
        <button
          class="btn btn-sm btn-danger text-uppercase"
          @click="deleteItem(index)"
          :disabled="todo.completed"
        >
          delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editTodoItem: false,
      beforeEditCapture: ""
    };
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    deleteItem(index) {
      this.$emit("deleteItem", index);
    },
    editItem() {
      this.beforeEditCapture = this.todo.title;
      if (!this.todo.completed) {
        this.editTodoItem = true;
      }
    },
    editDone() {
      this.editTodoItem = false;
    },
    cancelEdit() {
      this.todo.title = this.beforeEditCapture;
      this.editTodoItem = false;
    }
  }
};
</script>
