import logo from '../../assets/logo.svg';
import './Header.scss';
import HeaderScore from './HeaderScore/HeaderScore';

const Header = () => {
  return (
    <div className="header">
      <img
        alt="logo"
        src={logo}
      />
      <HeaderScore/>
    </div>
  );
};

export default Header;
