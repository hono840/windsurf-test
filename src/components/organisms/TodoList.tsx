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
      className="w-full px-1 sm:max-w-[440px] mx-auto bg-white rounded-lg shadow-md py-2 min-h-24"
      aria-label="Todoリスト"
    >
      <ul className="w-full list-none p-0 m-0 flex flex-col gap-2">
        {todos.length === 0 && (
          <li className="text-gray-400 text-center py-8 text-base">タスクはありません</li>
        )}
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  );
}
