import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-11.png';
import Work2 from './assets/project-22.png';
import Work3 from './assets/project-33.png';
import Work4 from './assets/project-44.png';
import Work5 from './assets/project-55.png';


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
    description: 'Amanpreet',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kaur',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

 

  {
    id: 5,
    title: 'Address : ',
    description: 'India',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91 6283720360',
  },

  {
    id: 7,
    title: 'Email : ',
    description: '1049amanpreet@gmail.com',
  },

 

  {
    id: 8,
    title: 'Languages : ',
    description: 'English, Hindi, Punjabi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1.5+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '8+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5+',
    title: 'Certifications <br /> ',
  },


];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/04/23 - 31/05/23',
    title: 'Web Development <span> E cell IIT Hydrabad </span>',
    desc: 'I got 2 months internship in web development from yhills platfrom in collaboration with E-cell IIT hydrabad.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/07/22 - 25/08/22',
    title: 'Frontend development <span> TCIL-IT  </span>',
    desc: 'I have completed training of 45 days from Tcil- It , chandigarh in Frontend development .',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'May 2023',
    title: 'Internet of Things  <span> skillUp  </span>',
    desc: 'I have completed couse in IOT from skillUp E-learning platform.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2024 ',
    title: 'B.Tech CSE <span> Punjabi University, Patiala </span>',
    desc: 'I got 8.5/10 CGPA in my Engineering degree.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: '12th  <span> S.I.S Public school , Ranwan </span>',
    desc: 'I passed my 12th by scoring 93.33% .',
  },

 
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '45',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'C++',
    percentage: '80',
  },

  {
    id: 5,
    title: 'DSA',
    percentage: '60',
  },

  {
    id: 6,
    title: 'React',
    percentage: '55',
  },

  {
    id: 7,
    title: 'MySql',
    percentage: '65',
  },
  {
    id: 8,
    title: 'Python',
    percentage: '45',
  },

 
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'My Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Web framework : ',
        desc: 'React js',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Designing: ',
        desc: 'Bootstrap',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'IMDB-clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'IMDB- clone',
      },
      {
        icon: <FiUser />,
        title: 'Web framework : ',
        desc: 'React js',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Designing : ',
        desc: 'Bootstrap 5',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'E-learning Platform',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E-learning Platform',
      },
      {
        icon: <FiUser />,
        title: 'web framework : ',
        desc: 'React js',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Designing : ',
        desc: 'Bootstrap 5',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Netflix-clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Netflix clone',
      },
      {
        icon: <FiUser />,
        title: 'web framework : ',
        desc: 'React js',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html,css',
      },
   
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'UTube clone',
    details: [
      {
        title: 'Project : ',
        desc: 'utube clone',
      },
      {
        title: 'Framework : ',
        desc: 'React js',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
     
    ],
  },

 /*  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  }, */
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
