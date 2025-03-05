const TASK_ID_1 = Symbol('task 1');
const TASK_ID_2 = Symbol('task 2');
const TASK_ID_3 = Symbol('task 3');
const TASK_ID_4 = Symbol('task 4');

import { categories } from "./categories";

export const TASKS = [
    {id: TASK_ID_1, title: 'New task', description: 'Something interesting', category: categories[0].name, isCompleted: true},
    {id: TASK_ID_2, title: 'Side task', description: 'Not interesting', category: categories[2].name, isCompleted: false},
    {id: TASK_ID_3, title: 'New task', description: 'Meh', category: categories[1].name, isCompleted: false},
    {id: TASK_ID_4, title: 'Another side task', description: "This I've done", category: categories[0].name, isCompleted: true}
]