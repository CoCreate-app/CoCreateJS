import { add, addToCoCreate } from './helper';

addToCoCreate('api', import (/*webpackChunkName: "api-chunk"*/ '@cocreate/api') );
addToCoCreate('form', import (/*webpackChunkName: "form-chunk"*/ '@cocreate/form'));
addToCoCreate('crdt', import (/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
addToCoCreate('cursors', import (/*webpackChunkName: "cursors-chunk"*/ '@cocreate/cursors'));
addToCoCreate('filter', import (/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));



// add('componentName', 'component-selector', ()=> import(/*webpackChunkName: "label-chunk"*/ 'component path'))
add('floatingLabel', '.floating-label', ()=> import (/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'))

add('action', '[data-actions]', ()=> import (/*webpackChunkName: "action-chunk"*/ '@cocreate/action'))
add('room', '[data-room]', ()=> import (/*webpackChunkName: "room-chunk"*/ '@cocreate/room'))
add('logic', '[data-pass_id], [data-pass_to], [data-for]', ()=> import (/*webpackChunkName: "logic-chunk"*/ '@cocreate/logic'))
add('htmltags', '[data-collection]', ()=> import (/*webpackChunkName: "htmltags-chunk"*/ '@cocreate/htmltags'))
add('input', 'input[data-collection], textarea[data-collection]', ()=> import (/*webpackChunkName: "input-chunk"*/ '@cocreate/input'))
add('render', '[data-render]', ()=> import (/*webpackChunkName: "render-chunk"*/ '@cocreate/render'))
add('fetch', '[data-fetch_collection]', ()=> import (/*webpackChunkName: "fetch-chunk"*/ '@cocreate/fetch'))
add('vdom', '[data-vdom_target]', ()=> import (/*webpackChunkName: "vdom-chunk"*/ '@cocreate/vdom'))
add('dnd', '.sortable, .cloneable, [data-draggable], [data-cloneable]', ()=> import (/*webpackChunkName: "dnd-chunk"*/ '@cocreate/dnd'))
add('conditionalLogic', '[data-show], [data-hide]', ()=> import (/*webpackChunkName: "conditionalLogic-chunk"*/ '@cocreate/conditional-logic'))
add('toggle', '[data-toogle]', ()=> import (/*webpackChunkName: "toggle-chunk"*/ '@cocreate/toggle'))
add('selected', '[data-selected]', ()=> import (/*webpackChunkName: "selected-chunk"*/ '@cocreate/selected'))
add('scroll', '[data-scroll]', ()=> import (/*webpackChunkName: "scroll-chunk"*/ '@cocreate/scroll'))
add('attributes', '[data-attributes]', ()=>import(/*webpackChunkName: "attributes-chunk"*/ '@cocreate/attributes'))
add('users', '[data-permissions], .loginBtn', ()=> import (/*webpackChunkName: "users-chunk"*/ '@cocreate/users'))
add('organizations', '#org_id', ()=> import (/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'))
// add('industry', '[data-permissions], .loginBtn', ()=> import (/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'))
add('uuid', '[data-uuid], .loginBtn', ()=> import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'))
add('render-key', '[data-key]', ()=> import (/*webpackChunkName: "render-key-chunk"*/ '@cocreate/render-key'))

// collabortion
add('text', 'input[data-collection], textarea[data-collection]', ()=> import (/*webpackChunkName: "text-chunk"*/ '@cocreate/text'))
add('contenteditable', '[data-collection][contenteditable]', ()=> import (/*webpackChunkName: "contenteditable-chunk"*/ '@cocreate/contenteditable'))

// UI Components
add('sidenav', '.cocreate-sidenav', ()=> import (/*webpackChunkName: "sidenav-chunk"*/ '@cocreate/sidenav'))

add('fullscreen', '[data-fullscreen]', ()=> import (/*webpackChunkName: "fullscreen-chunk"*/ '@cocreate/fullscreen'))
add('modal', '[target="modal"]', ()=> import (/*webpackChunkName: "modal-chunk"*/ '@cocreate/modal'))
add('parallax', '[data-parallax]', ()=> import (/*webpackChunkName: "parallax-chunk"*/ '@cocreate/parallax'))
add('calculation', '[data-calculation]', ()=> import (/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'))
add('progress', '[data-progress]', ()=> import (/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'))
add('randomColor', '[data-background_color]', ()=> import (/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'))
add('socialShare', '.social_share', ()=> import (/*webpackChunkName: "socialShare-chunk"*/ '@cocreate/social-share'))
add('splitview', '.container.svColumn', ()=> import (/*webpackChunkName: "splitview-chunk"*/ '@cocreate/splitview'))
add('select', 'cocreate-select, .selecte--field', ()=> import (/*webpackChunkName: "select-chunk"*/ '@cocreate/select'))
add('toolbar', '[data-toolbar_target]', ()=> import (/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'))


// Modules
// add('builder', '#canvas', ()=> import (/*webpackChunkName: "builder-chunk"*/ '@cocreate/builder'))


// Plugins

// add('charts', '[data-charts]', ()=> import (/*webpackChunkName: "charts-chunk"*/ '@cocreate/charts'))
// add('codemirror', '.codemirror', ()=> import (/*webpackChunkName: "codemirror-chunk"*/ '@cocreate/codemirror'))
// add('croppie', '[data-croppie]', ()=> import (/*webpackChunkName: "croppie-chunk"*/ '@cocreate/croppie'))
// add('domain', '[data-domain]', ()=> import (/*webpackChunkName: "domain-chunk"*/ '@cocreate/domain'))
// add('facebook', '[data-facebook]', ()=> import (/*webpackChunkName: "facebook-chunk"*/ '@cocreate/facebook'))
// add('fullcalendar', '[data-fullcalendar]', ()=> import (/*webpackChunkName: "fullcalendar-chunk"*/ '@cocreate/fullcalendar'))

// add('google-auth', '[data-google-auth]', ()=> import (/*webpackChunkName: "google-auth-chunk"*/ '@cocreate/google-auth'))

// add('google-maps', '[data-google-maps]', ()=> import (/*webpackChunkName: "google-maps-chunk"*/ '@cocreate/google-maps'))
// add('instagram', '[data-instagram]', ()=> import (/*webpackChunkName: "instagram-chunk"*/ '@cocreate/instagram'))
// add('lighthouse', '[data-lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk"*/ '@cocreate/lighthouse'))
// add('linkedin', '[data-linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk"*/ '@cocreate/linkedin'))
// add('monaco', '.monaco', ()=> import (/*webpackChunkName: "monaco-chunk"*/ '@cocreate/monaco'))
add('pickr', '.color-pickr', ()=> import (/*webpackChunkName: "pickr-chunk"*/ '@cocreate/pickr'))
// add('pinterest', '[data-pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk"*/ '@cocreate/pinterest'))
// add('plaid', '[data-plaid]', ()=> import (/*webpackChunkName: "plaid-chunk"*/ '@cocreate/plaid'))
// add('progressbar', '[data-progressbar]', ()=> import (/*webpackChunkName: "progressbar-chunk"*/ '@cocreate/progressbar'))
// add('quill', '.quill', ()=> import (/*webpackChunkName: "quill-chunk"*/ '@cocreate/quill'))
// add('sendgrid', '[data-sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk"*/ '@cocreate/sendgrid'))
// add('shipengine', '[data-shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk"*/ '@cocreate/shipengine'))
// add('stripe', '[data-stripe]', ()=> import (/*webpackChunkName: "stripe-chunk"*/ '@cocreate/stripe'))
// add('twilio', '[data-twilio]', ()=> import (/*webpackChunkName: "twilio-chunk"*/ '@cocreate/twilio'))

// add('twitter', '[data-twitter]', ()=> import (/*webpackChunkName: "twitter-chunk"*/ '@cocreate/twitter'))
// add('uppy', '#drag-drop-area', ()=> import (/*webpackChunkName: "uppy-chunk"*/ '@cocreate/uppy'))
