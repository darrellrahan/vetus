/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
    GOOGLE_ANALYTICS_MEASUREMENT_ID:
      process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
