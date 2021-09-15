import { filesActions } from './pageActions';
import replaceDocumentNode from './pageHelpers';
import filesTypes, { ReducerState } from './pageTypes';

export const initialState: ReducerState = {
  currentFolder: null,
  files: null,
  error: null,
};

const folderBrowserReducer = (state = initialState, action: filesActions) => {
  switch (action.type) {
    case filesTypes.SET_DOCUMENTS:
      return { ...state, files: action.payload, currentFolder: action.payload };
    case filesTypes.SET_ACTIVE_FOLDER:
      return replaceDocumentNode(state, action.payload);
    case filesTypes.SET_DOCUMENTS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default folderBrowserReducer;
