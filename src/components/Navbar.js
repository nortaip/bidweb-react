import React from 'react';

import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Typography, Dropdown } from 'antd';
const { Text } = Typography;
import Data from "./Api/User"
import Logo from '../imgs/logod.png'
import { Link } from 'react-router-dom';

const App = () => {
  const P = Data.find(prod => prod.id)
  const items = [
    {
      label: (
        <Link to={'/Profile'} rel="noopener noreferrer" >
          <span className='User-pp'>
            <Avatar style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
            }}
              src={P.imgM} icon={<UserOutlined />} />
            <div className='user-name SemiBold f16'>{P.Name}</div>
          </span>
        </Link>
      ),
      key: '15',
    },
    {
      type: 'divider',
    },
    // {
    //   label: (
    //     <Link to={'/Profile'} rel="noopener noreferrer" >
    //       Profile
    //     </Link>
    //   ),
    //   key: '0',
    // },
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
        <Link to={'/Login'} className="logo" style={{ color: "#ED3F3F" }}>
          Çıxış
        </Link>
      ),
      key: '7',
    }
  ];
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
                  width: 40,
                  height: 40
                }}
                src={P.imgM} />
            </Badge>
          </Dropdown>
        </div>
      </div>
    </nav >
  );
};
export default App;