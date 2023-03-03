import Link from 'next/link';
import ElectronicCardItem from '../components/ElectronicCardItem';
import ReceptionCard from '../components/ReceptionCard';
import styles from './Profile.module.scss';
import addInfo from '../../public/icons/addInfo.svg';
import patientInfo from '../../public/icons/patientInfo.svg';
import testTubes from '../../public/icons/testTubes.svg';
import receptionHistory from '../../public/icons/receptionHistory.svg';
import Image from 'next/image';

async function getData() {
    const res = await fetch(
        'https://6230a297f113bfceed575b81.mockapi.io/database/clinics'
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    console.log(res);
    return res.json();
}

export default async function Profile() {
    const data = await getData();

    return (
        <div className={styles.profile}>
            <h2 className={styles.profile__title}>Записи на прием</h2>
            <ul className={styles.profile__previewList}>
                <ReceptionCard />
                <ReceptionCard />
                <span className={styles.profile__linkWrapper}>
                    Еще 3 записи <br />
                    <Link
                        className={styles.profile__link}
                        href='/profile/MyAppointments'
                    >
                        Подробнее
                    </Link>
                </span>
            </ul>
            <div className={styles.profile__electronicCard}>
                <h3 className={styles.profile__subtitle}>Электронная карта</h3>
                <ul className={styles.profile__list}>
                    <div className={styles.profile__electronicCardItem}>
                        <div
                            className={
                                styles.profile__electronicCardItem_imageWrapper
                            }
                        >
                            <Image
                                alt='Информация о пациенте'
                                src={patientInfo}
                            />
                        </div>
                        <div
                            className={
                                styles.profile__electronicCardItem_infoWrapper
                            }
                        >
                            <h4
                                className={
                                    styles.profile__electronicCardItem_title
                                }
                            >
                                Информация о пациенте
                            </h4>
                            <ul
                                className={
                                    styles.profile__electronicCardItem_ul
                                }
                            >
                                <li>Ваши личные данные</li>
                                <li>Рекомендации врачей</li>
                                <li>История болезней</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.profile__electronicCardItem}>
                        <div
                            className={
                                styles.profile__electronicCardItem_imageWrapper
                            }
                        >
                            <Image alt='Результаты анализов' src={testTubes} />
                        </div>
                        <div
                            className={
                                styles.profile__electronicCardItem_infoWrapper
                            }
                        >
                            <h4
                                className={
                                    styles.profile__electronicCardItem_title
                                }
                            >
                                Результаты анализов
                            </h4>
                            <p
                                className={
                                    styles.profile__electronicCardItem_descr
                                }
                            >
                                Вы можете узнать здесь результаты своих анализов
                            </p>
                        </div>
                    </div>
                    <div className={styles.profile__electronicCardItem}>
                        <div
                            className={
                                styles.profile__electronicCardItem_imageWrapper
                            }
                        >
                            <Image alt='Добавить  информацию' src={addInfo} />
                        </div>
                        <div
                            className={
                                styles.profile__electronicCardItem_infoWrapper
                            }
                        >
                            <h4
                                className={
                                    styles.profile__electronicCardItem_title
                                }
                            >
                                Добавить информацию
                            </h4>
                            <p
                                className={
                                    styles.profile__electronicCardItem_descr
                                }
                            >
                                Добавляйте в свою электронную медицинскую карту
                                новые данные
                            </p>
                        </div>
                    </div>
                    <div className={styles.profile__electronicCardItem}>
                        <div
                            className={
                                styles.profile__electronicCardItem_imageWrapper
                            }
                        >
                            <Image
                                alt='История приемов'
                                src={receptionHistory}
                            />
                        </div>
                        <div
                            className={
                                styles.profile__electronicCardItem_infoWrapper
                            }
                        >
                            <h4
                                className={
                                    styles.profile__electronicCardItem_title
                                }
                            >
                                История приемов
                            </h4>
                            <p
                                className={
                                    styles.profile__electronicCardItem_descr
                                }
                            >
                                Вся информация о полученных услугах за все время
                                хранится здесь
                            </p>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
