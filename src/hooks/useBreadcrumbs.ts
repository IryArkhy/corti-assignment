import { useContext, useEffect, useState } from 'react';
import { FoldersPathArray, getPathToTheRoot } from '../helpers/treeHelpers';
import { PageContext } from '../providers/PageContext/withPageState';

const useBreadcrumbs = (): FoldersPathArray => {
  const [pathArray, setPathArray] = useState<FoldersPathArray>([]);
  const { currentFolder, files } = useContext(PageContext);

  useEffect(() => {
    if (files && files.children && currentFolder) {
      const array = getPathToTheRoot(files, currentFolder);
      setPathArray(array);
    }
  }, [currentFolder, files]);

  return pathArray;
};

export default useBreadcrumbs;
