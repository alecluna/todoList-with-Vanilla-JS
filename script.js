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

  addTodos: function(todoTextInput) {
    
    this.todos.push({
      todoText: todoTextInput,
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
    /*for (var count = 0; count < totalTodos; count++) {

      if (this.todos[count].completed === true) {
        completedTodos++;
      }
    }*/

    this.todos.forEach(function(todo) {
      //callback function
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    // if (completedTodos === totalTodos) {

    //   this.todos.forEach(function(todos){
    //       todo.completed = false;
    //   });

    // }
    // //otherwise make everything true 
    // else {

    //   this.todos.forEach(function(todos){
    //     todos.completed = true;
    //   });
    // }

    this.todos.forEach(function(todo) {
      //Case 1: If everything's true, make everything false
      if (completedTodos === totalTodos) {
        todo.completed = false;
        //Case 2: Otherwise, make everything true
      } else {
        todo.completed = true;
      }

    });
  }

};

//used for onclick function in html
//calls todoLsit objects for each task
var handlers = {

  addTodos: function() {

    var addTodoInput = document.getElementById('addTodoTextInput');
    todoList.addTodos(addTodoInput.value);
    addTodoInput.value = ' ';
    view.displayTodos();

  },

  changeTodos: function() {

    var changeTodoNumber = document.getElementById('changeTodoNumber');
    var changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodos(changeTodoNumber.valueAsNumber, changeTodoText.value);
    changeTodoText.value = '';
    changeTodoNumber.valueAsNumber = '';
    view.displayTodos();

  },

  removeTodos: function(position) {


    todoList.removeTodos(position);
    view.displayTodos();
  },

  toggleCompleted: function() {

    var toggleCompletedPositionInput = document.getElementById('toggleCompleted');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.valueAsNumber = '';
    view.displayTodos();

  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {

  displayTodos: function() {

    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    //replaced for loop with cleaner forEach loop
    todoList.todos.forEach(function(todo, position){
      
      var todoli = document.createElement('li');
      var todoCompleted = '';


      if (todo.completed === true) {
        todoCompleted = '(x) ' + todo.todoText;
      } else {
        todoCompleted = '( ) ' + todo.todoText;
      }

      todoli.id = position;
      todoli.textContent = todoCompleted;
      todoli.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoli);
      //padding in this allows us to call the view object 
      //instead of callback function 
    }, this);

  },

  createDeleteButton: function() {

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;

  },

  setUpEventListeners: function() {

    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      //console.log(event.target.parentNode.id);
      ////////////////////////////////////////////
      // get element that was clicked on
      var elementClicked = event.target;
      //check if element clicked is delete button
      if (elementClicked.className === 'deleteButton') {

        //run handlers.removeTodos();
        handlers.removeTodos(parseInt(elementClicked.parentNode.id));
      }
    });

  }
};

view.setUpEventListeners();


//higher order function, hypothetically debuggs program
//callback function is the function being passed in
//////////////////////////////////////////////////////////
function runWithDebugger(ourFunction) {
  debugger;
  ourFunction;
}



//old code
/*var displayTodoButton = document.getElementById('displayTodoButton');
var displaytoggleAll = document.getElementById('displaytoggleAll');


displayTodoButton.addEventListener("click", function() {

  console.log(todoList.displayTodos());
  
});
displaytoggleAll.addEventListener("click", function() {

  console.log(todoList.toggleAll());
  
});*/