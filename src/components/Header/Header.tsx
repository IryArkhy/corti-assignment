import { FC } from 'react';
import { ReactComponent as FilesIcon } from '../../assets/icons/files.svg';
import styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <FilesIcon />
    <h1>Folder Browser</h1>
  </header>
);

export default Header;
