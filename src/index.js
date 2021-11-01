import './components.js';
import render from '@cocreate/render';

function init() {
    let config;
    if (window.config && !window.config.host) {
        window.config.host = window.location.hostname;
    }

    if (!window.config) {
        config = {
            organization_Id: window.localStorage.getItem('organization_id'),
            apiKey: window.localStorage.getItem('apiKey'),
            host: window.localStorage.getItem('host')
        };

        if (!config.organization_Id || !config.apiKey) {
            render.data({
                selector: "[template_id='notification']",
                data: {
                    type: 'config',
                    status: 'failed',
                    message: 'apiKey and organization_id could not be found',
                    success: false
                }
            });
            console.log('apiKey and organization_id could not be found');
        }
        else
            window.config = config;
    }
    
}

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
    if (this[key]) {}
}

init();

export default { addComponent, removeComponent };
