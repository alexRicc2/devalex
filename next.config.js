if (!process.env.WORDPRESS_API_URL){
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}
const graphqlDomain = `${process.env.WORDPRESS_API_URL}/graphql`

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      String(process.env.WORDPRESS_API_URL).split("/")[2],
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "secure.gravatar.com",
    ]
  }

}

module.exports = nextConfig
