import { FC } from 'react';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import BreadcrumbItem from './components/BreadcrumbItem';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs: FC = () => {
  const pathArray = useBreadcrumbs();

  if (pathArray.length) return null;

  return (
    <div className={styles.breadcrumbs}>
      {pathArray.map((folder, idx) => (
        <BreadcrumbItem key={folder.id} item={folder} isRoot={!idx} />
      ))}
    </div>
  );
};

export default Breadcrumbs;
