import Header from "../components/Header";
import ToolBar from "../components/Toolbar";
import styles from './CallRoom.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return ( 
        <div className = {cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;