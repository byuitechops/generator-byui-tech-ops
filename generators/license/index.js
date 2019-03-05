const ByuiConfig = require('../ByuiConfig.js');

module.exports = class License extends ByuiConfig {
  constructor(args, opts) {
    super(args, opts);

  }

  initializing() {
    this.log("license reporting in");

  }

  prompting() {

    if (!this.options.byuiOptions.prompt) {

    }

  }

  configuring() {
    //Run the update logic if the update flag is found
    if (this.update) {
      this.byuiGeneratorTools.updateFile('license');
      //Get the year from the github project
    }

    //Get the current year using moment js
  }

  //Default functions are run here

  writing() {


  }

  conflicts() {


  }

  install() {


  }

  end() {


  }

};
