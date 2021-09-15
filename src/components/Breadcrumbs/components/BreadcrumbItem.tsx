import { FC, useContext } from 'react';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-next.svg';
import stringHelpers from '../../../helpers/stringHelpers';
import { PageContext } from '../../../providers/PageContext/withPageState';
import { FilesTree } from '../../../types';

const BreadcrumbItem: FC<{ item: FilesTree; isRoot: boolean }> = ({
  item,
  isRoot,
}) => {
  const { actions } = useContext(PageContext);

  const handleItemClick = () => {
    if (isRoot) {
      actions.getDocuments();
    } else {
      actions.setCurrentFolder(item.id);
    }
  };

  return (
    <button
      type="button"
      key={item.name.replace(/\s/g, '')}
      onClick={handleItemClick}
    >
      {!isRoot && <ArrowIcon />}
      <span>{stringHelpers.capitalize(item.name)}</span>
    </button>
  );
};

export default BreadcrumbItem;
