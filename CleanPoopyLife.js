// ==UserScript==
// @name         Clean Poopy life
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       David Harvey
// @match        http://*.poopy.life/*
// @grant        none
// @license https://creativecommons.org/licenses/by-sa/4.0/
// @homepage https://github.com/davext/Clean-Poopy-life/
// @twitterURL https://twitter.com/dave_xt
// @contactURL https://twitter.com/dave_xt
// @supportURL https://github.com/davext/Clean-Poopy-life/issues
// @contributionURL https://twitter.com/dave_xt
// @updateURL https://raw.githubusercontent.com/davext/Clean-Poopy-life/master/CleanPoopyLife.js
// @downloadURL https://raw.githubusercontent.com/davext/Clean-Poopy-life/master/CleanPoopyLife.js
// ==/UserScript==

(function() {
       document.getElementById("toolbar-header").outerHTML = "";
       document.getElementById("wpadminbar").setAttribute('style','display:block !important; background:#23282d !important; height: 32px !important;');
       document.body.style = "padding-top: 32px;";
})();