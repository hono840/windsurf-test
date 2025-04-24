// Atomicデザイン: Atoms
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label={label}
      className="w-8 h-8 accent-blue-600 cursor-pointer flex-shrink-0 focus:ring-2 focus:ring-blue-400 rounded-lg"
    />
  );
}

export function DeleteButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="bg-transparent border-none text-red-600 cursor-pointer text-3xl p-2 rounded-full hover:bg-red-100 transition-colors flex-shrink-0 ml-2 focus:ring-2 focus:ring-red-300"
    >
      🗑️
    </button>
  );
}
