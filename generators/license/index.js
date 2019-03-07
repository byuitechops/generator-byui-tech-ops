const ByuiConfig = require('../ByuiConfig.js');
const https = require('https');
module.exports = class License extends ByuiConfig {
  constructor(args, opts) {
    super(args, opts);

  }

  initializing() {

  }

  prompting() {

  }

  async configuring() {

    //Run the update logic if the update flag is found
    if (this.options.update) {
      this.byuiGeneratorTools.appendOldToCurrentFile('LICENSE');

      var that = this;
      var myObject = "";
      var options = {
        host: 'api.github.com',
        path: '/repos/byuitechops/generator-byui-tech-ops',
        headers: {
          'User-Agent': 'generator-byui-tech-ops'
        }
      }
      this.yearGitHubRepoCreated = await new Promise(function (resolve, reject) {
        https.get(options, (res) => {
          res.on('data', (d) => {
            myObject += d;
          });
          res.on('end', function () {
            //Get the year from the github project
            resolve(JSON.parse(myObject).created_at.substring(0, 4));
          });
          res.on('error', (e) => reject(e));
        });
      }).catch(e => that.log(e.message));

    } else {
      //In this case we have a new project, so get the current year.
      this.yearGitHubRepoCreated = (new Date()).getFullYear();
    }
  }

  //Default functions are run here

  writing() {
    this.fs.copyTpl(
      this.templatePath(`MIT_LICENSE.ejs`),
      this.destinationPath('LICENSE'), {
        yearGitHubRepoCreated: this.yearGitHubRepoCreated
      }
    );
  }


  conflicts() {


  }

  install() {


  }

  end() {


  }

};