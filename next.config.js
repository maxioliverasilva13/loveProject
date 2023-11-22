const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }]; // check default enabled headers here: https://github.com/jagaapple/next-secure-headers#rules
  },
};
