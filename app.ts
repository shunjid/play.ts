import axios from "axios";
import { Todo } from "./types/interfaces";

const url = "https://jsonplaceholder.typicode.com";

const logTodo = (todo: Todo): void => {
  console.log(todo.id, todo.title, todo.completed);
};

axios.get(`${url}/todos/1`).then((response) => {
  const todo = response.data as Todo;
  logTodo(todo);
});
