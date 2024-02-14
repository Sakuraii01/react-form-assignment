import useViewModel from "./viewModel";
type Options = {
  label: string;
  value: string;
};

type InputRadioProps = {
  name: string;
  label: string;
  options: Options[];
};

type RadioChoiceProps = {
  name: string;
  options: Options;
};
export const InputRadio = ({ name, label, options }: InputRadioProps) => {
  const { meta } = useViewModel(name, "radio");

  return (
    <div className="my-4 mx-4 m-auto">
      <label className="block text-sm font-medium leading-6 text-gray-900 text-left">
        {label}
      </label>
      <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {options.map((option: Options, key: number) => {
          return <RadioChoice key={key} name={name} options={option} />;
        })}
      </div>
      {meta.touched && meta.error && (
        <p className="text-xs text-red-600 text-left ">{meta.error}</p>
      )}
    </div>
  );
};
const RadioChoice = ({ name, options }: RadioChoiceProps) => {
  const { meta, input } = useViewModel(name, "radio", options.value);
  return (
    <div className="flex items-center ">
      <input
        type="radio"
        className="radio-input"
        required={meta.touched && meta.error}
        {...input}
      />
      <label className="ml-2 block text-sm leading-6 me-10">
        {options.label}
      </label>
    </div>
  );
};
