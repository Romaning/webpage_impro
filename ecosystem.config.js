module.exports = {
  apps : [{
    script: 'npm start',
    /*watch: '.'*/
  }/*, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],*/

  deploy : {
    production : {
      key : 'server_roman_aws_key.pem'
      user : 'ubuntu',
      host : '18.222.14.156',
      ref  : 'origin/master',
      repo : 'https://github.com/Romaning/webpage_impro',
      path : '/opt/PROJECT',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
