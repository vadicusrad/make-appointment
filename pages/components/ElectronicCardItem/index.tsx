import Image from 'next/image';
import styles from './ElectronicCardItem.module.scss';
import addInfo from '../../../public/icons/addInfo.svg';

interface IElectronicCarditem {
    title: string;
    icon?: any;
    text: JSX.Element;
}

const ElectronicCardItem = ({ title, icon, text }: IElectronicCarditem) => {
    console.log(icon);
    return (
        <div className={styles.electronicCardItem}>
            {icon && (
                <Image
                    alt={`${title} icon`}
                    src={icon}
                    width={50}
                    height={50}
                />
            )}

            <h4>{title}</h4>
            <div className=''>{text}</div>
        </div>
    );
};

export default ElectronicCardItem;
