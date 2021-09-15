import { FC } from 'react';
import { FilesTree } from '../../../../types';
import styles from '../../SideBar.module.scss';
import ListItem from '../ListItem';

const FoldersList: FC<{
  files: FilesTree;
}> = ({ files }) => (
  <div className={styles.filesContainer}>
    {files.children?.map(item => (
      <ListItem item={item} key={item.id} />
    ))}
  </div>
);

export default FoldersList;
