'use client';
import { useState, FormEvent } from "react";
import styles from "./page.module.css";
import { Todo, } from "../components/atoms/TodoAtoms";
import { TodoInput } from "../components/molecules/TodoInput";
import { TodoList } from "../components/organisms/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(1);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: nextId, text: input.trim(), completed: false }]);
    setNextId(nextId + 1);
    setInput("");
  };

  const handleToggle = (id: number) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ marginBottom: 16, textAlign: "center", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>📝 Todo App</h1>
        <TodoInput input={input} setInput={setInput} onAdd={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      </main>
    </div>
  );
}
