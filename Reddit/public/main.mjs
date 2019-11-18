'use strict'

// *** IMPORTS FROM MODULES ***
import { getPosts } from './modules/getPosts.mjs';
import { darkMode } from './modules/darkMode.mjs';
import { submitButtonHref } from './modules/submitButton.mjs';
import { vote } from './modules/voteModule.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

  initialize() {
    getPosts();
    darkMode();
    submitButtonHref();
    window.vote = vote; // defining the HTML elements onclick= function's definition when using imported function
  };

};

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();