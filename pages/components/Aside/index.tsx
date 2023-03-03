import styles from './Aside.module.scss';
import heart from '../../../public/icons/heart.svg';
import Image from 'next/image';
import phonendoscope from '../../../public/icons/phonendoscope.svg';
import messages from '../../../public/icons/messages.svg';
import tests from '../../../public/icons/tests.svg';
import book from '../../../public/icons/book.svg';
import appvelox from '../../../public/appvelox.png';
import info from '../../../public/icons/info.svg';

const Aside = () => {
    // Данные для бокового меню можно поместить на сервер и по необходимости изменять
    const asideListData = [
        { title: 'Врачи и клиники', icon: phonendoscope, id: 1 },
        { title: 'Сообщения', icon: messages, id: 2 },
        { title: 'Тестирование', icon: tests, id: 3 },
        { title: 'Полезно знать', icon: book, id: 4 },
    ];

    return (
        <aside className={styles.aside}>
            <div className={styles.aside__wrapper}>
                <div className={styles.aside__title}>
                    <Image alt='heart icon' src={heart} />
                    <span>Профиль</span>
                </div>
                <nav>
                    <ul className={styles.aside__list}>
                        {asideListData.map((item) => (
                            <li
                                className={styles.aside__listItem}
                                key={item.id}
                            >
                                <Image alt={item.title} src={item.icon} />
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={styles.aside__btn}>Подать заявку</button>
            </div>

            <div className={styles.aside__wrapper}>
                <div className={styles.aside__helpBtn}>
                    <Image alt='info icon' src={info} />
                    Помощь
                </div>
                <div className={styles.aside__apveloxMark}>
                    <Image alt='appvelox' src={appvelox} />
                </div>
            </div>
        </aside>
    );
};

export default Aside;
