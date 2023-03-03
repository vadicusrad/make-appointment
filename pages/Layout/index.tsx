import Aside from '../components/Aside';
import Header from '../components/Header';
import Profile from '../Profile';
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.layout__wrapper}>
                <Aside />
                <Profile />
            </div>
        </div>
    );
};

export default Layout;
