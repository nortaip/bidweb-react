import { Avatar, Badge, Button, Dropdown } from 'antd';
import Logo from '../imgs/logod.png'
import { Link } from 'react-router-dom';
import Profile from '../pages/Profile';
const App = () => {
  const items = [
    {
      label: (
        <a rel="noopener noreferrer" href='./Profile'>
          Profile
        </a>
      ),
      key: '0',
    }
  ];
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to={'/'} className="logo">
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='nav-prof'>
        <Link to={'/sell'}>
          <Button type="primary">se Item</Button>
        </Link>
        <Link to={'/Profile'} className="logo"><Dropdown
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
        </Dropdown></Link>
      </div>
    </div>
  );
};
export default App;