var todoList = {

  todos: [],

  displayTodos: function() {
    console.log('My todos');

    //if nothing is there, display empty
    if (this.todos.length === 0) {
      console.log('your todo list is empty!');

      //otherwise loop thru everything and display todoText
    } else {
      for (var i = 0; i < this.todos.length; i++) {

        //if completed is true, check off todo
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
          //otherwise default value == false 
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodos: function(position, todoText) {

    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  removeTodos: function(index) {

    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {

    todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //get number of completed todos
    for (var count = 0; count < totalTodos; count++) {

      if (this.todos[count].completed === true) {
        completedTodos++;
      }
    }

    //if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    //otherwise make everything true 
    else {

      for (var count = 0; count < totalTodos; count++) {
        this.todos[count].completed = true;
      }
    }
    this.displayTodos();
  }

};

//used for onclick function in html
//calls todoLsit objects for each task
var handlers = {

  displayTodos: function() {
    todoList.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
  },

  addTodos: function() {

    var addTodoInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoInput.value);
    addTodoInput.value = ' ';
  },

  changeTodos: function() {

    var changeTodoNumber = document.getElementById('changeTodoNumber');
    var changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodos(changeTodoNumber.valueAsNumber, changeTodoText.value);
    changeTodoText.value = '';
    changeTodoNumber.valueAsNumber = '';
  },

  removeTodos: function() {

    var removeTodosInput = document.getElementById('removeTodosInput');
    if (removeTodosInput.valueAsNumber >= 0) {

      todoList.removeTodos(removeTodosInput.valueAsNumber);

    } else {
      console.log('bad input');
    }

    removeTodosInput.valueAsNumber = '';
  },

  toggleCompleted: function() {

    var toggleCompletedPositionInput = document.getElementById('toggleCompleted');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.valueAsNumber = '';
  }


};


//old code
/*var displayTodoButton = document.getElementById('displayTodoButton');
var displaytoggleAll = document.getElementById('displaytoggleAll');


displayTodoButton.addEventListener("click", function() {

  console.log(todoList.displayTodos());
  
});
displaytoggleAll.addEventListener("click", function() {

  console.log(todoList.toggleAll());
  
});*/