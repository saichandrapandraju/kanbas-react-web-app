// src/Labs/Lab5/WorkingWithArraysAsynchronously.tsx
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPencil, FaCirclePlus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await client.fetchTodos();
      setTodos(fetchedTodos);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error fetching todos");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
    try {
      const updatedTodos = await client.createTodo();
      setTodos(updatedTodos);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error creating todo");
    }
  };

  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({
        title: "New Posted Todo",
        completed: false,
      });
      setTodos([...todos, newTodo]);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error posting todo");
    }
  };

  const removeTodo = async (todo: Todo) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error removing todo");
    }
  };

  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error deleting todo");
    }
  };

  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error updating todo");
    }
  };

  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => 
      t.id === todo.id ? { ...todo, editing: true } : t
    ));
  };

  const handleKeyDown = async (todo: Todo, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await updateTodo({ ...todo, editing: false });
    }
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <h4>
        Todos
        
        <FaCirclePlus
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
          role="button"
        />
                <FaCirclePlus onClick={createTodo} className="text-success float-end fs-3"      id="wd-create-todo" />

      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
              role="button"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
              role="button"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
              role="button"
            />
            <input
              type="checkbox"
              className="form-check-input me-2 float-start"
              checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className="form-control w-50 float-start"
                value={todo.title}
                onChange={(e) => setTodos(todos.map((t) => 
                  t.id === todo.id ? { ...todo, title: e.target.value } : t
                ))}
                onKeyDown={(e) => handleKeyDown(todo, e)}
                autoFocus
              />
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}