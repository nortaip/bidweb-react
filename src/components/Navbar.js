import { useState } from 'react';
import { Avatar, Badge, Button, } from 'antd';
import Logo from '../imgs/logod.png'
import { Link } from 'react-router-dom';
// import Profile from '../pages/Profile';
const App = () => {
  const items = [
    {
      label: (
        <a rel="noopener noreferrer" >
          Profile
        </a>
      ),
      key: '0',
    }
  ];
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          <Link to={'/'} className="logo">
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <ul className='sgbdrf'>
          <li >
            <Link to="/" className='Medium main-color' rel="noopener noreferrer">
              Hərraclar
            </Link>
          </li>
          <li >
            <Link to="/SpareParts" className='Medium main-color' rel="noopener noreferrer">
              Ehtiyat hissələr
            </Link>
          </li>
          <li >
            <Link to="/reels" className='Medium main-color' rel="noopener noreferrer">
              Kəşf etmək
            </Link>
          </li>
          <li >
            <Link to="/salons" className='Medium main-color' rel="noopener noreferrer">
              Avtosalonlar
            </Link>
          </li>
        </ul>
        <div className='nav-prof'>
          <Link to={'/sell'}>
            <Button type="primary">Yeni elan</Button>
          </Link>
          <Link to={'/Profile'} className="logo">
            {/* <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          > */}
            <Badge dot>
              <Avatar
                style={{
                  color: '#f56a00',
                  backgroundColor: '#fde3cf',
                }}
              >
                U
              </Avatar>
            </Badge>
            {/* </Dropdown> */}
          </Link>
        </div>
      </div>
    </nav >
  );
};
export default App;