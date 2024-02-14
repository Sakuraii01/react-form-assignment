import useViewModel from "./viewModel";

type InputFieldProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  maxChar?: number;
};

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  maxChar,
}: InputFieldProps) => {
  const { meta, value, onChange } = useViewModel(name, type);

  return (
    <div className="my-2 mx-4 m-auto">
      <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
        {label}
      </label>
      <div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxChar}
          className="text-input w-full cursor-pointer"
          required={meta.touched && meta.error}
        />
        {meta.touched && meta.error && (
          <p className="text-xs text-red-600 text-left ">{meta.error}</p>
        )}
      </div>
    </div>
  );
};
