'use strict';

import { backButtonHref } from './modules/backButton.mjs';
import { darkMode } from './modules/darkMode.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

    initialize() {
      darkMode();
      backButtonHref();
    };

  };

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();