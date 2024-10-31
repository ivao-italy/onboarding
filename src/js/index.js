'use strict'

import '../css/onboarding.css';  // Import CSS file
import _ from 'lodash';

window.loadContent = (event, content) => {
    event.preventDefault();

    fetch("contents/" + _.toLower(content) + ".htm" /*, options */)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById("content").innerHTML = html;
            //console.log(_.startCase(content));
            document.title = "IVAO IT - Benvenuto - " + _.startCase(content);
        })
        .catch((error) => {
            console.warn(error);
        });
};


