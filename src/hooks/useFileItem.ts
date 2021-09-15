import { useContext, useState } from 'react';
import { PageContext } from '../providers/PageContext/withPageState';
import { FilesTree } from '../types';

type UseFileItem = (items: FilesTree) => {
  isOpen: boolean;
  handleItemClick: () => void;
};

const useFileItem: UseFileItem = (item: FilesTree) => {
  const { actions } = useContext(PageContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
    actions.setCurrentFolder(item.id);
  };

  return {
    isOpen,
    handleItemClick,
  };
};

export default useFileItem;
