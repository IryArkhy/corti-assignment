import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ContentContainer from './ContentContainer';
import Header from './Header';
import SideBar from './SideBar';
import styles from './App.module.scss';
import Dashboard from './Dashboard';
import { PageContextProvider } from '../providers/PageContext/withPageState';

const App: FC = () => (
  <PageContextProvider>
    <ContentContainer>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Dashboard />
      </main>
    </ContentContainer>
    <ToastContainer />
  </PageContextProvider>
);

export default App;
