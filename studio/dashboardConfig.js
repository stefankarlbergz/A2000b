export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb005c47feab77936354d19',
                  title: 'Sanity Studio',
                  name: 'A2000b-studio',
                  apiId: '527c476d-66a1-4210-9d09-73f0de0ca343'
                },
                {
                  buildHookId: '5eb005c4e0d6145ead3ed3ec',
                  title: 'Landing pages Website',
                  name: 'A2000b',
                  apiId: '81f204c6-594e-4f60-bbf4-d64af5770d1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stefankarlbergz/A2000b',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://A2000b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
