// Atomicデザイン: Molecules
import { Todo } from "../atoms/TodoAtoms";
import { FormEvent, useRef, useEffect } from "react";

export interface TodoInputProps {
  input: string;
  setInput: (val: string) => void;
  onAdd: (e: FormEvent) => void;
}

export function TodoInput({ input, setInput, onAdd }: TodoInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  return (
    <form
      onSubmit={onAdd}
      className="flex flex-col gap-3 w-full px-2 py-3 bg-white rounded-lg shadow-md mb-6 sm:max-w-[440px] mx-auto items-stretch"
      aria-label="Add todo form"
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="新しいタスクを追加..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-gray-50"
        aria-label="新しいタスクを追加"
      />
      <button
        type="submit"
        className="w-full sm:w-auto h-12 font-semibold rounded-lg text-base bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm mt-2 sm:mt-0"
        aria-label="タスク追加"
      >
        追加
      </button>
    </form>
  );
}
