module.exports = {
    "organization_id": "",
    "key": "",
    "host": "",
    "directories": [
        {
            "entry": "./dist",
            "exclude": [
                ".txt"
            ],
            "array": "files",
            "object": {
                "name": "{{name}}",
                "src": "{{source}}",
                "host": [
                    "*",
                    "general.cocreate.app"
                ],
                "directory": "/dist/{{directory}}",
                "path": "{{path}}",
                "content-type": "{{content-type}}",
                "public": "true"
            }
        },
        {
            "entry": "./docs",
            "exclude": [
                "demo"
            ],
            "array": "files",
            "object": {
                "name": "{{name}}",
                "src": "{{source}}",
                "host": [
                    "*",
                    "general.cocreate.app"
                ],
                "directory": "/docs/{{directory}}",
                "path": "{{path}}",
                "content-type": "{{content-type}}",
                "public": "true",
                "website_id": "61381ed8829b690010a4f2b2"
            }
        }
    ],
    "sources": [
        {
            "array": "demos",
            "object": {
                "_id": "619aa8e8a8b6b4001a9dc24e",
                "input-demo": "{{./demo/elements/input.html}}",
                "textarea-demo": "{{./demo/elements/textarea.html}}",
                "contenteditable-demo": "{{./demo/elements/contenteditable.html}}",
                "checkbox-demo": "{{./demo/elements/checkbox.html}}",
                "radio-demo": "{{./demo/elements/radio.html}}",
                "select-demo": "{{./demo/elements/select.html}}",
                "form-demo": "{{./demo/elements/form.html}}",
                "actions-demo": "{{./demo/elements/actions.html}}",
                "fetch-demo": "{{./demo/templating/fetch.html}}",
                "filter-demo": "{{./demo/templating/filter.html}}",
                "pass-attributes-demo": "{{./demo/logic/pass-attributes.html}}",
                "pass-values-demo": "{{./demo/logic/pass-values.html}}",
                "conditional-logic-demo": "{{./demo/logic/conditional-logic.html}}",
                "signup-demo": "{{./demo/user-management/signup.html}}",
                "signin-demo": "{{./demo/user-management/signin.html}}",
                "signout-demo": "{{./demo/user-management/signout.html}}"
            }
        }
    ],
    "repositories": [
        {
            "path": "../CoCreateJS",
            "repo": "github.com/CoCreate-app/CoCreateJS.git",
            "exclude": [
                "git"
            ]
        },
        {
            "path": "../CoCreateCSS",
            "repo": "github.com/CoCreate-app/CoCreateCSS.git"
        },
        {
            "path": "../CoCreate-admin",
            "repo": "github.com/CoCreate-app/CoCreate-admin.git",
            "exclude": [
                "git"
            ]
        },
        {
            "path": "../CoCreate-website",
            "repo": "github.com/CoCreate-app/CoCreate-website.git",
            "exclude": [
                "git"
            ]
        },
        {
            "path": "../CoCreate-components/CoCreate-actions",
            "repo": "github.com/CoCreate-app/CoCreate-actions.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-api",
            "repo": "github.com/CoCreate-app/CoCreate-api.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-attributes",
            "repo": "github.com/CoCreate-app/CoCreate-attributes.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-calculation",
            "repo": "github.com/CoCreate-app/CoCreate-calculation.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-cli",
            "repo": "github.com/CoCreate-app/CoCreate-cli.git",
            "exclude": [
                "git"
            ]
        },
        {
            "path": "../CoCreate-components/CoCreate-codearea",
            "repo": "github.com/CoCreate-app/CoCreate-codearea.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-clone",
            "repo": "github.com/CoCreate-app/CoCreate-clone.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-conditional-logic",
            "repo": "github.com/CoCreate-app/CoCreate-conditional-logic.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-config",
            "repo": "github.com/CoCreate-app/CoCreate-config.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-crdt",
            "repo": "github.com/CoCreate-app/CoCreate-crdt.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-crud-client",
            "repo": "github.com/CoCreate-app/CoCreate-crud-client.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-css-parser",
            "repo": "github.com/CoCreate-app/CoCreate-css-parser.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-cursors",
            "repo": "github.com/CoCreate-app/CoCreate-cursors.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-dnd",
            "repo": "github.com/CoCreate-app/CoCreate-dnd.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-docs",
            "repo": "github.com/CoCreate-app/CoCreate-docs.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-element-config",
            "repo": "github.com/CoCreate-app/CoCreate-element-config.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-element-prototype",
            "repo": "github.com/CoCreate-app/CoCreate-element-prototype.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-elements",
            "repo": "github.com/CoCreate-app/CoCreate-elements.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-events",
            "repo": "github.com/CoCreate-app/CoCreate-events.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-file",
            "repo": "github.com/CoCreate-app/CoCreate-file.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-filter",
            "repo": "github.com/CoCreate-app/CoCreate-filter.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-floating-label",
            "repo": "github.com/CoCreate-app/CoCreate-floating-label.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-fullscreen",
            "repo": "github.com/CoCreate-app/CoCreate-fullscreen.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-indexeddb",
            "repo": "github.com/CoCreate-app/CoCreate-indexeddb.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-industry",
            "repo": "github.com/CoCreate-app/CoCreate-industry.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-lazy-loader",
            "repo": "github.com/CoCreate-app/CoCreate-lazy-loader.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-local-storage",
            "repo": "github.com/CoCreate-app/CoCreate-local-storage.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-link",
            "repo": "github.com/CoCreate-app/CoCreate-link.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-message-client",
            "repo": "github.com/CoCreate-app/CoCreate-message-client.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-modal",
            "repo": "github.com/CoCreate-app/CoCreate-modal.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-observer",
            "repo": "github.com/CoCreate-app/CoCreate-observer.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-organizations",
            "repo": "github.com/CoCreate-app/CoCreate-organizations.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-overlay-scroll",
            "repo": "github.com/CoCreate-app/CoCreate-overlay-scroll.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-parallax",
            "repo": "github.com/CoCreate-app/CoCreate-parallax.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-pass",
            "repo": "github.com/CoCreate-app/CoCreate-pass.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-position",
            "repo": "github.com/CoCreate-app/CoCreate-position.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-progress",
            "repo": "github.com/CoCreate-app/CoCreate-progress.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-pwa",
            "repo": "github.com/CoCreate-app/CoCreate-pwa.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-random-color",
            "repo": "github.com/CoCreate-app/CoCreate-random-color.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-remove",
            "repo": "github.com/CoCreate-app/CoCreate-remove.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-render",
            "repo": "github.com/CoCreate-app/CoCreate-render.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-resize",
            "repo": "github.com/CoCreate-app/CoCreate-resize.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-resize-observer",
            "repo": "github.com/CoCreate-app/CoCreate-resize-observer.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-rich-text",
            "repo": "github.com/CoCreate-app/CoCreate-rich-text.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-scroll",
            "repo": "github.com/CoCreate-app/CoCreate-scroll.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-search",
            "repo": "github.com/CoCreate-app/CoCreate-search.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-select",
            "repo": "github.com/CoCreate-app/CoCreate-select.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-selection",
            "repo": "github.com/CoCreate-app/CoCreate-selection.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-signup-animation",
            "repo": "github.com/CoCreate-app/CoCreate-signup-animation.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-socket-client",
            "repo": "github.com/CoCreate-app/CoCreate-socket-client.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-social-share",
            "repo": "github.com/CoCreate-app/CoCreate-social-share.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-text",
            "repo": "github.com/CoCreate-app/CoCreate-text.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-toolbar",
            "repo": "github.com/CoCreate-app/CoCreate-toolbar.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-unique",
            "repo": "github.com/CoCreate-app/CoCreate-unique.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-users",
            "repo": "github.com/CoCreate-app/CoCreate-users.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-utils",
            "repo": "github.com/CoCreate-app/CoCreate-utils.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-uuid",
            "repo": "github.com/CoCreate-app/CoCreate-uuid.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-validation",
            "repo": "github.com/CoCreate-app/CoCreate-validation.git"
        },
        {
            "path": "../CoCreate-components/CoCreate-vdom",
            "repo": "github.com/CoCreate-app/CoCreate-vdom.git"
        },
        {
            "path": "../CoCreate-apps/CoCreate-builder",
            "repo": "github.com/CoCreate-app/CoCreate-builder.git"
        },
        {
            "path": "../CoCreate-apps/CoCreate-dashboard",
            "repo": "github.com/CoCreate-app/CoCreate-dashboard.git"
        },
        {
            "path": "../CoCreate-apps/CoCreate-datatable",
            "repo": "github.com/CoCreate-app/CoCreate-datatable.git"
        },
        {
            "path": "../CoCreate-apps/CoCreate-kanban",
            "repo": "github.com/CoCreate-app/CoCreate-kanban.git"
        },
        {
            "path": "../CoCreate-apps/CoCreate-sandbox",
            "repo": "github.com/CoCreate-app/CoCreate-sandbox.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-charts",
            "repo": "github.com/CoCreate-app/CoCreate-charts.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-croppie",
            "repo": "github.com/CoCreate-app/CoCreate-croppie.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-domain",
            "repo": "github.com/CoCreate-app/CoCreate-domain.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-fullcalendar",
            "repo": "github.com/CoCreate-app/CoCreate-fullcalendar.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-facebook",
            "repo": "github.com/CoCreate-app/CoCreate-facebook.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-google-maps",
            "repo": "github.com/CoCreate-app/CoCreate-google-maps.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-google-auth",
            "repo": "github.com/CoCreate-app/CoCreate-google-auth.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-instagram",
            "repo": "github.com/CoCreate-app/CoCreate-instagram.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-lighthouse",
            "repo": "github.com/CoCreate-app/CoCreate-lighthouse.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-linkedin",
            "repo": "github.com/CoCreate-app/CoCreate-linkedin.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-pickr",
            "repo": "github.com/CoCreate-app/CoCreate-pickr.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-pinterest",
            "repo": "github.com/CoCreate-app/CoCreate-pinterest.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-plaid",
            "repo": "github.com/CoCreate-app/CoCreate-plaid.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-prism",
            "repo": "github.com/CoCreate-app/CoCreate-prism.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-sendgrid",
            "repo": "github.com/CoCreate-app/CoCreate-sendgrid.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-shipengine",
            "repo": "github.com/CoCreate-app/CoCreate-shipengine.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-stripe",
            "repo": "github.com/CoCreate-app/CoCreate-stripe.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-tui-image-editor",
            "repo": "github.com/CoCreate-app/CoCreate-tui-image-editor.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-twilio",
            "repo": "github.com/CoCreate-app/CoCreate-twilio.git"
        },
        {
            "path": "../CoCreate-plugins/CoCreate-twitter",
            "repo": "github.com/CoCreate-app/CoCreate-twitter.git"
        }
    ]
};