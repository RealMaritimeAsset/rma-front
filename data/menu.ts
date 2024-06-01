export const menuItems = (pathname: string) => [
  {
    name: 'Markets',
    href: '/market',
    type: 'user',
    active: pathname.includes('/market')
  },
  {
    name: 'Stable Coin',
    href: '/stablecoin',
    type: 'user',
    active: pathname.includes('/stablecoin')
  },
  // {
  //   name: 'Faucet',
  //   href: '/faucet',
  //   type: 'user',
  //   active: pathname.includes('/faucet')
  // },
  // {
  //   name: 'Assets',
  //   href: '/assets',
  //   type: 'user',
  //   active: pathname.includes('/assets')
  // },
  // 비지니스
  // {
  //   name: 'Dashboard',
  //   href: '/business/dashboard',
  //   type: 'business',
  //   active: pathname.includes('/dashboard')
  // },
  {
    name: 'Create',
    href: '/business/create',
    type: 'business',
    active: pathname.includes('/create')
  }
];
