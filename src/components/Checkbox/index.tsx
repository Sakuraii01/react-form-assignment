import useViewModel from "./viewModel";
type Options = {
  label: string;
  value: string;
};
type CheckboxProps = {
  name: string;
  label: string;
  options: Options[];
};
type CheckboxChoiceProps = {
  name: string;
  options: Options;
};

export const Checkbox = ({ name, label, options }: CheckboxProps) => {
  const { meta } = useViewModel(name, "checkbox");

  return (
    <div className="my-2 items-center mx-4 m-auto">
      <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
        {label}
      </label>
      <div className="mt-2 flex sm:items-center flex-wrap gap-1">
        {options.map((option: Options, key: number) => (
          <CheckboxChoice key={key} name={name} options={option} />
        ))}
      </div>
      {meta.touched && meta.error && (
        <p className="text-xs text-red-500 text-left">{meta.error}</p>
      )}
    </div>
  );
};

const CheckboxChoice = ({ name, options }: CheckboxChoiceProps) => {
  const { meta, input } = useViewModel(name, "checkbox", options.value);
  return (
    <div className="flex items-center ">
      <input
        type="checkbox"
        className="checkbox"
        required={meta.touched && meta.error}
        {...input}
      />
      <label className="ml-2 block text-sm leading-6 me-10">
        {options.label}
      </label>
    </div>
  );
};
