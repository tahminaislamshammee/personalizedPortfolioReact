import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCodepen
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';
import Work7 from './assets/project-7.png';
import Work8 from './assets/project-8.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Tahmina Islam',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Shammee',
  },


  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladeshi',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Current city : ',
    description: 'Montreal, Canada',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+1 819 340 3052',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'tahminaislamshammee@gmail.com',
  },


  {
    id: 9,
    title: 'Langages : ',
    description: 'French(basic), English, Bangla',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2022',
    title: 'Front-End Developer <span> SJ Innovation </span>',
    desc: 'My primary duties entailed the creation of user-friendly and responsive web pages, addressing and resolving any software glitches, participating in client meetings to understand and fulfill their specific needs.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - 2020',
    title: 'Front-End developer (Intern) <span> Infinity Flame </span>',
    desc: 'During my internship, the emphasis was placed on practical projects, allowing me to acquire a hands-on understanding of core technologies.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Bachelor in Computer Science <span> Leading University </span>',
    desc: 'Equipped with a strong foundation in computer science principles and a passion for innovation, my academic journey has prepared me to tackle complex challenges in the world of technology.',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '99',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '95',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '95',
  },

  {
    id: 5,
    title: 'React',
    percentage: '90',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '90',
  },

  {
    id: 7,
    title: 'SCSS',
    percentage: '90',
  },

  {
    id: 8,
    title: 'Tailwind',
    percentage: '99',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Website Design',
    link: 'https://tahminaislamshammee.github.io/restaurantProject/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Restaurant Project',
        link: '',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice project',
        link: '',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'HTML, CSS, Grid',
       
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
        link: 'https://tahminaislamshammee.github.io/restaurantProject/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    link: 'https://www.dribble.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing page Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice project',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'HTML, CSS, Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
        link: 'https://tahminaislamshammee.github.io/tailwind/'
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website Design',
    link: 'https://www.dribble.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio Project',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice Project',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'Html, CSS, Bootstrap, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
        link: 'https://tahminaislamshammee.github.io/samplePortfolio/'
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Website Design',
    link: 'https://www.dribble.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Multi Page Website Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice Project',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'HTML, CSS, Bootstrap, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
        link: 'https://tahminaislamshammee.github.io/CafeSite/'
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Quiz App Design',
    link: 'https://www.dribble.com',
    details: [
      {
        title: 'Project : ',
        desc: 'Quiz App',
      },
      {
        title: 'Client : ',
        desc: 'Practice Project',
      },
      {
        title: 'Tech : ',
        desc: 'HTML, CSS, JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
        link: 'https://codepen.io/_tahmina/full/bGqQRqj'
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Website Design',
    link: 'https://www.dribble.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'React portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice Project',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
        link: 'https://tahminaislamshammee.github.io/React-portfolio/'
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Ecommerce website',
    link: 'https://www.dribble.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'React Ecommerce Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice Project',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
        link: 'https://tahminaislamshammee.github.io/trial-deploy-21/'
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Js Clock',
    link: 'https://www.dribble.com',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clock Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Practice Project',
      },
      {
        icon: <FaCode />,
        title: 'Tech : ',
        desc: 'HTML, CSS, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
        link: 'https://codepen.io/_tahmina/full/QWmyOEP'
      },
    ],
  }
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
