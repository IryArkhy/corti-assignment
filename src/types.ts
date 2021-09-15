export type FilesTree = {
  parentId: null | number;
  id: number;
  name: string;
  children?: FilesTree[];
};

export enum FileType {
  directory,
  document,
}
