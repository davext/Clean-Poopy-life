// ==UserScript==
// @name         Clean Poopy life
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       David Harvey
// @match        http://*.poopy.life/*
// @grant        none
// ==/UserScript==

(function() {
       document.getElementById("toolbar-header").outerHTML = "";
       document.getElementById("wpadminbar").setAttribute('style','display:block !important; background:#23282d !important; height: 32px !important;');
       document.body.style = "padding-top: 32px;";
})();