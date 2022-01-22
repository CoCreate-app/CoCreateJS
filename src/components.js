import { lazyLoad, dependency } from '@cocreate/lazy-loader';
// preload - /*..., webpackPreload: true*/ downloads with main chunk but does not execute until main chunk complete. Priority using 1, -1 true=0
// prefetched - /*..., webpackPrefetch: true*/ downloads after main chunk is complete and in idle mode. If no longer idle will pause then resume when not idle. Priority using 1, -1 true=0

// Dependencies
dependency('observer', import (/*webpackChunkName: "observer-chunk"*/ '@cocreate/observer'));
dependency('socket', import (/*webpackChunkName: "socket-chunk"*/ '@cocreate/socket-client'));
dependency('crud', import (/*webpackChunkName: "crud-chunk"*/ '@cocreate/crud-client'));
dependency('crdt', import (/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
dependency('message', import (/*webpackChunkName: "message-chunk"*/ '@cocreate/message-client'));
dependency('filter', import (/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));
dependency('api', import (/*webpackChunkName: "api-chunk"*/ '@cocreate/api'));
dependency('link', import (/*webpackChunkName: "link-chunk"*/ '@cocreate/link'));
dependency('utils', import (/*webpackChunkName: "utils-chunk"*/ '@cocreate/utils'));

// Components
lazyLoad('css', 'link[collection][document_id][name], link[parse="true"]', ()=> import (/*webpackChunkName: "css-chunk"*/ '@cocreate/cocreatecss'));
lazyLoad('renderJson', '[fetch-for]', ()=> import (/*webpackChunkName: "render-json-chunk"*/ '@cocreate/render-json'));
lazyLoad('pass', '[pass_id], [pass_to], [pass-value_to], [pass-value_id]', ()=> import (/*webpackChunkName: "pass-chunk"*/ '@cocreate/pass'));
lazyLoad('actions', '[actions]', ()=> import (/*webpackChunkName: "actions-chunk", webpackPrefetch: true*/ '@cocreate/actions'));
lazyLoad('form', 'form', ()=> import (/*webpackChunkName: "form-chunk", webpackPrefetch: true*/ '@cocreate/form'));
lazyLoad('room', '[namespace], [room]', ()=> import (/*webpackChunkName: "room-chunk", webpackPrefetch: true*/ '@cocreate/room'));
lazyLoad('elements', '[collection], [get-value], [set-value]', ()=> import (/*webpackChunkName: "elements-chunk"*/ '@cocreate/elements'));
lazyLoad('fetch', '[fetch-collection]', ()=> import (/*webpackChunkName: "fetch-chunk"*/ '@cocreate/fetch'));
lazyLoad('render', '[template_id]', ()=> import (/*webpackChunkName: "render-chunk"*/ '@cocreate/render'));
lazyLoad('resizeObserver', '[resize-target]', ()=>import(/*webpackChunkName: "resizeObserver-chunk", webpackPrefetch: true*/ '@cocreate/resize-observer'));
lazyLoad('dnd', '.sortable, .cloneable, [draggable], [cloneable]', ()=> import (/*webpackChunkName: "dnd-chunk", webpackPrefetch: true*/ '@cocreate/dnd'));
lazyLoad('conditionalLogic', '[show], [hide]', ()=> import (/*webpackChunkName: "conditionalLogic-chunk", webpackPrefetch: true*/ '@cocreate/conditional-logic'));
lazyLoad('toggle', '[toggle], [hover]', ()=> import (/*webpackChunkName: "toggle-chunk", webpackPrefetch: true*/ '@cocreate/toggle'));
lazyLoad('selected', '[selected-value]', ()=> import (/*webpackChunkName: "selected-chunk", webpackPrefetch: true*/ '@cocreate/selected'));
lazyLoad('scroll', '[scroll]', ()=> import (/*webpackChunkName: "scroll-chunk", webpackPrefetch: true*/ '@cocreate/scroll'));
lazyLoad('resize', '[resize]', ()=>import(/*webpackChunkName: "resize-chunk", webpackPrefetch: true*/ '@cocreate/resize'));
lazyLoad('remove', '[actions*="remove"]', ()=>import(/*webpackChunkName: "remove-chunk"*/ '@cocreate/remove'));
lazyLoad('attributes', '[attribute]', ()=>import(/*webpackChunkName: "attributes-chunk", webpackPrefetch: true*/ '@cocreate/attributes'));
lazyLoad('users', '[actions*="createUser"], [actions*="login"], [actions*="logout"], [user-status]', ()=> import (/*webpackChunkName: "users-chunk"*/ '@cocreate/users'));
lazyLoad('unique', '[unique]', ()=> import (/*webpackChunkName: "unique-chunk"*/ '@cocreate/unique'));
lazyLoad('organizations', '[actions*="createOrg"]', ()=> import (/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'));
lazyLoad('industry', '[actions*="createIndustry"], [actions*="runIndustry"]', ()=> import (/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'));
lazyLoad('uuid', '[uuid]', ()=> import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'));
lazyLoad('search', '[search_id]', ()=> import (/*webpackChunkName: "search-chunk"*/ '@cocreate/search'));
lazyLoad('elementConfig', '[config-target]', ()=> import (/*webpackChunkName: "elementConfig-chunk"*/ '@cocreate/element-config'));
lazyLoad('validation', '[actions*="validate"]', ()=> import (/*webpackChunkName: "validation-chunk"*/ '@cocreate/validation'));

// Collabortion Components
lazyLoad('selection', 'input, textarea, [contenteditable]', ()=> import (/*webpackChunkName: "selection-chunk", webpackPrefetch: true*/ '@cocreate/selection'));
lazyLoad('cursors', 'input, textarea, [contenteditable]', ()=> import (/*webpackChunkName: "cursors-chunk", webpackPrefetch: true*/ '@cocreate/cursors'));
lazyLoad('text', 'input, textarea, [contenteditable]', ()=> import (/*webpackChunkName: "text-chunk", webpackPrefetch: true*/ '@cocreate/text'));
lazyLoad('rich-text', '[actions*="nodeName"], [actions*="cloneElement"], [actions*="deleteElement"]', ()=> import (/*webpackChunkName: "rich-text-chunk", webpackPrefetch: true*/ '@cocreate/rich-text'));

// UI Components
lazyLoad('floatingLabel', 'floating-label, .floating-label', ()=> import (/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'));
lazyLoad('fullscreen', '[fullscreen]', ()=> import (/*webpackChunkName: "fullscreen-chunk", webpackPrefetch: true*/ '@cocreate/fullscreen'));
lazyLoad('modal', '[target="modal"]', ()=> import (/*webpackChunkName: "modal-chunk", webpackPrefetch: true*/ '@cocreate/modal'));
lazyLoad('parallax', '[parallax-src]', ()=> import (/*webpackChunkName: "parallax-chunk", webpackPrefetch: true*/ '@cocreate/parallax'));
lazyLoad('calculation', '[calculate]', ()=> import (/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'));
lazyLoad('progress', '[data-progress]', ()=> import (/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'));
lazyLoad('randomColor', '[background-color]', ()=> import (/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'));
lazyLoad('signupAnimation', '[actions*="animateSignup"]', ()=> import (/*webpackChunkName: "signup-animation-chunk"*/ '@cocreate/signup-animation'));
lazyLoad('socialShare', '[share-network]', ()=> import (/*webpackChunkName: "social-share-chunk", webpackPrefetch: true*/ '@cocreate/social-share'));
lazyLoad('splitview', '.container.svColumn', ()=> import (/*webpackChunkName: "splitview-chunk", webpackPrefetch: true*/ '@cocreate/splitview'));
lazyLoad('select', 'cocreate-select', ()=> import (/*webpackChunkName: "select-chunk"*/ '@cocreate/select'));
lazyLoad('toolbar', '[toolbar-target]', ()=> import (/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'));
lazyLoad('vdom', '[vdom-target], [vdom-id]', ()=> import (/*webpackChunkName: "vdom-chunk", webpackPrefetch: true*/ '@cocreate/vdom'));

// Plugins
lazyLoad('charts', '[chart="chartjs"]', ()=> import (/*webpackChunkName: "charts-chunk", webpackPrefetch: true*/ '@cocreate/charts'));
// lazyLoad('codemirror', '.codemirror', ()=> import (/*webpackChunkName: "codemirror-chunk", webpackPrefetch: true*/ '@cocreate/codemirror'));
lazyLoad('croppie', '[editor="croppie"]', ()=> import (/*webpackChunkName: "croppie-chunk", webpackPrefetch: true*/ '@cocreate/croppie'));
lazyLoad('domain', '[domain]', ()=> import (/*webpackChunkName: "domain-chunk", webpackPrefetch: true*/ '@cocreate/domain'));
lazyLoad('facebook', '[facebook]', ()=> import (/*webpackChunkName: "facebook-chunk", webpackPrefetch: true*/ '@cocreate/facebook'));
lazyLoad('fullcalendar', '.cal-container', ()=> import (/*webpackChunkName: "fullcalendar-chunk", webpackPrefetch: true*/ '@cocreate/fullcalendar'));
lazyLoad('font-awesome', '.fa, .fas, .fab', ()=> import (/*webpackChunkName: "font-awesome-chunk", webpackPrefetch: true*/ '@cocreate/font-awesome'));
lazyLoad('google-auth', '[googleauth]', ()=> import (/*webpackChunkName: "google-auth-chunk", webpackPrefetch: true*/ '@cocreate/google-auth'));
lazyLoad('google-maps', '[data-map_id]', ()=> import (/*webpackChunkName: "google-maps-chunk", webpackPrefetch: true*/ '@cocreate/google-maps'));
lazyLoad('instagram', '[instagram]', ()=> import (/*webpackChunkName: "instagram-chunk", webpackPrefetch: true*/ '@cocreate/instagram'));
lazyLoad('lighthouse', '[lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk", webpackPrefetch: true*/ '@cocreate/lighthouse'));
lazyLoad('linkedin', '[linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk", webpackPrefetch: true*/ '@cocreate/linkedin'));
// lazyLoad('monaco', '.monaco', ()=> import (/*webpackChunkName: "monaco-chunk", webpackPrefetch: true*/ '@cocreate/monaco'));
lazyLoad('pickr', '.color-picker', ()=> import (/*webpackChunkName: "pickr-chunk", webpackPrefetch: true*/ '@cocreate/pickr'));
lazyLoad('pinterest', '[pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk", webpackPrefetch: true*/ '@cocreate/pinterest'));
lazyLoad('plaid', '[plaid]', ()=> import (/*webpackChunkName: "plaid-chunk", webpackPrefetch: true*/ '@cocreate/plaid'));
lazyLoad('prism', '.language-html, .language-css, .language-js, .language-shell, .language-json', ()=> import (/*webpackChunkName: "prism-chunk", webpackPrefetch: true*/ '@cocreate/prism'));
lazyLoad('sendgrid', '[sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk", webpackPrefetch: true*/ '@cocreate/sendgrid'));
lazyLoad('shipengine', '[shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk", webpackPrefetch: true*/ '@cocreate/shipengine'));
lazyLoad('stripe', '[stripe]', ()=> import (/*webpackChunkName: "stripe-chunk", webpackPrefetch: true*/ '@cocreate/stripe'));
// lazyLoad('twilio', '[twilio]', ()=> import (/*webpackChunkName: "twilio-chunk", webpackPrefetch: true*/ '@cocreate/twilio'));
lazyLoad('twitter', '[twitter]', ()=> import (/*webpackChunkName: "twitter-chunk", webpackPrefetch: true*/ '@cocreate/twitter'));
lazyLoad('uppy', '.uppy, [uploader="uppy"]', ()=> import (/*webpackChunkName: "uppy-chunk", webpackPrefetch: true*/ '@cocreate/uppy'));
