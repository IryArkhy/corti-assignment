import clsx from 'clsx';
import { FC } from 'react';
import { ReactComponent as LoadingIcon } from '../../assets/icons/refresh.svg';
import styles from './Loader.module.scss';

const Loader: FC<{ style?: string; containerStyles?: string }> = ({
  style,
  containerStyles,
}) => (
  <div className={clsx(styles.loaderContainer, containerStyles)}>
    <LoadingIcon className={clsx(styles.loader, style)} />
  </div>
);

export default Loader;
