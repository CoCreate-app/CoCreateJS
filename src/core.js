import CoCreateSocket from '@cocreate/socket-client';
import render from '@cocreate/render';

function init() {
    
    let socket = window.CoCreateSockets;
    
    if (!socket) {
      socket = new CoCreateSocket('ws');
      window.CoCreateSockets = socket;
    }
    
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

init();
