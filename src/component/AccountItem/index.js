import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src = "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_100x100.jpeg?x-expires=1674090000&x-signature=r%2FKWT7vTeunvMbGKSNtalihtwCc%3D" alt="Hoaa" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;
