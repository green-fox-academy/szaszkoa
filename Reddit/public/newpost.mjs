'use strict';

// *** IMPORTS FROM MODULES ***
import { backButtonHref } from './modules/page/backButton.mjs';
import { darkMode } from './modules/page/darkMode/darkMode.mjs';
import { userDisplay } from './modules/user/userDisplay.mjs';
import { addUserToInput } from './modules/user/addUserToPost.mjs';

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
