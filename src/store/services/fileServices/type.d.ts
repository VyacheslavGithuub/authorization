interface IFiles {
  id: any;
  name: string;
  fileName: string;
  mimeType: any;
  url: string;
  createdAt: any;
}
export interface IGettingFiles {
  files: IFiles[];
  status: string;
}
