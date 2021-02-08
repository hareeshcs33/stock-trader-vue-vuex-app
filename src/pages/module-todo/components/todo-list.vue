<template>
  <div class="container m-auto">
    <div class="form-froup">
      <input
        type="text"
        class="form-control todo-input"
        placeholder="what needs to done..."
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
    </div>
    <div>
      <todo-item
        v-for="(todo, index) in todos"
        :todo="todo"
        :index="index"
        :key="todo.id"
        @deleteItem="deleteItem"
      >
      </todo-item>
    </div>
  </div>
</template>
<script>
import TodoItem from "./todo-item.vue";
export default {
  data() {
    return {
      newTodo: "",
      todoId: 4,
      completed: false,
      todos: [
        { id: 1, title: "Finish Vue Screencast", completed: false },
        { id: 2, title: "Take over world", completed: false },
        { id: 3, title: "This is simple title", completed: false }
      ]
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() == "") {
        return;
      }
      this.todos.push({
        id: this.todoId,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
      this.todoId++;
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    }
  },
  components: {
    TodoItem
  }
};
</script>
<style scoped>
.container {
  max-width: 600px;
  padding-top: 5%;
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px 0;
  border-bottom: 1px solid #a3a3a3;
}
</style>
