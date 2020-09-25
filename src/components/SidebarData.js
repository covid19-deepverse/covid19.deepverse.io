import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <FaIcons.FaDonate />,
    cName: 'nav-text',
  },
  {
    title: 'News',
    path: '/news',
    icon: <BsIcons.BsNewspaper />,
    cName: 'nav-text',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <BiIcons.BiStats />,
    cName: 'nav-text',
  },
  {
    title: 'Thailand',
    path: '/thailand',
    icon: <FaIcons.FaCity />,
    cName: 'nav-text',
  },
];
