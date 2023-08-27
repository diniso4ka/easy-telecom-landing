import { Logo } from 'components/logo';
import styles from './index.module.css';

export const MainPage = () => {
    return (
        <div className={styles.container}>
            <Logo className={styles.logo} />
            <div className={styles.about}>
                <p>- unlimited</p>
                <p>- borderless</p>
                <p>- easy & quick</p>
            </div>
        </div>
    );
};
