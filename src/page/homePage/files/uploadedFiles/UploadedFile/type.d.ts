export interface IUploadedFile {
  file: {
    createdAt: string;
    fileName: string;
    id: string;
    mimeType: string;
    name: string;
    url: string;
  };
  deleteFile: (id: string) => void;
}
