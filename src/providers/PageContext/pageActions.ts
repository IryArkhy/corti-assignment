import { FilesTree } from '../../types';
import filesTypes from './pageTypes';

export const setDocuments = (files: FilesTree) => ({
  type: filesTypes.SET_DOCUMENTS,
  payload: files,
});

export const setActiveFolder = (folder: FilesTree) => ({
  type: filesTypes.SET_ACTIVE_FOLDER,
  payload: folder,
});

export const setDocumentsError = (error: any) => ({
  type: filesTypes.SET_DOCUMENTS_ERROR,
  payload: error,
});

export type filesActions =
  | ReturnType<typeof setDocuments>
  | ReturnType<typeof setActiveFolder>
  | ReturnType<typeof setDocumentsError>;
