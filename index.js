import inquirer from "inquirer";
let todos = ['vivek'];
async function createTodo(todos) {
    let answer = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Select your option',
        choices: ['add', 'update', 'view', 'delete']
    });
    console.log(answer);
    if (answer.select === 'add') {
        let addTodo = await inquirer.prompt({
            type: 'input',
            message: 'Add item...',
            name: 'todo'
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (answer.select === 'update') {
        let updateTodo = await inquirer.prompt({
            type: 'list',
            message: 'Update todo',
            name: "todo",
            choices: todos.map((item) => item)
        });
        let addTodo = await inquirer.prompt({
            type: 'input',
            message: 'Add new item...',
            name: 'todo'
        });
        let newTodos = todos.filter((value) => value !== updateTodo.todo); // Corrected
        todos = [...newTodos, addTodo.todo];
        console.log(todos);
    }
    if (answer.select === 'view') {
        console.log(todos);
    }
    if (answer.select === 'delete') {
        let deleteTodo = await inquirer.prompt({
            type: 'list',
            message: 'Delete todo',
            name: "todo",
            choices: todos.map((item) => item)
        });
        let newTodos = todos.filter((value) => value !== deleteTodo.todo); // Corrected
        todos = [...newTodos];
        console.log(todos);
    }
}
createTodo(todos);
