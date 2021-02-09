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
        v-for="(todo, index) in filteredTodos"
        :todo="todo"
        :index="index"
        :key="todo.id"
        @deleteItem="deleteItem"
      >
      </todo-item>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <input
          class="mr-2"
          type="checkbox"
          @change="checkAll"
          :checked="!anyRemainingItems"
        />Check All
      </div>
      <div class="d-flex">
        <span
          ><strong>{{ completedItems }}</strong> Items Complete and
          <strong>{{ remainingItems }}</strong> Items Active</span
        >
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <button class="btn btn-outline-info px-5" @click="filterItems = 'all'">
        All
      </button>
      <button class="btn btn-outline-info px-5" @click="filterItems = 'active'">
        Ative
      </button>
      <button
        class="btn btn-outline-info px-5"
        @click="filterItems = 'completed'"
      >
        Cmpleted
      </button>
      <button
        class="btn btn-outline-danger px-5"
        @click="clearCompletedItems"
        v-if="completedItems"
      >
        Clear
      </button>
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
      filterItems: "all",
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
    },
    checkAll() {
      this.todos.forEach(item => {
        item.completed = event.target.checked;
      });
    },
    showAllItems() {
      console.log("show all");
    },
    showActiveItems() {
      console.log("showActiveItems");
    },
    showCompletedItems() {
      console.log("showCompletedItems");
    },
    clearCompletedItems() {
      this.todos = this.todos.filter(item => !item.completed);
    }
  },
  computed: {
    completedItems() {
      return this.todos.filter(item => item.completed).length;
    },
    remainingItems() {
      return this.todos.filter(item => !item.completed).length;
    },
    anyRemainingItems() {
      return this.remainingItems != 0;
    },
    filteredTodos() {
      if (this.filterItems == "all") {
        return this.todos;
      } else if (this.filterItems == "active") {
        return this.todos.filter(item => !item.completed);
      } else if (this.filterItems == "completed") {
        return this.todos.filter(item => item.completed);
      }
      return this.todos;
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
