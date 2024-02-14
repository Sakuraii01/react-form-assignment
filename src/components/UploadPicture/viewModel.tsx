import { useField } from "react-final-form";
const useViewModel = (name: string) => {
  const { meta } = useField(name, { type: "file" });

  return {
    meta,
  };
};
export default useViewModel;
