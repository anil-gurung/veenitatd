import Header from '../../components/Header';
import Mill from '../../components/Mill';
import Process from '../../components/Process';
import SpecialProducts from '../../components/SpecialProducts';

import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Process />
      <Mill />
      <SpecialProducts />

      {/* <About /> */}
    </>
  );
};
export default Home;
