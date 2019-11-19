'use strict';

// *** IMPORTS FROM MODULES ***
import { backButtonHref } from './modules/backButton.mjs';
import { darkMode } from './modules/darkMode.mjs';
import { userDisplay } from './modules/userDisplay.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

  initialize() {
    backButtonHref();
    darkMode();
    userDisplay('Posting as');
  };

};

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();
