'use strict';

// *** IMPORTS FROM MODULES ***
import { backButtonHref } from './modules/backButton.mjs';
import { darkMode } from './modules/darkMode.mjs';
import { userDisplay } from './modules/userDisplay.mjs';
import { addUserToInput } from './modules/addUserToPost.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

  initialize() {
    addUserToInput();
    backButtonHref();
    darkMode(['body', 'header', 'main'], ['aside-content', 'controls', 'user']);
    userDisplay('Posting as');
  };

};

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();
