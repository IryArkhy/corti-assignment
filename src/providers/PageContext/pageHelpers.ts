import { replaceNodeInATree } from '../../helpers/treeHelpers';
import { FilesTree } from '../../types';
import { ReducerState } from './pageTypes';

const replaceDocumentNode = (
  state: ReducerState,
  node: FilesTree
): ReducerState => {
  if (state.files) {
    return {
      ...state,
      files: replaceNodeInATree(state.files, node),
      currentFolder: node,
    };
  }

  return state;
};

export default replaceDocumentNode;
