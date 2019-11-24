import React, { useState, useEffect } from "react";
import foto from "../../foto/nothingFound.png"
import TodoListItem from "../todo-list-item/todo-list-item";

import "./todo-list.css";

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {
  const [inListStatus, setStatus] = useState(true);
  useEffect(() => {
    if (items.length !== 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  });
  const elements = items.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return (
    <div>
      {inListStatus ? (
        <ul className="todo-list list-group">{elements}</ul>
      ) : (
        <div className="todoimg"><img alt="foto" src={foto}/></div>
      )}
    </div>
  );
};

export default TodoList;
