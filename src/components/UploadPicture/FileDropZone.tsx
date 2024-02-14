import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

interface FilePreview extends File {
  preview: string;
}
interface DropzoneProps {
  onChange?: (files: File[]) => void;
}
const FileDropZone = ({ onChange }: DropzoneProps) => {
  const [files, setFiles] = useState<FilePreview[]>([]);
  const [fileDropped, setFileDropped] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setFileDropped(true);
      setFiles(filesWithPreview);
      if (onChange) {
        onChange(filesWithPreview);
      }
    },
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".heic"],
    },
    multiple: false,
  });
  useEffect(() => {
    // Make sure to revoke the data URIs to avoid memory leaks
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <section>
      <div
        {...getRootProps()}
        className={`${
          fileDropped ? "accept" : "notAccept dropzone-content"
        } dropzone`}
      >
        {fileDropped ? (
          <img src={files[0].preview} alt="" className="acceptfile" />
        ) : (
          <div></div>
        )}
      </div>
      <input name="profileImage" type="file" {...getInputProps()} />
    </section>
  );
};

export default FileDropZone;
