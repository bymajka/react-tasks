const TASK_ID_1 = Symbol('task 1');
const TASK_ID_2 = Symbol('task 2');
const TASK_ID_3 = Symbol('task 3');
const TASK_ID_4 = Symbol('task 4');


export const TASKS = [
    {id: TASK_ID_1, title: 'New task', description: 'Something interesting', isCompleted: true},
    {id: TASK_ID_2, title: 'Side task', description: 'Not interesting', isCompleted: false},
    {id: TASK_ID_3, title: 'New task', description: 'Meh', isCompleted: false},
    {id: TASK_ID_4, title: 'Another side task', description: "This I've done", isCompleted: true}
]