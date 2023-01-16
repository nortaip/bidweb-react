import { Avatar, Badge, Button, Dropdown } from 'antd';
import Logo from '../imgs/logo.png'
import { Link } from 'react-router-dom';
const App = () => {
  const items = [
    {
      label: 'Profile',
      key: '0',
    },
    {
      label: '2nd menu item',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <>
      <div className='navbar'>
        <Link to={'/'}>
          <img src={Logo} alt='Logo' />
        </Link>
        <div className='nav-prof'>
          <Button type="primary">se Item</Button>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <Badge count={1000} overflowCount={9} size='default'>
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
    </>
  );
};
export default App;