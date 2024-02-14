import FileDropZone from "./FileDropZone";
import { Field } from "react-final-form";
import useViewModel from "./viewModel";

const UploadPicture = () => {
  const { meta } = useViewModel("profileImage");
  return (
    <div className="flex flex-col items-center">
      <Field name="profileImage">
        {(props) => (
          <div>
            <FileDropZone {...props.input} />
          </div>
        )}
      </Field>
      {meta.touched && meta.error && (
        <p className="text-xs text-red-600 text-left mt-3">{meta.error}</p>
      )}
    </div>
  );
};
export default UploadPicture;
