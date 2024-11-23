// src/Labs/Lab5/WorkingWithArrays.tsx
import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

interface Todo {
    id: string;
    title: string;
    completed: boolean;
    description: string;
  }

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState<Todo>({
    id: "1",
    title: "NodeJS Assignment",
    completed: false,
    description: "Initial description"
  });

  const API = `${REMOTE_SERVER}/lab5/todos`;

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Retrieving Arrays */}
      <h4>Retrieving Arrays</h4>
      <a 
        id="wd-retrieve-todos" 
        className="btn btn-primary" 
        href={API}>
        Get Todos
      </a>
      <hr/>

      {/* Retrieving Item by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <a 
        id="wd-retrieve-todo-by-id" 
        className="btn btn-primary float-end" 
        href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        value={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>

      {/* Filtering Array Items */}
      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr/>

      {/* Creating new Items */}
      <h4>Creating new Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-primary"
        href={`${API}/create`}>
        Create Todo
      </a>
      <hr/>

      {/* Deleting from Array */}
      <h4>Deleting from an Array</h4>
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <input
        value={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>

      {/* Updating an Item */}
      <h4>Updating an Item in an Array</h4>
      <a
        href={`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`}
        className="btn btn-primary float-end">
        Update Todo
      </a>
      <input
        value={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        value={todo.title}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br/>
      <br/>
      <hr/>
      <h4>Additional Operations</h4>
      <div className="mb-3">
        {/* Completed Status Update */}
        <div className="mb-2">
          <label className="form-label">Completed Status:</label>
          <div className="d-flex gap-2 mb-2">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-todo-completed"
                checked={todo.completed}
                onChange={(e) => 
                  setTodo({ ...todo, completed: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="wd-todo-completed">
                Mark as completed
              </label>
            </div>
            <a
              id="wd-update-completed"
              href={`${API}/${todo.id}/completed/${todo.completed}`}
              className="btn btn-success">
              Update Completed Status
            </a>
          </div>
        </div>

        {/* Description Update */}
        <div className="mb-2">
          <label className="form-label">Description:</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              id="wd-todo-description"
              value={todo.description}
              onChange={(e) => 
                setTodo({ ...todo, description: e.target.value })
              }
            />
            <a
              id="wd-update-description"
              href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
              className="btn btn-primary">
              Update Description
            </a>
          </div>
        </div>
      </div>
      <hr/>
     
    </div>
  );
}