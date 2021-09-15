import { FC, useContext } from 'react';
import { PageContext } from '../../providers/PageContext/withPageState';
import Loader from '../Loader';
import styles from './SideBar.module.scss';
import FoldersList from './components/FoldersList/FoldersList';

const Sidebar: FC = () => {
  const { files, isLoading } = useContext(PageContext);
  const showLoader = isLoading || !files;

  return (
    <section className={styles.sidebar}>
      <h3>files: </h3>
      {showLoader ? (
        <Loader containerStyles={styles.sidebarLoaderContainer} />
      ) : (
        <FoldersList files={files} />
      )}
    </section>
  );
};

export default Sidebar;
