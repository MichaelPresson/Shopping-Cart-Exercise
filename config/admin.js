module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8cefea5e2fb32e9b97bf51fdc3349a89'),
  },
});
