export const AppConfig = {
    sideMenu: [{
    title: 'Dashboard',
    link:'/vendor/dashboard',
    states:['dashboard']         
  }, {
    title: 'Menu Management',
    link:'/vendor/menu-management',
    states:['menu-management']         
  },{
    title: 'Order Management',
    link:'/vendor/order-management',
    subMenu:[{
      title:'New Orders',
      link:'/vendor/order-management/new'
    },{
      title:'Processing Orders',
      link:'/vendor/order-management/processing'
    },{
      title:'Delivered Orders',
      link:'/vendor/order-management/delivered'
    },{
      title:'Canceled Orders',
      link:'/vendor/order-management/canceled'
    }]          
  },{
    title: 'Profile',
    link:'/vendor/profile'          
  },{
    title: 'Payment',
    link:'/vendor/payment'        
  },{
    title: 'Contact Us',
    link:'/vendor/contact'          
  }],
}
