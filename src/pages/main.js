import '../App.css';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';
import Footer from '../components/footer';
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
      <Footer/>
    </>
  );
}

export default App;
