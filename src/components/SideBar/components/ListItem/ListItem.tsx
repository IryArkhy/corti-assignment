import clsx from 'clsx';
import { CSSProperties, FC, useContext } from 'react';
import useFileItem from '../../../../hooks/useFileItem';
import { PageContext } from '../../../../providers/PageContext/withPageState';
import { FilesTree, FileType } from '../../../../types';
import ListIcon from './ListIcon';
import {
  getSideBarUpperItemStyle,
  getSideBarLowerItemStyle,
  shouldRenderInnerList,
  getFileType,
} from './helpers';
import styles from './ListItem.module.scss';

interface IProps {
  item: FilesTree;
  isSecondLevel?: boolean;
  style?: CSSProperties;
}

const ListItem: FC<IProps> = ({ item, isSecondLevel = false, style }) => {
  const { isLoading } = useContext(PageContext);
  const { isOpen, handleItemClick } = useFileItem(item);

  const upperLevelItemDynamicStyle = getSideBarUpperItemStyle(
    style,
    item.parentId,
    10
  );

  const lowerLevelItemStyle = getSideBarLowerItemStyle(style);

  const renderInnerListCondition = shouldRenderInnerList(
    item?.children?.length,
    isLoading,
    isOpen
  );

  const fleType = getFileType(item.name);

  return (
    <>
      <button
        type="button"
        onClick={handleItemClick}
        disabled={fleType === FileType.document}
        style={upperLevelItemDynamicStyle}
        className={clsx(
          styles.itemBase,
          isSecondLevel && styles.secondLevelItem
        )}
      >
        <ListIcon fileType={fleType} isOpen={isOpen} />

        <span>{item.name}</span>
      </button>

      {renderInnerListCondition &&
        item?.children?.map((i: any) => (
          <ListItem
            key={i.id}
            item={i}
            isSecondLevel
            style={lowerLevelItemStyle}
          />
        ))}
    </>
  );
};

export default ListItem;
