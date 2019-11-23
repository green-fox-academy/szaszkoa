'use strict';

import { backButtonHref } from './modules/page/backButton.mjs';
import { darkMode } from './modules/page/darkMode/darkMode.mjs';
import { loginFunction } from './modules/user/login/loginFunction.mjs';
import { registerButtonHref } from './modules/user/registerButtonHref.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

  initialize() {
    darkMode(['body', 'header', 'main'], ['aside-content', 'controls']);
    backButtonHref();
    registerButtonHref();
    window.loginFunction = loginFunction;
  };

};

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();