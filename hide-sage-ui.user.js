// ==UserScript==
// @name         Star Based - remove star map
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the div containing the star map for more perfomance on e.g. a Raspberry Pi
// @author       Swift42
// @match        https://*.based.staratlas.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=staratlas.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function removeDivs() {
        var divs = document.querySelectorAll('div#root>div>div:nth-child(2)');
        divs.forEach(function(div) {
            div.remove();
        });
    }
    setTimeout(function() { removeDivs() }, 5000);
})();
