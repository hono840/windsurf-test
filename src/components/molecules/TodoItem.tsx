// Atomicデザイン: Molecules
import {
  Todo,
  TodoItemProps,
  TodoCheckbox,
  DeleteButton,
} from "../atoms/TodoAtoms";

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`flex items-center gap-4 px-4 py-4 rounded-2xl shadow-md text-lg select-none transition-all duration-150 ${
        todo.completed
          ? "bg-green-50 text-gray-400 line-through"
          : "bg-white text-gray-900 border border-gray-200"
      }`}
    >
      <TodoCheckbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        label={`「${todo.text}」を完了にする`}
      />
      <span className="flex-1 break-words text-lg sm:text-base leading-relaxed">
        {todo.text}
      </span>
      <DeleteButton
        onClick={() => onDelete(todo.id)}
        label={`「${todo.text}」を削除`}
      />
    </li>
  );
}
