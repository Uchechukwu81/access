export const paths = [
    {
      label: 'Customer Fund Transfer ',
      dropdown: true,
      path: '/customer-fund-transfer',
      links: [
        {
          label: 'Entries',
          path: '/customer-fund-transfer/single-entry',
          disabled: false
        },
        // {
        //   label: 'Master List',
        //   path: '/customer-transfer-outward/master-list',
        //   disabled: false
        // }
  
        // {
        //   label: 'Create Outwards Swift',
        //   path: '/customer-transfer-outward/create-outwards-swift',
        //   disabled: false
        // }
      ]
    },
    {
      label: 'ACH Outward',
      dropdown: true,
      path: '/ach-outward',
      links: [
        {
          label: 'ACH Outward Master List',
          path: '/ach-outward/ach-master-list',
          disabled: false
        },
        {
          label: 'Single ACH Entries',
          path: '/ach-outward/single-ach-entries',
          disabled: false
        },
        {
          label: 'Outward Multiple Upload',
          path: '/ach-outward/multiple-upload',
          disabled: false
        }
      ]
    },
    {
      label: 'ACH Inward',
      dropdown: true,
      path: '/ach-inward',
      links: [
        {
          label: 'ACH Inward Master List',
          path: '/ach-inward/ach-inward-master-list',
          disabled: false
        },
        {
          label: 'Single ACH Entries',
          path: '/ach-inward/single-ach-entry',
          disabled: false
        },
        {
          label: 'Inward Multiple Upload',
          path: '/ach-inward/inward-multiple-upload',
          disabled: false
        }
        // {
        //   label: 'FX Multiple Upload',
        //   path: '/in-house/fx-multiple-upload',
        //   disabled: false
        // }
      ]
    },
    {
      label: 'Management',
      dropdown: true,
      path: '/management',
      links: [
        {
          label: 'Report',
          path: '/management/report',
          disabled: false
        },
        {
          label: 'User Management',
          path: '/management/user-management',
          disabled: false
        },
        {
          label: 'User Creation',
          path: '/management/user-creation',
          disabled: false
        }
      ]
    },
    {
      label: 'Authorization',
      dropdown: true,
      path: '/authorization',
      links: [
        {
          label: 'Cheque',
          path: '/authorization/cheque',
          disabled: false
        },
        {
          label: 'Fund Transfer',
          path: '/authorization/fund-transfer',
          disabled: false
        }
      ]
    }
  ];
  