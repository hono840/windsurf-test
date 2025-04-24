// Atomicデザイン: Molecules
import { Todo, TodoItemProps, TodoCheckbox, DeleteButton } from "../atoms/TodoAtoms";

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`flex items-center gap-3 px-3 py-4 rounded-lg shadow-sm text-[17px] transition-colors select-none ${todo.completed ? 'bg-green-50 text-gray-400 line-through' : 'bg-white text-gray-900 border border-gray-200'}`}
    >
      <TodoCheckbox checked={todo.completed} onChange={() => onToggle(todo.id)} label={`「${todo.text}」を完了にする`} />
      <span className="flex-1 break-words text-lg sm:text-base">{todo.text}</span>
      <DeleteButton onClick={() => onDelete(todo.id)} label={`「${todo.text}」を削除`} />
    </li>
  );
}
