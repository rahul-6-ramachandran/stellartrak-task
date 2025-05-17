export default function SelectBox ({ options = [], selected, onChange,placeholder }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="flex w-full px-4 py-3 text-base text-sm h-12 text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option value="">{placeholder}</option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}