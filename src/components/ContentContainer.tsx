import { FC } from 'react';
import styles from './App.module.scss';

const ContentContainer: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default ContentContainer;
