export interface SelectInputProps {
  title: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectInput({
  title,
  options,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800">
        {title}
      </label>
      <select
        id="month"
        name="month"
        value={value}
        onChange={onChange}
        className="block w-full pl-2 py-2 mt-2 text-indigo-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
      >
        {options?.map((option, input) => (
          <option key={input} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
