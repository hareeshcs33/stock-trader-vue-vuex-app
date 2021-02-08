<template>
  <div class="todo-item">
    <div class="d-flex justify-content-between">
      <input
        class="form-control"
        type="text"
        v-model="todo.title"
        v-if="editTodoItem"
        @keydown.enter="editDone"
        @blur="editDone"
        @keydown.esc="cancelEdit"
        v-focus
      />
      <div @dblclick="editItem" v-else>{{ todo.title }}</div>
    </div>
    <button
      class="btn btn-sm btn-danger text-uppercase"
      @click="deleteItem(index)"
    >
      delete
    </button>
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
      this.editTodoItem = true;
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
