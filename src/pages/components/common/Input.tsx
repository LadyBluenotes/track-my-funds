interface InputProps {
  type: "text" | "number" | "date" | "select";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  placeholder?: string;
}

export default function Input({
  type,
  value,
  onChange,
  inputName,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800">
        {inputName}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
}
