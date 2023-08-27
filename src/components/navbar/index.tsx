import { Link } from 'react-router-dom';
import { NAVBAR_CONFIG } from './config';
import styles from './index.module.css';
import classNames from 'classnames';

const NavbarItem = ({ path, label }: { path: string; label: string }) => {
    return (
        <Link className={styles.item} to={path}>
            {label}
        </Link>
    );
};

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
    return (
        <nav className={classNames(styles.container, className)}>
            {NAVBAR_CONFIG.map((item) => (
                <NavbarItem
                    path={item.path}
                    key={item.path}
                    label={item.label}
                />
            ))}
        </nav>
    );
};
