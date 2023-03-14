import { useState } from 'react';
import { Avatar, Badge, Button, Typography } from 'antd';
const { Paragraph, Text } = Typography;

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