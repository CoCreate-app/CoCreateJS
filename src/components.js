import { addLazily, addDependency } from './lazy-loader';
// import '@cocreate/dnd'
// Dependencies
addDependency('utils', import (/*webpackChunkName: "utils-chunk"*/ '@cocreate/utils'));
addDependency('socket', import (/*webpackChunkName: "socket-chunk"*/ '@cocreate/socket-client'));
addDependency('common-fun', import (/*webpackChunkName: "common-fun-chunk"*/ '@cocreate/socket-client/src/common-fun.js'));
addDependency('message', import (/*webpackChunkName: "message-chunk"*/ '@cocreate/message-client'));
addDependency('crud', import (/*webpackChunkName: "crud-chunk"*/ '@cocreate/crud-client'));
addDependency('crdt', import (/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
addDependency('domText', import (/*webpackChunkName: "domText-chunk"*/ '@cocreate/domtext'));
addDependency('cursors', import (/*webpackChunkName: "cursors-chunk"*/ '@cocreate/cursors'));
addDependency('filter', import (/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));
addDependency('form', import (/*webpackChunkName: "form-chunk"*/ '@cocreate/form'));

// Core Components
addLazily('cssParse', 'body', ()=> import (/*webpackChunkName: "css-chunk"*/ '@cocreate/cocreatecss'))
addLazily('cssSave', '[data-save]', ()=> import (/*webpackChunkName: "css-save-chunk"*/ '@cocreate/cocreatecss/src/save.js'))
addLazily('action', '[data-actions]', ()=> import (/*webpackChunkName: "action-chunk"*/ '@cocreate/action'))
addLazily('room', '[data-room]', ()=> import (/*webpackChunkName: "room-chunk"*/ '@cocreate/room'))
addLazily('logic', '[data-pass_id], [data-pass_to], [data-pass_value_to], [data-pass_value_id], [data-for]', ()=> import (/*webpackChunkName: "logic-chunk"*/ '@cocreate/logic'))
addLazily('htmltags', '[data-collection]', ()=> import (/*webpackChunkName: "htmltags-chunk"*/ '@cocreate/htmltags'))
addLazily('input', 'input[data-collection], textarea[data-collection]', ()=> import (/*webpackChunkName: "input-chunk"*/ '@cocreate/input'))
addLazily('render', '[data-render]', ()=> import (/*webpackChunkName: "render-chunk"*/ '@cocreate/render'))
addLazily('fetch', '[data-fetch_collection]', ()=> import (/*webpackChunkName: "fetch-chunk"*/ '@cocreate/fetch'))
addLazily('vdom', '[data-vdom_target]', ()=> import (/*webpackChunkName: "vdom-chunk"*/ '@cocreate/vdom'))
addLazily('dnd', '.sortable, .cloneable, [data-draggable], [data-cloneable]', ()=> import (/*webpackChunkName: "dnd-chunk"*/ '@cocreate/dnd'))
addLazily('conditionalLogic', '[data-show], [data-hide]', ()=> import (/*webpackChunkName: "conditionalLogic-chunk"*/ '@cocreate/conditional-logic'))
addLazily('toggle', '[data-toogle], [data-hover]', ()=> import (/*webpackChunkName: "toggle-chunk"*/ '@cocreate/toggle'))
addLazily('selected', '[data-selected]', ()=> import (/*webpackChunkName: "selected-chunk"*/ '@cocreate/selected'))
addLazily('scroll', '[data-scroll]', ()=> import (/*webpackChunkName: "scroll-chunk"*/ '@cocreate/scroll'))
addLazily('resize', '[data-resize]', ()=>import(/*webpackChunkName: "resize-chunk"*/ '@cocreate/resize'))
addLazily('attributes', '[data-attributes], [data-style]', ()=>import(/*webpackChunkName: "attributes-chunk"*/ '@cocreate/attributes'))
addLazily('users', '[data-permissions], [data-actions*="createUser"], [data-actions*="loginBtn"]', ()=> import (/*webpackChunkName: "users-chunk"*/ '@cocreate/users'))
addLazily('organizations', '[data-actions*="createOrg"]', ()=> import (/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'))
addLazily('industry', '[data-actions*="runIndustry"]', ()=> import (/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'))
addLazily('uuid', '[data-uuid], .loginBtn', ()=> import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'))
addLazily('renderKey', '[data-key]', ()=> import (/*webpackChunkName: "render-key-chunk"*/ '@cocreate/render-key'))

// Collabortion Components
addLazily('text', 'input[data-collection], textarea[data-collection]', ()=> import (/*webpackChunkName: "text-chunk"*/ '@cocreate/text'))
addLazily('contenteditable', '[data-collection][contenteditable]', ()=> import (/*webpackChunkName: "contenteditable-chunk"*/ '@cocreate/contenteditable'))

// UI Components
addLazily('floatingLabel', '.floating-label', ()=> import (/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'))
addLazily('sidenav', '.cocreate-sidenav', ()=> import (/*webpackChunkName: "sidenav-chunk"*/ '@cocreate/sidenav'))
addLazily('fullscreen', '[data-fullscreen]', ()=> import (/*webpackChunkName: "fullscreen-chunk"*/ '@cocreate/fullscreen'))
addLazily('modal', '[target="modal"]', ()=> import (/*webpackChunkName: "modal-chunk"*/ '@cocreate/modal'))
addLazily('parallax', '[data-parallax]', ()=> import (/*webpackChunkName: "parallax-chunk"*/ '@cocreate/parallax'))
addLazily('calculation', '[data-calculation]', ()=> import (/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'))
addLazily('progress', '[data-progress]', ()=> import (/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'))
addLazily('randomColor', '[data-background_color]', ()=> import (/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'))
addLazily('socialShare', '[data-share_network]', ()=> import (/*webpackChunkName: "social-share-chunk"*/ '@cocreate/social-share'))
addLazily('splitview', '.container.svColumn', ()=> import (/*webpackChunkName: "splitview-chunk"*/ '@cocreate/splitview'))
addLazily('select', 'cocreate-select', ()=> import (/*webpackChunkName: "select-chunk"*/ '@cocreate/select'))
addLazily('toolbar', '[data-toolbar_target]', ()=> import (/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'))

// Modules
addLazily('builder', '#canvas', ()=> import (/*webpackChunkName: "builder-chunk"*/ '@cocreate/builder'))
addLazily('clipboard', '.clipboard', ()=> import (/*webpackChunkName: "clipboard-chunk"*/ '@cocreate/builder/src/components/clipboard.js'))

// Plugins
addLazily('charts', '.cocreate-chart', ()=> import (/*webpackChunkName: "charts-chunk"*/ '@cocreate/charts'))
// addLazily('codemirror', '.codemirror', ()=> import (/*webpackChunkName: "codemirror-chunk"*/ '@cocreate/codemirror'))
addLazily('croppie', '[data-croppie]', ()=> import (/*webpackChunkName: "croppie-chunk"*/ '@cocreate/croppie'))
addLazily('domain', '[data-domain]', ()=> import (/*webpackChunkName: "domain-chunk"*/ '@cocreate/domain'))
addLazily('facebook', '[data-facebook]', ()=> import (/*webpackChunkName: "facebook-chunk"*/ '@cocreate/facebook'))
addLazily('fullcalendar', '.cal-container', ()=> import (/*webpackChunkName: "fullcalendar-chunk"*/ '@cocreate/fullcalendar'))
addLazily('font-awesome', '.fa, .fas, .fab', ()=> import (/*webpackChunkName: "font-awesome-chunk"*/ '@cocreate/font-awesome'))
addLazily('google-auth', '[data-googleauth]', ()=> import (/*webpackChunkName: "google-auth-chunk"*/ '@cocreate/google-auth'))
// addLazily('google-maps', '[data-google-maps]', ()=> import (/*webpackChunkName: "google-maps-chunk"*/ '@cocreate/google-maps'))
addLazily('instagram', '[data-instagram]', ()=> import (/*webpackChunkName: "instagram-chunk"*/ '@cocreate/instagram'))
addLazily('lighthouse', '[data-lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk"*/ '@cocreate/lighthouse'))
addLazily('linkedin', '[data-linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk"*/ '@cocreate/linkedin'))
// addLazily('monaco', '.monaco', ()=> import (/*webpackChunkName: "monaco-chunk"*/ '@cocreate/monaco'))
addLazily('pickr', '.color-picker', ()=> import (/*webpackChunkName: "pickr-chunk"*/ '@cocreate/pickr'))
addLazily('pinterest', '[data-pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk"*/ '@cocreate/pinterest'))
addLazily('plaid', '[data-plaid]', ()=> import (/*webpackChunkName: "plaid-chunk"*/ '@cocreate/plaid'))
addLazily('prism', '.language-html, .language-css, .language-js, .language-shell, .language-json', ()=> import (/*webpackChunkName: "prism-chunk"*/ '@cocreate/prism'))
// addLazily('quill', '.quill', ()=> import (/*webpackChunkName: "quill-chunk"*/ '@cocreate/quill'))
addLazily('sendgrid', '[data-sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk"*/ '@cocreate/sendgrid'))
addLazily('shipengine', '[data-shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk"*/ '@cocreate/shipengine'))
addLazily('stripe', '[data-stripe]', ()=> import (/*webpackChunkName: "stripe-chunk"*/ '@cocreate/stripe'))
addLazily('twilio', '[data-twilio]', ()=> import (/*webpackChunkName: "twilio-chunk"*/ '@cocreate/twilio'))
addLazily('twitter', '[data-twitter]', ()=> import (/*webpackChunkName: "twitter-chunk"*/ '@cocreate/twitter'))
addLazily('uppy', '.uppy', ()=> import (/*webpackChunkName: "uppy-chunk"*/ '@cocreate/uppy'))
