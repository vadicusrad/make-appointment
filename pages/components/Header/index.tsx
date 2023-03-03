import Image from 'next/image';
import styles from './Header.module.scss';
import avatar from '../../../public/avatar/avatar.png';
import lupe from '../../../public/icons/lupe.svg';
import bell from '../../../public/icons/bell.svg';
import eye from '../../../public/icons/eye.svg';
import reveal from '../../../public/icons/reveal.svg';
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logoSection}>Логотип</div>
            <div className={styles.header__wrapper}>
                <h1 className={styles.header__title}>Мой профиль</h1>
                <div className={styles.header__icons}>
                    <Image alt='lupe icon' src={lupe} />
                    <Image alt='bell icon' src={bell} />
                    <Image alt='eye icon' src={eye} />
                    <Image alt='avatar' src={avatar} placeholder='blur' />
                    <Image alt='reveal icon' src={reveal} />
                </div>
            </div>
        </div>
    );
};

export default Header;
