import { lazyLoad, dependency } from './lazy-loader';

// Dependencies
dependency('observer', import (/*webpackChunkName: "observer-chunk"*/ '@cocreate/observer'));
dependency('socket', import (/*webpackChunkName: "socket-chunk"*/ '@cocreate/socket-client'));
dependency('message', import (/*webpackChunkName: "message-chunk"*/ '@cocreate/message-client'));
dependency('crud', import (/*webpackChunkName: "crud-chunk"*/ '@cocreate/crud-client'));
dependency('crdt', import (/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
dependency('selection', import (/*webpackChunkName: "selection-chunk"*/ '@cocreate/selection'));
dependency('filter', import (/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));
dependency('api', import (/*webpackChunkName: "api-chunk"*/ '@cocreate/api'));
dependency('utils', import (/*webpackChunkName: "utils-chunk"*/ '@cocreate/utils'));

// Core Components
lazyLoad('css', 'body', ()=> import (/*webpackChunkName: "css-chunk"*/ '@cocreate/cocreatecss'));
lazyLoad('logic', '[pass_id], [pass_to], [get-value], [pass-value_to], [pass-value_id], [data-for]', ()=> import (/*webpackChunkName: "logic-chunk"*/ '@cocreate/logic'));
lazyLoad('action', '[actions]', ()=> import (/*webpackChunkName: "action-chunk"*/ '@cocreate/action'));
lazyLoad('form', 'form', ()=> import (/*webpackChunkName: "form-chunk"*/ '@cocreate/form'));
lazyLoad('room', '[namespace], [room]', ()=> import (/*webpackChunkName: "room-chunk"*/ '@cocreate/room'));
lazyLoad('elements', '[collection]', ()=> import (/*webpackChunkName: "elements-chunk"*/ '@cocreate/elements'));
lazyLoad('fetch', '[fetch-collection]', ()=> import (/*webpackChunkName: "fetch-chunk"*/ '@cocreate/fetch'));
lazyLoad('render', '[template_id]', ()=> import (/*webpackChunkName: "render-chunk"*/ '@cocreate/render'));
lazyLoad('vdom', '[vdom-target], [vdom-id]', ()=> import (/*webpackChunkName: "vdom-chunk"*/ '@cocreate/vdom'));
lazyLoad('dnd', '.sortable, .cloneable, [draggable], [cloneable]', ()=> import (/*webpackChunkName: "dnd-chunk"*/ '@cocreate/dnd'));
lazyLoad('conditionalLogic', '[show], [hide]', ()=> import (/*webpackChunkName: "conditionalLogic-chunk"*/ '@cocreate/conditional-logic'));
lazyLoad('clone', '[clone_id]', ()=> import (/*webpackChunkName: "clone-chunk"*/ '@cocreate/clone'));
lazyLoad('toggle', '[toggle], [hover]', ()=> import (/*webpackChunkName: "toggle-chunk"*/ '@cocreate/toggle'));
lazyLoad('selected', '[selected-value]', ()=> import (/*webpackChunkName: "selected-chunk"*/ '@cocreate/selected'));
lazyLoad('scroll', '[scroll]', ()=> import (/*webpackChunkName: "scroll-chunk"*/ '@cocreate/scroll'));
lazyLoad('resize', '[resize]', ()=>import(/*webpackChunkName: "resize-chunk"*/ '@cocreate/resize'));
lazyLoad('resizeObserver', '[resize-target]', ()=>import(/*webpackChunkName: "resizeObserver-chunk"*/ '@cocreate/resize-observer'));
lazyLoad('attributes', '[attribute]', ()=>import(/*webpackChunkName: "attributes-chunk"*/ '@cocreate/attributes'));
lazyLoad('users', '[actions*="createUser"], [actions*="login"], [actions*="logout"], [user-status]', ()=> import (/*webpackChunkName: "users-chunk"*/ '@cocreate/users'));
lazyLoad('unique', '[unique]', ()=> import (/*webpackChunkName: "unique-chunk"*/ '@cocreate/unique'));
lazyLoad('organizations', '[actions*="createOrg"]', ()=> import (/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'));
lazyLoad('industry', '[actions*="createIndustry"], [actions*="runIndustry"]', ()=> import (/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'));
lazyLoad('uuid', '[uuid]', ()=> import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'));
lazyLoad('renderKey', '[data-key]', ()=> import (/*webpackChunkName: "render-key-chunk"*/ '@cocreate/render-key'));
lazyLoad('search', '[search_id]', ()=> import (/*webpackChunkName: "search-chunk"*/ '@cocreate/search'));
lazyLoad('elementConfig', '[config-target]', ()=> import (/*webpackChunkName: "elementConfig-chunk"*/ '@cocreate/element-config'));
lazyLoad('validation', '[actions*="validate"]', ()=> import (/*webpackChunkName: "validation-chunk"*/ '@cocreate/validation'));

// Collabortion Components
lazyLoad('cursors', 'input, textarea, [contenteditable]', ()=> import (/*webpackChunkName: "cursors-chunk"*/ '@cocreate/cursors'));
lazyLoad('text', 'input, textarea, [contenteditable]', ()=> import (/*webpackChunkName: "text-chunk"*/ '@cocreate/text'));
lazyLoad('rich-text', '[actions*="nodeName"], [actions*="cloneElement"], [actions*="deleteElement"]', ()=> import (/*webpackChunkName: "rich-text-chunk"*/ '@cocreate/rich-text'));

// UI Components
lazyLoad('floatingLabel', '.floating-label', ()=> import (/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'));
lazyLoad('fullscreen', '[fullscreen]', ()=> import (/*webpackChunkName: "fullscreen-chunk"*/ '@cocreate/fullscreen'));
lazyLoad('modal', '[target="modal"]', ()=> import (/*webpackChunkName: "modal-chunk"*/ '@cocreate/modal'));
lazyLoad('parallax', '[parallax-src]', ()=> import (/*webpackChunkName: "parallax-chunk"*/ '@cocreate/parallax'));
lazyLoad('calculation', '[calculate]', ()=> import (/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'));
lazyLoad('progress', '[data-progress]', ()=> import (/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'));
lazyLoad('randomColor', '[background-color]', ()=> import (/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'));
lazyLoad('signupAnimation', '[actions*="animate"]', ()=> import (/*webpackChunkName: "signup-animation-chunk"*/ '@cocreate/signup-animation'));
lazyLoad('socialShare', '[share-network]', ()=> import (/*webpackChunkName: "social-share-chunk"*/ '@cocreate/social-share'));
lazyLoad('splitview', '.container.svColumn', ()=> import (/*webpackChunkName: "splitview-chunk"*/ '@cocreate/splitview'));
lazyLoad('select', 'cocreate-select', ()=> import (/*webpackChunkName: "select-chunk"*/ '@cocreate/select'));
lazyLoad('toolbar', '[toolbar-target]', ()=> import (/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'));

// Plugins
lazyLoad('charts', '.cocreate-chart', ()=> import (/*webpackChunkName: "charts-chunk"*/ '@cocreate/charts'));
// lazyLoad('codemirror', '.codemirror', ()=> import (/*webpackChunkName: "codemirror-chunk"*/ '@cocreate/codemirror'));
lazyLoad('croppie', '[data-croppie]', ()=> import (/*webpackChunkName: "croppie-chunk"*/ '@cocreate/croppie'));
lazyLoad('domain', '[data-domain]', ()=> import (/*webpackChunkName: "domain-chunk"*/ '@cocreate/domain'));
lazyLoad('facebook', '[data-facebook]', ()=> import (/*webpackChunkName: "facebook-chunk"*/ '@cocreate/facebook'));
lazyLoad('fullcalendar', '.cal-container', ()=> import (/*webpackChunkName: "fullcalendar-chunk"*/ '@cocreate/fullcalendar'));
lazyLoad('font-awesome', '.fa, .fas, .fab', ()=> import (/*webpackChunkName: "font-awesome-chunk"*/ '@cocreate/font-awesome'));
lazyLoad('google-auth', '[data-googleauth]', ()=> import (/*webpackChunkName: "google-auth-chunk"*/ '@cocreate/google-auth'));
lazyLoad('google-maps', '[data-map_id]', ()=> import (/*webpackChunkName: "google-maps-chunk"*/ '@cocreate/google-maps'));
lazyLoad('instagram', '[data-instagram]', ()=> import (/*webpackChunkName: "instagram-chunk"*/ '@cocreate/instagram'));
lazyLoad('lighthouse', '[data-lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk"*/ '@cocreate/lighthouse'));
lazyLoad('linkedin', '[data-linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk"*/ '@cocreate/linkedin'));
// lazyLoad('monaco', '.monaco', ()=> import (/*webpackChunkName: "monaco-chunk"*/ '@cocreate/monaco'));
lazyLoad('pickr', '.color-picker', ()=> import (/*webpackChunkName: "pickr-chunk"*/ '@cocreate/pickr'));
lazyLoad('pinterest', '[data-pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk"*/ '@cocreate/pinterest'));
lazyLoad('plaid', '[data-plaid]', ()=> import (/*webpackChunkName: "plaid-chunk"*/ '@cocreate/plaid'));
lazyLoad('prism', '.language-html, .language-css, .language-js, .language-shell, .language-json', ()=> import (/*webpackChunkName: "prism-chunk"*/ '@cocreate/prism'));
lazyLoad('sendgrid', '[data-sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk"*/ '@cocreate/sendgrid'));
lazyLoad('shipengine', '[data-shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk"*/ '@cocreate/shipengine'));
lazyLoad('stripe', '[data-stripe]', ()=> import (/*webpackChunkName: "stripe-chunk"*/ '@cocreate/stripe'));
// lazyLoad('twilio', '[data-twilio]', ()=> import (/*webpackChunkName: "twilio-chunk"*/ '@cocreate/twilio'));
lazyLoad('twitter', '[data-twitter]', ()=> import (/*webpackChunkName: "twitter-chunk"*/ '@cocreate/twitter'));
lazyLoad('uppy', '.uppy, [uploader="uppy"]', ()=> import (/*webpackChunkName: "uppy-chunk"*/ '@cocreate/uppy'));
