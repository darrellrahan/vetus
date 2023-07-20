/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
    MAILCHIMP_AUDIENCE_ID: MAILCHIMP_AUDIENCE_ID,
  },
};

module.exports = nextConfig;
