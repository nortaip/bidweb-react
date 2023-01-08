import '../App.css';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';
import Footer from '../components/footer';
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <section>
        <div className='container'>
          <Route path="/products/:ValId">
            <AuctionsCardGroup />
          </Route>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
