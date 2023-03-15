import { useState } from 'react';
import { Avatar, Badge, Button, Typography, Dropdown } from 'antd';
const { Paragraph, Text } = Typography;

import Logo from '../imgs/logod.png'
import { Link } from 'react-router-dom';
import Profile from '../pages/Profile';
const App = () => {
  const items = [
    {
      label: (
        <Link to={'/Profile'} rel="noopener noreferrer" >
          Profile
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo">
          Elanlarım
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo">
          Hesab məlumatları
        </Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo">
          Change pasword
        </Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo">
          Notication
        </Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo">
          Like
        </Link>
      ),
      key: '5',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo">
          Izlediyin Salonlar
        </Link>
      ),
      key: '6',
    },
    {
      label: (
        <Link to={'/Profile'} className="logo" style={{ color:"#ED3F3F" }}>
          Çıxış
        </Link>
      ),
      key: '7',
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
          <li  >
            <Link x className='Medium main-color' rel="noopener noreferrer">
              <Text disabled>
                Kəşf etmək
              </Text >
            </Link>
          </li>
          <li >
            <Link className='Medium main-color' rel="noopener noreferrer">
              <Text disabled>
                Avtosalonlar
              </Text >
            </Link>
          </li>
        </ul>
        <div className='nav-prof'>
          <Link to={'/sell'}>
            <Button type="primary">Yeni elan</Button>
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
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
          </Dropdown>
        </div>
      </div>
    </nav >
  );
};
export default App;