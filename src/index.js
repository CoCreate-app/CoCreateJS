import './core.js';
import './components.js';
import observer from '@cocreate/observer';

// (async function() {

//     let importObj = await
    
//     // preload - downloads with main chunk but does not execute until main chunk complete. Priority using 1, -1 true=0
//     import (/* webpackChunkName: "components-chunk", webpackPreload: true */ "./components.js");
//          Object.assign(window.CoCreate, {components: importObj.default}
//     )


//      // prefetched - downloads after main chunk is complete and in idle mode. If no longer idle will pause then resume when not idle. Priority using 1, -1 true=0
//      import ( /* webpackChunkName: "htmltags-chunk", webpackPrefetch: true */ "../CoCreate-components/CoCreate-htmltags/src/index.js");
//           Object.assign(window.CoCreate, {htmltags: importObj.default}
//      )

// })()

function addComponent(key, component) {
    this[key] = component;
}

function removeComponent(key) {
    if (this[key]) {
        
    }
}

export default { addComponent, removeComponent, observer };
