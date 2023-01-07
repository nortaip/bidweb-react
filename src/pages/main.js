import '../App.css';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <section>
        <div className='container'>
          <AuctionsCardGroup />
        </div>
      </section>
    </>
  );
}

export default App;
