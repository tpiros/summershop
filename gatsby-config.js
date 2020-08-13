require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `SummerShop`,
    description: `SummerShop - Your Favourite Online Store`,
    author: `Tamas Piros`,
    company: `Full Stack Training Ltd`,
    companyWebsite: `https://fullstacktraining.com`
  },
  plugins: [
    { resolve: `gatsby-plugin-postcss` },
    { resolve: `gatsby-plugin-netlify-cms` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART,
        js: `https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.css`,
        autopop: true
      }
    }
  ],
}
