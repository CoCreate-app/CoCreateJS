// core components
import core from "./core.js"
import observer from '@cocreate/observer';
import css from '@cocreate/cocreatecss';
import './components.js'

// (async function() {

//     // preload - downloads with main chunk but does not execute until main chunk complete. Priority using 1, -1 true=0
//     let importObj = await
//     import (
//         /* webpackChunkName: "components-chunk", webpackPreload: true */
//         "./components.js");
//     Object.assign(window.CoCreate, {components: importObj.default})



// })()

/*global window*/
function addComponent(key, component) {
    this[key] = component;
}

function removeComponent(key) {
    if (this[key]) {

    }
}

export default { css, observer, core, addComponent, removeComponent}
