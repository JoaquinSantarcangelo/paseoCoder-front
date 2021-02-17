// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
      {
        source: "/dashboard",
        destination: "/dashboard",
      },
      {
        source: "/test",
        destination: "/test",
      },
    ];
  },
};
