import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29} />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label} className='relative group'>
              <a
                href={link.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
              >
                {link.label}
              </a>
              <span
                className='h-[2px] inline-block bg-dark absolute bg-coral-red left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 w-0'
              ></span>
            </li>
          ))}
        </ul>

        <div className='lg:hidden'>
          <img src={hamburger} alt='Hamburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
