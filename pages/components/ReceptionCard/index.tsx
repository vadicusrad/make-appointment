import styles from './ReceptionCard.module.scss';

const ReceptionCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__date}></div>
            <div className={styles.card__address}></div>
            <div className={styles.card__wrapper}>
                <div className={styles.card__doctor}>
                    <div className={styles.card__doctor_avatar}></div>
                    <div className={styles.card__doctor_name}></div>
                    <div className={styles.card__doctor_department}></div>
                </div>
                {/* <button className={styles.card__cancelBtn}>Отменить</button> */}
            </div>
        </div>
    );
};

export default ReceptionCard;
