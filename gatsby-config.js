module.exports = {
  siteMetadata: {
    siteUrl: 'https://amann.me'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/BlogPost.js')
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Ubuntu',
            subsets: ['latin'],
            variants: ['400', '500']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/blog`
      }
    }
  ]
};
