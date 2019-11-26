'use strict'

// *** IMPORTS FROM MODULES ***
import { getPosts } from './modules/page/getPosts.mjs';
import { darkMode } from './modules/page/darkMode/darkMode.mjs';
import { submitButtonHref } from './modules/page/submitButton.mjs';
import { vote } from './modules/vote/voteModule.mjs';
import { userDisplay } from './modules/user/userDisplay.mjs';
import { removePost } from './modules/page/remove/removePostIfUser.mjs';

// *** DEFINITION OF FUNCTIONS FOR THE WEBAPP ***
class Webpage {

  initialize() {
    getPosts();
    darkMode(['body', 'header', 'main'], ['aside-content', 'controls', 'user']);
    submitButtonHref();
    userDisplay('Signed in as');
    // defining the HTML elements onclick= function's definition when using imported function
    window.vote = vote; 
    window.removePost = removePost;
  };

};

// *** INITIALIZATION OF THE PAGE RENDER ***
const webSiteProject = new Webpage;
webSiteProject.initialize();