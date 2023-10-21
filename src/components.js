import { dependency, lazyLoad } from '@cocreate/lazy-loader';
// preload - /*..., webpackPreload: true*/ downloads with main chunk but does not execute until main chunk complete. Priority using 1, -1 true=0
// prefetched - /*..., webpackPrefetch: true*/ downloads after main chunk is complete and in idle mode. If no longer idle will pause then resume when not idle. Priority using 1, -1 true=0

// Dependencies
dependency('observer', import(/*webpackChunkName: "observer-chunk"*/ '@cocreate/observer'));
dependency('utils', import(/*webpackChunkName: "utils-chunk"*/ '@cocreate/utils'));
dependency('indexeddb', import(/*webpackChunkName: "indexeddb-chunk"*/ '@cocreate/indexeddb'));
dependency('localstorage', import(/*webpackChunkName: "localstorage-chunk"*/ '@cocreate/local-storage'));
dependency('config', import(/*webpackChunkName: "config-chunk"*/ '@cocreate/config'));
dependency('socket', import(/*webpackChunkName: "socket-chunk"*/ '@cocreate/socket-client'));
dependency('events', import(/*webpackChunkName: "events-chunk"*/ '@cocreate/events'));
dependency('crud', import(/*webpackChunkName: "crud-chunk"*/ '@cocreate/crud-client'));
dependency('crdt', import(/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
dependency('element-prototype', import(/*webpackChunkName: "element-prototype-chunk"*/ '@cocreate/element-prototype'));
dependency('pass', import(/*webpackChunkName: "pass-chunk"*/ '@cocreate/pass'));
dependency('link', import(/*webpackChunkName: "link-chunk"*/ '@cocreate/link'));
dependency('cache', import(/*webpackChunkName: "cache-chunk"*/ '@cocreate/cache'));
dependency('pwa', import(/*webpackChunkName: "pwa-chunk"*/ '@cocreate/pwa'));

// Components
// lazyLoad('css', 'cocreatecss', ()=> import (/*webpackChunkName: "CoCreateCSS"*/ '@cocreate/cocreatecss'));
lazyLoad('cssParser', 'link[array][object][key], link[parse]', () => import(/*webpackChunkName: "css-parser-chunk"*/ '@cocreate/css-parser'));
lazyLoad('actions', '[actions]', () => import(/*webpackChunkName: "actions-chunk"*/ '@cocreate/actions'));
lazyLoad('filter', '[filter-selector], [filter-closest], [filter-parent], [filter-next], [filter-previous]', () => import(/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));
lazyLoad('render', '[template], [render-selector], [render-closest], [render-parent], [render-next], [render-previous]', () => import(/*webpackChunkName: "render-chunk"*/ '@cocreate/render'));
lazyLoad('elements', 'form, [src], [storage], [database], [array]', () => import(/*webpackChunkName: "elements-chunk"*/ '@cocreate/elements'));
lazyLoad('file', '[type="file"], [actions*="upload"], [actions*="download"], [actions*="saveLocally"], [actions*="import"], [actions*="export"], [actions*="createFile"], [actions*="deleteFile"], [actions*="createDirectory"], [actions*="deleteDirectory"]', () => import(/*webpackChunkName: "file-chunk"*/ '@cocreate/file'));
lazyLoad('api', '[actions], [template_id]', () => import(/*webpackChunkName: "api-chunk"*/ '@cocreate/api'));
lazyLoad('resizeObserver', '[resize-selector]', () => import(/*webpackChunkName: "resizeObserver-chunk"*/ '@cocreate/resize-observer'));
lazyLoad('dnd', '[sortable], [cloneables], [draggable], [droppable], [cloneable]', () => import(/*webpackChunkName: "dnd-chunk"*/ '@cocreate/dnd'));
lazyLoad('position', '[positionable], [moveable]', () => import(/*webpackChunkName: "position-chunk"*/ '@cocreate/position'));
lazyLoad('conditionalLogic', '[show], [hide]', () => import(/*webpackChunkName: "conditionalLogic-chunk"*/ '@cocreate/conditional-logic'));
lazyLoad('scroll', '[scroll]', () => import(/*webpackChunkName: "scroll-chunk"*/ '@cocreate/scroll'));
lazyLoad('resize', '[resize]', () => import(/*webpackChunkName: "resize-chunk"*/ '@cocreate/resize'));
lazyLoad('clone', '[actions*="clone"]', () => import(/*webpackChunkName: "clone-chunk"*/ '@cocreate/clone'));
lazyLoad('remove', '[actions*="remove"]', () => import(/*webpackChunkName: "remove-chunk"*/ '@cocreate/remove'));
lazyLoad('attributes', '[attribute]', () => import(/*webpackChunkName: "attributes-chunk"*/ '@cocreate/attributes'));
lazyLoad('users', '[session], [actions*="signUp"], [actions*="signIn"], [actions*="signOut"], [user-status]', () => import(/*webpackChunkName: "users-chunk"*/ '@cocreate/users'));
lazyLoad('unique', '[unique]', () => import(/*webpackChunkName: "unique-chunk"*/ '@cocreate/unique'));
lazyLoad('organizations', '[actions*="createOrganization"]', () => import(/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'));
lazyLoad('industry', '[actions*="createIndustry"], [actions*="runIndustry"], [actions*="deleteIndustry"], [actions*="deleteIndustries"]', () => import(/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'));
lazyLoad('uuid', '[uuid]', () => import(/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'));
lazyLoad('search', '[search_id]', () => import(/*webpackChunkName: "search-chunk"*/ '@cocreate/search'));
lazyLoad('elementConfig', '[config-selector]', () => import(/*webpackChunkName: "elementConfig-chunk"*/ '@cocreate/element-config'));
lazyLoad('validation', '[actions*="validate"], required, unique', () => import(/*webpackChunkName: "validation-chunk"*/ '@cocreate/validation'));
lazyLoad('calculation', '[calculate]', () => import(/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'));

// Collabortion Components
lazyLoad('selection', 'input, textarea, [contenteditable]', () => import(/*webpackChunkName: "selection-chunk"*/ '@cocreate/selection'));
lazyLoad('cursors', 'input, textarea, [contenteditable]', () => import(/*webpackChunkName: "cursors-chunk"*/ '@cocreate/cursors'));
lazyLoad('text', 'input, textarea, [contenteditable]', () => import(/*webpackChunkName: "text-chunk"*/ '@cocreate/text'));
lazyLoad('rich-text', '[actions*="nodeName"], [actions*="cloneElement"], [actions*="deleteElement"]', () => import(/*webpackChunkName: "rich-text-chunk"*/ '@cocreate/rich-text'));
lazyLoad('codearea', '[type="code"]', () => import(/*webpackChunkName: "codearea-chunk"*/ '@cocreate/codearea'));

// UI Components
lazyLoad('floatingLabel', 'floating-label, .floating-label', () => import(/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'));
lazyLoad('fullscreen', '[fullscreen]', () => import(/*webpackChunkName: "fullscreen-chunk"*/ '@cocreate/fullscreen'));
lazyLoad('modal', '[actions*="Modal"]', () => import(/*webpackChunkName: "modal-chunk"*/ '@cocreate/modal'));
lazyLoad('parallax', '[parallax-src]', () => import(/*webpackChunkName: "parallax-chunk"*/ '@cocreate/parallax'));
lazyLoad('progress', '[data-progress]', () => import(/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'));
lazyLoad('randomColor', '[background-color]', () => import(/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'));
lazyLoad('socialShare', '[share-network]', () => import(/*webpackChunkName: "social-share-chunk"*/ '@cocreate/social-share'));
lazyLoad('select', 'cocreate-select', () => import(/*webpackChunkName: "select-chunk"*/ '@cocreate/select'));
lazyLoad('toolbar', '[toolbar-selector]', () => import(/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'));
lazyLoad('vdom', '[vdom-selector], [vdom-id]', () => import(/*webpackChunkName: "vdom-chunk"*/ '@cocreate/vdom'));
lazyLoad('notification', '[actions*="notification"]', () => import(/*webpackChunkName: "notification-chunk"*/ '@cocreate/notification'));

// Plugins
// lazyLoad('charts', '[chart="chartjs"]', ()=> import(/*webpackChunkName: "charts-chunk"*/ '@cocreate/charts'));
// lazyLoad('domain', '[domain]', ()=> import (/*webpackChunkName: "domain-chunk"*/ '@cocreate/domain'));
// lazyLoad('facebook', '[facebook]', ()=> import (/*webpackChunkName: "facebook-chunk"*/ '@cocreate/facebook'));
// lazyLoad('fullcalendar', '.cal-container', ()=> import (/*webpackChunkName: "fullcalendar-chunk"*/ '@cocreate/fullcalendar'));
// lazyLoad('google-auth', '[googleauth]', ()=> import (/*webpackChunkName: "google-auth-chunk"*/ '@cocreate/google-auth'));
// lazyLoad('google-maps', '[data-map_id]', ()=> import (/*webpackChunkName: "google-maps-chunk"*/ '@cocreate/google-maps'));
// lazyLoad('instagram', '[instagram]', ()=> import (/*webpackChunkName: "instagram-chunk"*/ '@cocreate/instagram'));
// lazyLoad('lighthouse', '[lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk"*/ '@cocreate/lighthouse'));
// lazyLoad('linkedin', '[linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk"*/ '@cocreate/linkedin'));
lazyLoad('openai', '[openai]', () => import(/*webpackChunkName: "openai-chunk"*/ '@cocreate/openai'));
lazyLoad('pickr', '.color-picker', () => import(/*webpackChunkName: "pickr-chunk"*/ '@cocreate/pickr'));
// lazyLoad('pinterest', '[pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk"*/ '@cocreate/pinterest'));
// lazyLoad('plaid', '[plaid]', ()=> import (/*webpackChunkName: "plaid-chunk"*/ '@cocreate/plaid'));
lazyLoad('prism', '.language-html, .language-css, .language-js, .language-shell, .language-json', () => import(/*webpackChunkName: "prism-chunk"*/ '@cocreate/prism'));
// lazyLoad('sendgrid', '[sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk"*/ '@cocreate/sendgrid'));
// lazyLoad('shipengine', '[shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk"*/ '@cocreate/shipengine'));
// lazyLoad('stripe', '[stripe]', ()=> import (/*webpackChunkName: "stripe-chunk"*/ '@cocreate/stripe'));
// // lazyLoad('twilio', '[twilio]', ()=> import (/*webpackChunkName: "twilio-chunk"*/ '@cocreate/twilio'));
// lazyLoad('twitter', '[twitter]', ()=> import (/*webpackChunkName: "twitter-chunk"*/ '@cocreate/twitter'));

