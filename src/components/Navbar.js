import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { CONN_KEY } from "../Conn"
import Logo from '../imgs/logod.png'
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Typography, Dropdown } from 'antd';

const { Text } = Typography;

const App = () => {
  const [cookies, setCookies, removeCookies] = useCookies(['user_id']);
  const [data, setData] = useState({ pp: '', username: '' });

  const fetchProfileData = async () => {
    try {
      const user_id = cookies.user_id;
      if (user_id) {
        const response = await axios.get(`${CONN_KEY}getuserpp.php?user_id=${user_id}`);
        console.log(response.data); // Log the response data
        setData({
          pp: response.data.data.pp,
          username: response.data.data.username
        });
      }
    } catch (error) {
      console.error(error); // Log any fetch errors
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleLogout = () => {
    removeCookies('user_id'); // Remove the 'user_id' cookie
    // Add any additional logic or redirects after logout if needed
  };

  const renderUserDropdown = () => {
    return (
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
            src={data.pp} />
        </Badge>
      </Dropdown>
    );
  };

  const renderLoginButton = () => {
    return (
      <Link to={'/Login'}>
        <Button type="primary">Giriş et</Button>
      </Link>
    );
  };
  const items = [
    {
      label: (
        <Link to={'/Profile'} rel="noopener noreferrer" >
          <span className='User-pp'>
            <Avatar style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
            }}
              src={data.pp} icon={<UserOutlined />} />
            <div className='user-name SemiBold f16'>{data.username}</div>
          </span>
        </Link>
      ),
      key: '15',
    },
    {
      type: 'divider',
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
        <Link className="logo" style={{ color: "#ED3F3F" }} onClick={handleLogout}>
          Çıkış
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
            <Link to="/Elanlar" className='Medium main-color' rel="noopener noreferrer">
              Elanlar
            </Link>
          </li>
          <li >
            <Link to="/SpareParts" className='Medium main-color' rel="noopener noreferrer">
              Ehtiyat hissələr
            </Link>
          </li>
          <li >
            <Link to="#" className='Medium main-color' rel="noopener noreferrer">
              Blog
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
          {cookies.user_id ? (
            <>
              {renderUserDropdown()}
            </>
          ) : (
            renderLoginButton()
          )}
        </div>
      </div>
    </nav >
  );
};

export default App;
