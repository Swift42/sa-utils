// ==UserScript==
// @name         Star Based - compact fleet list
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide some elements in the fleet list for a more compact view
// @author       Swift42
// @match        https://*.based.staratlas.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=staratlas.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
  setTimeout(function() { addCSS('div#fleetsListWrapper>div>div>div:nth-child(2)>div:nth-child(2), div#fleetsListWrapper>div>div>div:nth-child(1)>div:nth-child(3) { display:none !important } div#fleetsListWrapper>div>div>div:nth-child(1)>div:nth-child(2) { right:0; position: absolute !important; }'); }, 5000);
})();
