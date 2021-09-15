import { FC } from 'react';
import { ReactComponent as FolderIcon } from '../../assets/icons/closed-folder.svg';
import { ReactComponent as FileIcon } from '../../assets/icons/file.svg';
import useFileItem from '../../hooks/useFileItem';
import { FilesTree, FileType } from '../../types';
import { getFileType } from '../SideBar/components/ListItem/helpers';
import styles from './Folder.module.scss';

interface IProps {
  folder: FilesTree;
}

const Folder: FC<IProps> = ({ folder }) => {
  const { handleItemClick } = useFileItem(folder);
  const isFolder = getFileType(folder.name) === FileType.directory;
  return (
    <button
      className={styles.folder}
      type="button"
      onClick={handleItemClick}
      disabled={!isFolder}
    >
      {isFolder ? <FolderIcon /> : <FileIcon className={styles.fileIcon} />}
      <span>{folder.name}</span>
    </button>
  );
};

export default Folder;
