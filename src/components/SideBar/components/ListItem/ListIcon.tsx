import { FC } from 'react';
import { ReactComponent as FileIcon } from '../../../../assets/icons/file.svg';
import { ReactComponent as ClosedFolderIcon } from '../../../../assets/icons/closed-folder.svg';
import { ReactComponent as OpenFolderIcon } from '../../../../assets/icons/open-folder.svg';
import { FileType } from '../../../../types';
import styles from './ListItem.module.scss';

interface IProps {
  fileType: FileType;
  isOpen: boolean;
}

const ListIcon: FC<IProps> = ({ fileType, isOpen }) => {
  if (fileType === FileType.document)
    return <FileIcon className={styles.fileIcon} />;

  if (fileType === FileType.directory && isOpen) {
    return <OpenFolderIcon />;
  }

  return <ClosedFolderIcon />;
};

export default ListIcon;
