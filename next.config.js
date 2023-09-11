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
  },
  webpack: (config) => {
    let modularizeImports = null;
    config.module.rules.some((rule) =>
      rule.oneOf?.some((oneOf) => {
        modularizeImports =
          oneOf?.use?.options?.nextConfig?.modularizeImports;
        return modularizeImports;
      }),
    );
    if (modularizeImports?.["@headlessui/react"])
      delete modularizeImports["@headlessui/react"];
    return config;
  },
}

module.exports = nextConfig
