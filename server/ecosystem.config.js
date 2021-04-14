module.exports = {
  apps: [
    {
      name: "userrecorder",
      script: "./index.js",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "18.192.78.125",
      path: "/home/ubuntu/userrecorder",
      repo: "git@github.com:merveerd/user-recorder-server.git",
      ref: "origin/master",
      key: "/Users/adcolony/Documents/aws/user-recorder.pem",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
