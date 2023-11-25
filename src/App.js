import Promo from './components/promo/Promo';
import Header from './components/header/Header';
import Brands from './components/brands/Brands';
import Arrivals from './components/arrivals/Arrivals';
import Banner from './components/banner/Banner';

export const App = () => {
  return (
    <div>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
    </div>
  );
};
