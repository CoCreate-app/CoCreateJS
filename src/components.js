import { addLazily, addDependency } from './lazy-loader';

addDependency('api', import (/*webpackChunkName: "api-chunk"*/ '@cocreate/api') );
addDependency('utils', import (/*webpackChunkName: "utils-chunk"*/ '@cocreate/utils'));
addDependency('socket', import (/*webpackChunkName: "socket-chunk"*/ '@cocreate/socket'));
addDependency('message', import (/*webpackChunkName: "message-chunk"*/ '@cocreate/message'));
addDependency('crud', import (/*webpackChunkName: "crud-chunk"*/ '@cocreate/crud'));
addDependency('crdt', import (/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
addDependency('cursors', import (/*webpackChunkName: "cursors-chunk"*/ '@cocreate/cursors'));
addDependency('filter', import (/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));
addDependency('form', import (/*webpackChunkName: "form-chunk"*/ '@cocreate/form'));



// addLazily('componentName', 'component-selector', ()=> import(/*webpackChunkName: "label-chunk"*/ 'component path'))
addLazily('floatingLabel', '.floating-label', ()=> import (/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'))

addLazily('action', '[data-actions]', ()=> import (/*webpackChunkName: "action-chunk"*/ '@cocreate/action'))
addLazily('room', '[data-room]', ()=> import (/*webpackChunkName: "room-chunk"*/ '@cocreate/room'))
addLazily('logic', '[data-pass_id], [data-pass_to], [data-for]', ()=> import (/*webpackChunkName: "logic-chunk"*/ '@cocreate/logic'))
addLazily('htmltags', '[data-collection]', ()=> import (/*webpackChunkName: "htmltags-chunk"*/ '@cocreate/htmltags'))
addLazily('input', 'input[data-collection], textarea[data-collection]', ()=> import (/*webpackChunkName: "input-chunk"*/ '@cocreate/input'))
addLazily('render', '[data-render]', ()=> import (/*webpackChunkName: "render-chunk"*/ '@cocreate/render'))
addLazily('fetch', '[data-fetch_collection]', ()=> import (/*webpackChunkName: "fetch-chunk"*/ '@cocreate/fetch'))
addLazily('vdom', '[data-vdom_target]', ()=> import (/*webpackChunkName: "vdom-chunk"*/ '@cocreate/vdom'))
addLazily('dnd', '.sortable, .cloneable, [data-draggable], [data-cloneable]', ()=> import (/*webpackChunkName: "dnd-chunk"*/ '@cocreate/dnd'))
addLazily('conditionalLogic', '[data-show], [data-hide]', ()=> import (/*webpackChunkName: "conditionalLogic-chunk"*/ '@cocreate/conditional-logic'))
addLazily('toggle', '[data-toogle]', ()=> import (/*webpackChunkName: "toggle-chunk"*/ '@cocreate/toggle'))
addLazily('selected', '[data-selected]', ()=> import (/*webpackChunkName: "selected-chunk"*/ '@cocreate/selected'))
addLazily('scroll', '[data-scroll]', ()=> import (/*webpackChunkName: "scroll-chunk"*/ '@cocreate/scroll'))
addLazily('attributes', '[data-attributes]', ()=>import(/*webpackChunkName: "attributes-chunk"*/ '@cocreate/attributes'))
addLazily('users', '[data-permissions], .loginBtn', ()=> import (/*webpackChunkName: "users-chunk"*/ '@cocreate/users'))
addLazily('organizations', '#org_id', ()=> import (/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'))
// addLazily('industry', '[data-permissions], .loginBtn', ()=> import (/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'))
addLazily('uuid', '[data-uuid], .loginBtn', ()=> import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'))
addLazily('render-key', '[data-key]', ()=> import (/*webpackChunkName: "render-key-chunk"*/ '@cocreate/render-key'))

// collabortion
addLazily('text', 'input[data-collection], textarea[data-collection]', ()=> import (/*webpackChunkName: "text-chunk"*/ '@cocreate/text'))
addLazily('contenteditable', '[data-collection][contenteditable]', ()=> import (/*webpackChunkName: "contenteditable-chunk"*/ '@cocreate/contenteditable'))

// UI Components
addLazily('sidenav', '.cocreate-sidenav', ()=> import (/*webpackChunkName: "sidenav-chunk"*/ '@cocreate/sidenav'))

addLazily('fullscreen', '[data-fullscreen]', ()=> import (/*webpackChunkName: "fullscreen-chunk"*/ '@cocreate/fullscreen'))
addLazily('modal', '[target="modal"]', ()=> import (/*webpackChunkName: "modal-chunk"*/ '@cocreate/modal'))
addLazily('parallax', '[data-parallax]', ()=> import (/*webpackChunkName: "parallax-chunk"*/ '@cocreate/parallax'))
addLazily('calculation', '[data-calculation]', ()=> import (/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'))
addLazily('progress', '[data-progress]', ()=> import (/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'))
addLazily('randomColor', '[data-background_color]', ()=> import (/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'))
addLazily('socialShare', '.social_share', ()=> import (/*webpackChunkName: "socialShare-chunk"*/ '@cocreate/social-share'))
addLazily('splitview', '.container.svColumn', ()=> import (/*webpackChunkName: "splitview-chunk"*/ '@cocreate/splitview'))
addLazily('select', 'cocreate-select, .selecte--field', ()=> import (/*webpackChunkName: "select-chunk"*/ '@cocreate/select'))
addLazily('toolbar', '[data-toolbar_target]', ()=> import (/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'))


// Modules
// addLazily('builder', '#canvas', ()=> import (/*webpackChunkName: "builder-chunk"*/ '@cocreate/builder'))


// Plugins

// addLazily('charts', '[data-charts]', ()=> import (/*webpackChunkName: "charts-chunk"*/ '@cocreate/charts'))
// addLazily('codemirror', '.codemirror', ()=> import (/*webpackChunkName: "codemirror-chunk"*/ '@cocreate/codemirror'))
// addLazily('croppie', '[data-croppie]', ()=> import (/*webpackChunkName: "croppie-chunk"*/ '@cocreate/croppie'))
// addLazily('domain', '[data-domain]', ()=> import (/*webpackChunkName: "domain-chunk"*/ '@cocreate/domain'))
// addLazily('facebook', '[data-facebook]', ()=> import (/*webpackChunkName: "facebook-chunk"*/ '@cocreate/facebook'))
// addLazily('fullcalendar', '[data-fullcalendar]', ()=> import (/*webpackChunkName: "fullcalendar-chunk"*/ '@cocreate/fullcalendar'))

// addLazily('google-auth', '[data-google-auth]', ()=> import (/*webpackChunkName: "google-auth-chunk"*/ '@cocreate/google-auth'))

// addLazily('google-maps', '[data-google-maps]', ()=> import (/*webpackChunkName: "google-maps-chunk"*/ '@cocreate/google-maps'))
// addLazily('instagram', '[data-instagram]', ()=> import (/*webpackChunkName: "instagram-chunk"*/ '@cocreate/instagram'))
// addLazily('lighthouse', '[data-lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk"*/ '@cocreate/lighthouse'))
// addLazily('linkedin', '[data-linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk"*/ '@cocreate/linkedin'))
// addLazily('monaco', '.monaco', ()=> import (/*webpackChunkName: "monaco-chunk"*/ '@cocreate/monaco'))
addLazily('pickr', '.color-pickr', ()=> import (/*webpackChunkName: "pickr-chunk"*/ '@cocreate/pickr'))
// addLazily('pinterest', '[data-pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk"*/ '@cocreate/pinterest'))
// addLazily('plaid', '[data-plaid]', ()=> import (/*webpackChunkName: "plaid-chunk"*/ '@cocreate/plaid'))
// addLazily('progressbar', '[data-progressbar]', ()=> import (/*webpackChunkName: "progressbar-chunk"*/ '@cocreate/progressbar'))

// addLazily('sendgrid', '[data-sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk"*/ '@cocreate/sendgrid'))
// addLazily('shipengine', '[data-shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk"*/ '@cocreate/shipengine'))
// addLazily('stripe', '[data-stripe]', ()=> import (/*webpackChunkName: "stripe-chunk"*/ '@cocreate/stripe'))
// addLazily('twilio', '[data-twilio]', ()=> import (/*webpackChunkName: "twilio-chunk"*/ '@cocreate/twilio'))

// addLazily('twitter', '[data-twitter]', ()=> import (/*webpackChunkName: "twitter-chunk"*/ '@cocreate/twitter'))
// addLazily('uppy', '#drag-drop-area', ()=> import (/*webpackChunkName: "uppy-chunk"*/ '@cocreate/uppy'))

// Test component
// addLazily('test', '[data-test]', ()=> import (webpackChunkName: "test-chunk" '@cocreate/test'))