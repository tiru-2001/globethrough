import { main_nav_items } from '../../utilities';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="shadow-md absolute z-20  backdrop-blur-md text-white bg-black bg-opacity-20 top-0 left-[50%] translate-x-[-50%] rounded-b-xl flex flex-col sm:flex-row items-center px-6 justify-between mx-auto h-24  w-4/5">
      <section>
        <NavLink to={'/'} className="text-xl border-2 border-green-500">
          <img className=" h-[60px]" src="/globethrough.svg" />
        </NavLink>
      </section>
      <nav className="flex text-lg gap-4">
        {main_nav_items.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-theme_color' : 'text-gray-400'
            }
            to={item.path}
            key={item.id}
            end
          >
            {item.title}
          </NavLink>
        ))}
        {location.pathname !== '/about' ? (
          <a href="#contact" className=" active:text-theme_color text-gray-400">
            Contact
          </a>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
