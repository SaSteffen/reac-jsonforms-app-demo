const uischema = {
  type: 'Categorization',
  elements: [
    {
      type: 'Category',
      label: 'General',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/id',
          options: {
            showUnfocusedDescription: true,
          },
        },
        {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/loadUsedModulesOnly',
              options: {
                showUnfocusedDescription: false,
                toggle: true,
              },
            },
            {
              type: 'Control',
              scope: '#/properties/memoryLimit',
              options: {
                showUnfocusedDescription: true,
              },
            },
            {
              type: 'Control',
              scope: '#/properties/mpsVersion',
              options: {
                showUnfocusedDescription: true,
              },
            },
          ],
        },

        {
          type: 'Control',
          scope: '#/properties/sharedInstances',
          options: {
            showUnfocusedDescription: true,
          },
        },
        {
          type: 'Control',
          scope: '#/properties/ignoredModules',
          options: {
            //      readonly: false,
            showUnfocusedDescription: true,
          },
        },
        {
          type: 'Control',
          scope: '#/properties/additionalGenerationDependencies',
          options: {
            //      readonly: false,
            showUnfocusedDescription: true,
          },
        },
      ],
    },
    {
      type: 'Category',
      label: 'Model Repos',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/modelRepositories',
          options: { elementLabelProp: 'id' },
        },
      ],
    },
    {
      type: 'Category',
      label: 'Git Repos',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/gitRepositories',
          options: {
            detail: {
              type: 'VerticalLayout',
              elements: [
                {
                  type: 'Control',
                  scope: '#/properties/name',
                  options: {
                    showUnfocusedDescription: true,
                  },
                },
                {
                  type: 'Control',
                  scope: '#/properties/url',
                  options: {
                    showUnfocusedDescription: true,
                  },
                },
                {
                  type: 'HorizontalLayout',
                  elements: [
                    {
                      type: 'Control',
                      scope: '#/properties/branch',
                      options: {
                        showUnfocusedDescription: true,
                      },
                    },
                    {
                      type: 'Control',
                      scope: '#/properties/commitHash',
                      options: {
                        showUnfocusedDescription: true,
                      },
                    },
                  ],
                },
                {
                  type: 'Group',
                  label: 'Credentials (optional)',
                  elements: [
                    {
                      type: 'HorizontalLayout',
                      elements: [
                        {
                          type: 'Control',
                          scope: '#/properties/credentials/properties/user',
                          options: {
                            showUnfocusedDescription: true,
                          },
                        },
                        {
                          type: 'Control',
                          scope: '#/properties/credentials/properties/password',
                          options: {
                            showUnfocusedDescription: true,
                            format: 'password',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'Control',
                  scope: '#/properties/paths',
                  options: {
                    showUnfocusedDescription: true,
                  },
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: 'Category',
      label: 'Maven',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/mavenRepositories',
          options: { elementLabelProp: 'url', showUnfocusedDescription: true },
        },
        {
          type: 'Control',
          scope: '#/properties/mavenDependencies',
          options: { elementLabelProp: 'url', showUnfocusedDescription: true },
        },
      ],
    },
  ],
};

export default uischema;
