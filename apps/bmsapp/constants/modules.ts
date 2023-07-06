export const CrudModules = [
  {
    dashboard: {
      name: 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
      modules: [
        {
          name: 'dashboard',
          title: 'Dashboard',
        },
      ],
      crud: {
        admin: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
        user: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
        superadmin: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
      },
    },
  },
  {
    mdas: {
      name: 'mdas',
      title: 'Manage MDAs',
      icon: 'business',
      modules: [
        {
          name: 'mdas',
          title: 'Manage MDAs',
        },
      ],
      crud: {
        admin: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
        user: {
          create: false,
          read: true,
          update: false,
          delete: false,
        },
        superadmin: {
          create: true,
          read: true,
          update: true,
          delete: true,
        },
      },
    },
  }
];

export default CrudModules;

// Dashboard
// Manage MDAs
// Users & Accounts
// Access & Roles
// My Documents
// Document Templates
// Files & Uploads
// Manage Budgets
// Manage Reports
// Profile Manage
// App Settings
// Securities
// Chats & Conversations
// AI Tools
// Exit & Logout
