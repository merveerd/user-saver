module.exports = {
  apps: [
    {
      name: "client",
      cwd: "/home/ubuntu/usersaver/client",
      script: "npm",
      args: "start",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "server",
      cwd: "/home/ubuntu/usersaver/client",
      script: "npm",
      args: "start",
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
      path: "/home/ubuntu/usersaver",
      repo: "git@github.com:merveerd/user-saver.git",
      ref: "origin/master",
      key: "/Users/adcolony/Documents/aws/user-recorder.pem",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
