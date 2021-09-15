import { FC } from 'react';
import { ReactComponent as EmptyFolderIcon } from '../../../assets/icons/empty.svg';
import styles from '../Dashboard.module.scss';

const EmptyFolder: FC = () => (
  <div className={styles.emptyList}>
    <EmptyFolderIcon />
    <span>You have no files yet...</span>
  </div>
);

export default EmptyFolder;
