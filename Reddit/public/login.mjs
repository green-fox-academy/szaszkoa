'use strict';

import { backButtonHref } from './modules/backButton.mjs';
import { darkMode } from './modules/darkMode.mjs';
import { loginFunction } from './modules/loginFunction.mjs';
import { registerButtonHref } from './modules/registerButtonHref.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

  initialize() {
    darkMode();
    backButtonHref();
    registerButtonHref();
    window.loginFunction = loginFunction;
  };

};

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();