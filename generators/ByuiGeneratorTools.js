const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const proc = require('child_process');

/***************************************************
 *  ByuiGeneratorTools Class
 *  This class is meant as a suite of tools
 *  that are helpful in the generator process for byui.
 ***************************************************/
module.exports = class ByuiGeneratorTools {

  constructor(context) {
    //Set the context to the context that was passed in (the 'this' that was passed in)
    this.context = context;
  }

  getDirectoryFiles() {

    //Searches the directory and returns an array of all files contained
    //in the current directory

    //return directorFiles;
  }

  getNewestGeneratorVersion() {
    //Makes api call for newest generator

    //return newestGenerator;
  }

  onMasterCheck() {
    //Check if we are on the master branch
    this.context.log("in master check method");
    // let tempFileName = (new Date()).getTime();
    // proc.spawn(`git branch > ${tempFileName}.txt`);
    // let branchInfoContents = fs.readFileSync(path.join(this.context.contextRoot, tempFileName));

    return true; //or false
  }

  getInstalledGeneratorVersion() {
    //checks the developer's machine for the installed generator

  }


  async appendOldToCurrentFile(filename) {
    //Rename current filename to same name plus 'OLD' appended
    var that = this.context;
    var oldPath = path.join(that.contextRoot, filename);
    var newPath = path.join(that.contextRoot, "OLD_" + filename);

    if (fs.existsSync(oldPath)) {
      await new Promise(function (resolve, reject) {
        fs.rename(oldPath, newPath, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }).catch(e => that.log("Error when prepending 'OLD' to existing file: " + e.message));

    }

  }


  audit() {
    //Check all the files, and report what files are needed and which ones we already have.

  }





};
