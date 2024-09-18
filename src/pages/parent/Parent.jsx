import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../components';

const Parent = () => {
  return (
    <section className="flex  flex-col justify-between  min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Parent;
