import { useField } from "react-final-form";

const useViewModel = (name: string, type: string, value?: string) => {
  const { meta, input } = useField(
    name,
    value ? { type: type, value } : { type: type }
  );

  return {
    meta,
    input,
  };
};

export default useViewModel;
