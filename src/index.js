import './components.js';
import { addComponent, removeComponent } from '@cocreate/lazy-loader';
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
                    message: `<span>apiKey and organization_id could not be found. If you already have an API key <a href="/admin/signin.html">signin</a> Otherwise <a href="https://cocreate.app/admin/signup.html">signup</a></span>`,
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

export default { addComponent, removeComponent };
