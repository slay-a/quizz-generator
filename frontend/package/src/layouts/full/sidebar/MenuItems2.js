import {
    IconAperture, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
  } from '@tabler/icons-react';
  
  import { uniqueId } from 'lodash';
  
  const Menuitems2 = [
    {
      navlabel: true,
      subheader: 'Home',
      icon: IconMoodHappy,
    },
  
    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: IconLayoutDashboard,
      href: '/dashboard',
    },
    {
      navlabel: true,
      subheader: 'Auth',
    },
    {
      id: uniqueId(),
      title: 'Login',
      icon: IconLogin,
      href: '/auth/login',
    },
    {
      id: uniqueId(),
      title: 'Register',
      icon: IconUserPlus,
      href: '/auth/register',
    },
    {
      navlabel: true,
      subheader: 'Styling',
    },
    {
      id: uniqueId(),
      title: 'Text Styler',
      icon: IconAperture,
      href: '/sample-page',
    },
    {
      id: uniqueId(),
      title: 'Quiz Generator',
      icon: IconTypography,
      href: '/quiz-app',
    },
  ];
  
  export default Menuitems2;
  