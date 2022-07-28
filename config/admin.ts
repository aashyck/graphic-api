export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '95dc8f88b6eb98a8589e67c345c070ee'),
  },
});
