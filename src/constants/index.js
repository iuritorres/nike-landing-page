import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#sobre-nos', label: 'Sobre Nós' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#fale-conosco', label: 'Fale Conosco' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Marcas' },
  { value: '500+', label: 'Lojas' },
  { value: '250k+', label: 'Clientes' },
];

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: 'R$200.20',
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: 'R$210.20',
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: 'R$220.20',
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: 'R$230.20',
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Frete grátis',
    subtext:
      'Desfrute de compras perfeitas com nosso serviço de remessa gratuita.',
  },
  {
    imgURL: shieldTick,
    label: 'Pagamento seguro',
    subtext:
      'Experimente transações sem preocupações com nossas opções de pagamento seguras.',
  },
  {
    imgURL: support,
    label: 'Adoramos ajudar você',
    subtext:
      'Nossa equipe dedicada está aqui para ajudá-lo em cada etapa do processo.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Breno Gabriel',
    rating: 4.2,
    feedback:
      'A atenção aos detalhes e a qualidade do produto superaram minhas expectativas. Recomendado bastante!',
  },
  {
    imgURL: customer2,
    customerName: 'Jéssica Santos',
    rating: 4.8,
    feedback:
      'O produto não só atendeu como superou minhas expectativas. Com certeza serei um cliente recorrente!',
  },
];

export const footerLinks = [
  {
    title: 'Produtos',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { name: 'Sobre nós', link: '#sobre-nos' },
      { name: 'FAQs', link: '/' },
      { name: 'Como trabalhamos', link: '/' },
      { name: 'Política de Privacidade', link: '/' },
      { name: 'Política de Pagamento', link: '/' },
    ],
  },
  {
    title: 'Entre em contato',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
