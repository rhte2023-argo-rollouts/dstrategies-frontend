import React from 'react';
import { bind } from '../../utils/bind';
import styles from './Header.module.css';
import { Logo } from '../../core/components/logo/Logo';

const cx = bind(styles);

interface Props {}

export const Header: React.FunctionComponent<Props> = () => {
  const AppTitle = process.env.REACT_APP_CATEGORY || 'BLUE-GREEN'
  return (
    <>
      <div role='logo' className={cx('logo')}>
        <a href='/'>
          <Logo size='xxl'></Logo>
        </a>
        <h1>DStrategies App</h1>
        <br></br>
        <h2>{AppTitle}</h2>
      </div>
    </>
  );
};
