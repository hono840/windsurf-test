// Atomicデザイン: Organisms
import { Todo, TodoItemProps } from "../atoms/TodoAtoms";
import { TodoItem } from "../molecules/TodoItem";

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <section
      className="w-full px-2 max-w-md mx-auto bg-white rounded-2xl shadow-lg py-4 min-h-24"
      aria-label="Todoリスト"
    >
      <ul className="w-full list-none p-0 m-0 flex flex-col gap-3">
        {todos.length === 0 && (
          <li className="text-gray-400 text-center py-10 text-base bg-gray-50 rounded-xl shadow-inner">
            タスクはありません
          </li>
        )}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
