import styles from './index.module.css';
import classNames from 'classnames';

interface ILogoProps {
    className?: string;
}

export const Logo = ({ className }: ILogoProps) => {
    return (
        <div className={classNames(styles.container, className)}>
            <span className={styles.first}>EASY</span>
            <span className={styles.second}>telecom</span>
        </div>
    );
};
