import { FC, useContext } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Folder from '../Folder';
import { PageContext } from '../../providers/PageContext/withPageState';
import styles from './Dashboard.module.scss';
import EmptyFolder from './components/EmptyFolder';
import Loader from '../Loader';

const Dashboard: FC = () => {
  const { currentFolder, isLoading } = useContext(PageContext);
  const showEmptyFolder = !currentFolder || !currentFolder.children?.length;

  if (isLoading)
    return (
      <div className={styles.dashboard}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.dashboard}>
      <Breadcrumbs />

      {showEmptyFolder ? (
        <EmptyFolder />
      ) : (
        <div className={styles.foldersContainer}>
          {currentFolder.children?.map(folder => (
            <Folder folder={folder} key={folder.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
