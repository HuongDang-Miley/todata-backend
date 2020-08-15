/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = (todo) => todo.text

const getPriority = (todo) => todo.priority

const isComplete = (todo) => todo.complete

const isHighPriority = (todo) => todo.priority === 2

const names = (todos) => todos.map(getTodoName)

const priorities = (todos) => todos.map(getPriority)

const namesAndPriorities = (todos) => {
  let result = []
  for (const todo of todos) {
    if (todo.priority === 1) {
      result.push(`${todo.text} - Low`)
    }
    if (todo.priority === 2) {
      result.push(`${todo.text} - High`)
    }
  }
  return result
}

const justNotComplete = (todos) => todos.filter((todo) => todo.complete === false)

const justComplete = (todos) => todos.filter((todo) => todo.complete === true)

const priority2Only = (todos) => todos.filter((todo) => todo.priority === 2)

const priority1Only = (todos) => todos.filter((todo) => todo.priority === 1)





/***********************
 * ITERATION FUNCTIONS *
 ***********************/




// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}

// // profestion way:
// const names1 = (todos) => todos.map((todo) => todo.text)
// // Also can do this: (not as clear)
// const names2 = todos => todos.map(todo => todo.text)

// const add1 = function (x, y) {
//   return x + y
// }
// const add2 = (x, y) => x + y
// // if take 1 parameter, don't need ()
// // this (prefer way)
// const add = (n) => n + 5;
// // equal this (doesn't look like function but works)
// const add3 = n => n + 5;
// let test = add(5)
// test;