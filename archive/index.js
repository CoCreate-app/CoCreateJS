// core components
import CoCreate from './src/index.js';
import css from '@cocreate/cocreatecss';
import observer from '@cocreate/observer';
// import './components.js';

(async function() {

    // preload - downloads with main chunk but does not execute until main chunk complete. Priority using 1, -1 true=0
    let importObj = await
    import (
        /* webpackChunkName: "components-chunk", webpackPreload: true */
        "./components.js");
    Object.assign(window.CoCreate, {components: importObj.default})


    // // prefetched - downloads after main chunk has complete and in idle mode. If no longer idle will pause then resume when not idle. Priority using 1, -1 true=0
    // importObj = await
    // import ( /* webpackChunkName: "htmltags-chunk", webpackPrefetch: true */
    //     "../CoCreate-components/CoCreate-htmltags/src/index.js");
    // Object.assign(window.CoCreate, {htmltags: importObj.default})

})()

export default { ...CoCreate, css, observer }