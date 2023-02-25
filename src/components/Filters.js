import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const App = () =>
  <Tabs defaultActiveKey="1"  onChange={onChange} />
  ;
export default App;