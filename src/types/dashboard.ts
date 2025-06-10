export enum Sidebar {
  PROJECTS = "Projects",
  DEPLOY = "Deploy",
}

export enum DataManagementButton {
  UPLOAD = "upload",
  PREVIEW = "preview",
}
export interface UploadedFile {
  id: number;
  file_url: string;
  created_at: string; // or `Date` if you parse it
  user_id: string;
}
