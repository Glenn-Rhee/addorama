import { createUploadthing, FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileCount: 1,
      maxFileSize: "1MB",
    },
  })
    .middleware(async () => {
      return { id: "123" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const url = file.ufsUrl;
      console.log(file.ufsUrl);
      console.log(file.url);

      return { id: metadata.id, url };
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter;
