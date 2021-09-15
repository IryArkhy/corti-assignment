import {
  createContext,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { findItemById } from '../../helpers/treeHelpers';
import ENDPOINTS from '../../services/constants';
import makeRequest from '../../services/folderApi';
import { FilesTree } from '../../types';
import folderBrowserReducer, { initialState } from './pageReducer';
import { IPageContext } from './pageTypes';
import {
  setActiveFolder,
  setDocuments,
  setDocumentsError,
} from './pageActions';
import { notifyError } from '../../helpers/notifHelpers';
import USER_MESSAGES from '../../constants/userMessages';

export const PageContext = createContext<IPageContext>({
  currentFolder: null,
  files: null,
  isLoading: false,
  actions: {
    getDocuments: () => {},
    setCurrentFolder: () => {},
  },
});

export const PageContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(folderBrowserReducer, initialState);
  const [isLoading, setLoading] = useState(false);

  const getDocuments = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await makeRequest<FilesTree>({
        method: 'GET',
        url: ENDPOINTS.GET.DOCUMENTS,
      });
      dispatch(setDocuments(data));
      setLoading(false);
    } catch (error) {
      notifyError(USER_MESSAGES.ERROR.default);
      setDocumentsError(error);
    }
  }, []);

  const getDocumentById = useCallback(async (id: number) => {
    try {
      const { data } = await makeRequest<FilesTree>({
        method: 'GET',
        url: ENDPOINTS.GET.DOCUMENT_BY_ID(id),
      });
      dispatch(setActiveFolder(data));
    } catch (error) {
      notifyError(USER_MESSAGES.ERROR.default);
      setDocumentsError(error);
    }
  }, []);

  const setCurrentFolder = useCallback((id: number) => {
    let node: FilesTree | null = null;

    if (state.files) {
      node = findItemById(state.files, id);
    }

    if (node && node.children) {
      dispatch(setActiveFolder(node));
    } else {
      getDocumentById(id);
    }
  }, []);

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  const value = useMemo(
    () => ({
      currentFolder: state.currentFolder,
      files: state.files,
      isLoading,
      actions: {
        getDocuments,
        setCurrentFolder,
      },
    }),
    [state.currentFolder, state.files, isLoading, getDocuments, getDocumentById]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
