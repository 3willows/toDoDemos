let resopnse
let carryOn = true
let toDoArray = ['eat', 'pray', 'sleep']

while (carryOn) {
  function list () {
    console.log('****NEW TO DO*****')
    for (let i = 0; i < toDoArray.length; i++) {
      console.log(`${i + 1} ${toDoArray[i]}`)
    }
    console.log('**NEW TO DO ENDS**')
  }

  response = window.prompt('OPTION')

  if (response === 'new') {
    let toDo = window.prompt('Enter TO DO')
    toDo = `${toDo}`
    toDoArray.push(toDo)
    list()
  }

  if (response === 'list') {
    list()
  }

  if (response === 'delete') {
    let number = window.prompt('Which')
    if (number > toDoArray.length || number < 0) {
      console.log('no such number')
    } else {
      toDoArray.splice(number - 1, 1)
    }
    list()
  }

  if (response === 'quit') {
    carryOn = false
  }

  else {
    alert(`Options are: "new", "list", "delete" and "quit"`)
  }
}

// compare the below from Colt Steel

// if (input === 'delete') {
//   const index = parseInt(prompt('Ok, enter an index to delete:'));
//   if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Ok, deleted ${deleted[0]}`);
//   } else {
//       console.log('Unknown index')
//   }
// }