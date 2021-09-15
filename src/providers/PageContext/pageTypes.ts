import { FilesTree } from '../../types';

const filesTypes = {
  SET_DOCUMENTS: 'SET_DOCUMENTS',
  SET_ACTIVE_FOLDER: 'SET_ACTIVE_FOLDER',
  SET_DOCUMENTS_ERROR: 'SET_DOCUMENTS_ERROR',
};

export type IPageContext = {
  currentFolder: FilesTree | null;
  files: FilesTree | null;
  isLoading: boolean;
  actions: {
    getDocuments: () => void;
    setCurrentFolder: (id: number) => void;
  };
};

export type ReducerState = Pick<IPageContext, 'currentFolder' | 'files'> & {
  error: any;
};

export default filesTypes;
