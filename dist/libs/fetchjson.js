"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = "https://jsonplaceholder.typicode.com";
var logTodo = function (todo) {
    console.log(todo.id, todo.title, todo.completed);
};
axios_1.default.get(url + "/todos/1").then(function (response) {
    var todo = response.data;
    logTodo(todo);
});
//# sourceMappingURL=fetchjson.js.map