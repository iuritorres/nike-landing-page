import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img src={footerLogo} alt='logo' width={150} height={46} />
          </a>

          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Prepare os calçados para o novo período na loja Nike mais próxima.
            Encontre o tamanho perfeito na loja. Obtenha recompensas.
          </p>

          <div className='flex items-center gap-5 mt-8 mb-12'>
            {socialMedia.map((icon) => (
              <a
                key={icon.alt}
                href='#'
                target='_blank'
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-white/60 hover:scale-110'
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer transition-none'
                  >
                    <a href='#' target='_blank'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copy right sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p className='hover:text-slate-gray'>
            Copyright. Todos os direitos reservados.
          </p>
        </div>
        <a
          href='#'
          target='_blank'
          className='font-montserrat cursor-pointer hover:text-slate-gray'
        >
          Termos & Serviços
        </a>
      </div>
    </footer>
  );
};

export default Footer;
