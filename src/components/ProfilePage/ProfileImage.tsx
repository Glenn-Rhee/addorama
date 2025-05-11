"use client";
import { useUploadThing } from "@/utils/uploadthing";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Input } from "../ui/input";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { Progress } from "../ui/progress";

export default function ProfileImage() {
  const [uploading, setUploading] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      console.log(data.ufsUrl);
    },
    onUploadProgress(p) {
      setUploading(p);
    },
  });
  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;
    console.log(file.errors);
  };
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles);
    setFiles(acceptedFiles);
    setIsDragOver(false);
  };

  return (
    <div className="min-w-full flex justify-center items-center flex-col">
      <Dropzone
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected}
        accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg"],
          "image/jpg": [".jpg"],
        }}
        maxSize={1 * 1024 * 1024}
        onDragEnter={() => setIsDragOver(true)}
        onDragLeave={() => setIsDragOver(false)}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            className="bg-gray-200 py-2 rounded-sm w-full flex-1 flex flex-col items-center justify-center"
            {...getRootProps()}
          >
            <Input {...getInputProps()} />
            {isDragOver ? (
              <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
            ) : isUploading ? (
              <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
            ) : (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image className="h-6 w-6 text-zinc-500 mb-2" />
            )}

            <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
              {files.length > 0 && !isUploading ? (
                <div className="flex flex-col items-center">
                  <p>{files[0].name}</p>
                </div>
              ) : isUploading ? (
                <div className="flex flex-col items-center">
                  <p>Uploading...</p>
                  <Progress
                    value={uploading}
                    className="mt-2 w-40 h-2 bg-gray-300"
                  />
                </div>
              ) : isDragOver ? (
                <p>
                  <span className="font-semibold">Drop file</span>
                  to upload
                </p>
              ) : (
                <p>
                  <span className="font-semibold">Click to upload </span>
                  or drag and drop
                </p>
              )}
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
