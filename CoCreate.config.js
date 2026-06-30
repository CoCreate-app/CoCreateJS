module.exports = {
    organization_id: "",
    key: "",
    host: {
        $branch: {
            master: "wss://cocreate.app",
            dev: "wss://dev.cocreate.app",
            test: "wss://test.cocreate.app"
        }
    },
    directories: [
        {
            entry: "./dist",
            exclude: [".txt"],
            array: "files",
            object: {
                name: "{{name}}",
                src: "{{source}}",
                host: ["*"],
                directory: "{{directory}}",
                path: "{{path}}",
                pathname: "{{pathname}}",
                "content-type": "{{content-type}}",
                public: "true"
            }
        },
        {
            entry: "./docs",
            exclude: ["demo"],
            array: "files",
            object: {
                name: "{{name}}",
                src: "{{source}}",
                host: ["*"],
                directory: "{{directory}}",
                path: "{{path}}",
                pathname: "{{pathname}}",
                "content-type": "{{content-type}}",
                public: "true"
            }
        }
    ],
    sources: [
        {
            array: "demos",
            object: {
                _id: "619aa8e8a8b6b4001a9dc24e",
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
                "state-attributes-demo": "{{./demo/logic/state-attributes.html}}",
                "state-values-demo": "{{./demo/logic/state-values.html}}",
                "conditional-logic-demo": "{{./demo/logic/conditional-logic.html}}",
                "signup-demo": "{{./demo/user-management/signup.html}}",
                "signin-demo": "{{./demo/user-management/signin.html}}",
                "signout-demo": "{{./demo/user-management/signout.html}}"
            }
        }
    ],

    /**
     * @property {string} moduleOutputPath
     * @description Defines the destination file path where the build system (e.g., ModuleGenerator Webpack plugin) 
     * will save the dynamically generated module entry file. This file contains the automated import and lazy-loading logic.
     */
    moduleOutputPath: "./CoCreate.modules.js",

    /**
     * @namespace modules
     * @description Contains core component configurations.
     * * The 'import' property defines the package import path for the module.
     * * The 'selector' property is designed so that when the module is built with the project's core, 
     * it observes the DOM for elements matching the selector and lazy-loads the required module dynamically.
     * * For development environments, the Poly Repo CLI (initiated via the 'coc' command) reads the 'path' and 'repo' keys from these objects, merging them with 'projects' to perform cross-repository git and build commands.
     * * @property {string} import - The package import path.
     * @property {string} [selector] - CSS selector used for DOM observation and lazy loading.
     * @property {string} [path] - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned in a new environment so the CLI can locate it during operations.
     * @property {string} [repo] - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the module from specific CLI commands.
     */
    modules: {
        "element-prototype": {
            import: "@cocreate/element-prototype",
            path: "../CoCreate-modules/CoCreate-element-prototype",
            repo: "github.com/CoCreate-app/CoCreate-element-prototype.git"
        },
        observer: {
            import: "@cocreate/observer",
            path: "../CoCreate-modules/CoCreate-observer",
            repo: "github.com/CoCreate-app/CoCreate-observer.git"
        },
        utils: {
            import: "@cocreate/utils",
            path: "../CoCreate-modules/CoCreate-utils",
            repo: "github.com/CoCreate-app/CoCreate-utils.git"
        },
        indexeddb: {
            import: "@cocreate/indexeddb",
            selector: "[storage*='indexeddb']",
            path: "../CoCreate-modules/CoCreate-indexeddb",
            repo: "github.com/CoCreate-app/CoCreate-indexeddb.git"
        },
        localstorage: {
            import: "@cocreate/local-storage",
            selector: "[storage*='localstorage'], [localstorage-set], [localstorage-get]",
            path: "../CoCreate-modules/CoCreate-local-storage",
            repo: "github.com/CoCreate-app/CoCreate-local-storage.git"
        },
        config: {
            import: "@cocreate/config",
            path: "../CoCreate-modules/CoCreate-config",
            repo: "github.com/CoCreate-app/CoCreate-config.git"
        },
        socket: {
            import: "@cocreate/socket-client",
            selector: "[socket='true']",
            path: "../CoCreate-modules/CoCreate-socket-client",
            repo: "github.com/CoCreate-app/CoCreate-socket-client.git"
        },
        events: {
            import: "@cocreate/events",
            path: "../CoCreate-modules/CoCreate-events",
            repo: "github.com/CoCreate-app/CoCreate-events.git"
        },
        crud: {
            import: "@cocreate/crud-client",
            selector: "[crud='true'], [database], [array]",
            path: "../CoCreate-modules/CoCreate-crud-client",
            repo: "github.com/CoCreate-app/CoCreate-crud-client.git"
        },
        crdt: {
            import: "@cocreate/crdt",
            selector: "[crdt='true']",
            path: "../CoCreate-modules/CoCreate-crdt",
            repo: "github.com/CoCreate-app/CoCreate-crdt.git"
        },
        state: {
            import: "@cocreate/state",
            selector: "link[state_to][state_id][key], link[parse]",
            path: "../CoCreate-modules/CoCreate-state",
            repo: "github.com/CoCreate-app/CoCreate-state.git"
        },
        link: {
            import: "@cocreate/link",
            path: "../CoCreate-modules/CoCreate-link",
            repo: "github.com/CoCreate-app/CoCreate-link.git"
        },
        aria: {
            import: "@cocreate/aria",
            selector: "[aria-controls], [aria-selected]",
            path: "../CoCreate-modules/CoCreate-aria",
            repo: "github.com/CoCreate-app/CoCreate-aria.git"
        },
        cache: {
            import: "@cocreate/cache",
            selector: "[cache='true']",
            path: "../CoCreate-modules/CoCreate-cache",
            repo: "github.com/CoCreate-app/CoCreate-cache.git"
        },
        pwa: {
            import: "@cocreate/pwa",
            path: "../CoCreate-modules/CoCreate-pwa",
            repo: "github.com/CoCreate-app/CoCreate-pwa.git"
        },
        organizations: {
            import: "@cocreate/organizations",
            path: "../CoCreate-modules/CoCreate-organizations",
            repo: "github.com/CoCreate-app/CoCreate-organizations.git"
        },
        cssParser: {
            import: "@cocreate/css-parser",
            selector: "link[array][object][key], link[parse]",
            path: "../CoCreate-modules/CoCreate-css-parser",
            repo: "github.com/CoCreate-app/CoCreate-css-parser.git"
        },
        actions: {
            import: "@cocreate/actions",
            selector: "[actions]",
            path: "../CoCreate-modules/CoCreate-actions",
            repo: "github.com/CoCreate-app/CoCreate-actions.git"
        },
        filter: {
            import: "@cocreate/filter",
            selector: "[filter-query]",
            path: "../CoCreate-modules/CoCreate-filter",
            repo: "github.com/CoCreate-app/CoCreate-filter.git"
        },
        render: {
            import: "@cocreate/render",
            selector: "[render], [render-query], [template], template",
            path: "../CoCreate-modules/CoCreate-render",
            repo: "github.com/CoCreate-app/CoCreate-render.git"
        },
        file: {
            import: "@cocreate/file",
            selector: "[type='file'], [actions*='upload'], [actions*='download'], [actions*='saveLocally'], [actions*='import'], [actions*='export'], [actions*='createFile'], [actions*='deleteFile'], [actions*='createDirectory'], [actions*='deleteDirectory']",
            path: "../CoCreate-modules/CoCreate-file",
            repo: "github.com/CoCreate-app/CoCreate-file.git"
        },
        elements: {
            import: "@cocreate/elements",
            selector: "form, [src], [storage], [database], [array]",
            path: "../CoCreate-modules/CoCreate-elements",
            repo: "github.com/CoCreate-app/CoCreate-elements.git"
        },
        api: {
            import: "@cocreate/api",
            selector: "[actions], [template_id]",
            path: "../CoCreate-modules/CoCreate-api",
            repo: "github.com/CoCreate-app/CoCreate-api.git"
        },
        plugins: {
            import: "@cocreate/plugins",
            selector: "[plugin]",
            path: "../CoCreate-modules/CoCreate-plugins",
            repo: "github.com/CoCreate-app/CoCreate-plugins.git"
        },
        dnd: {
            import: "@cocreate/dnd",
            selector: "[sortable], [cloneables], [draggable], [droppable], [cloneable]",
            path: "../CoCreate-modules/CoCreate-dnd",
            repo: "github.com/CoCreate-app/CoCreate-dnd.git"
        },
        position: {
            import: "@cocreate/position",
            selector: "[positionable], [moveable]",
            path: "../CoCreate-modules/CoCreate-position",
            repo: "github.com/CoCreate-app/CoCreate-position.git"
        },
        conditionalLogic: {
            import: "@cocreate/conditional-logic",
            selector: "[show], [hide]",
            path: "../CoCreate-modules/CoCreate-conditional-logic",
            repo: "github.com/CoCreate-app/CoCreate-conditional-logic.git"
        },
        scroll: {
            import: "@cocreate/scroll",
            selector: "[scroll], [scroll-to], [scrollable-x], [scrollable-y]",
            path: "../CoCreate-modules/CoCreate-scroll",
            repo: "github.com/CoCreate-app/CoCreate-scroll.git"
        },
        resize: {
            import: "@cocreate/resize",
            selector: "[resize], [height='auto']",
            path: "../CoCreate-modules/CoCreate-resize",
            repo: "github.com/CoCreate-app/CoCreate-resize.git"
        },
        clone: {
            import: "@cocreate/clone",
            selector: "[actions*='clone']",
            path: "../CoCreate-modules/CoCreate-clone",
            repo: "github.com/CoCreate-app/CoCreate-clone.git"
        },
        remove: {
            import: "@cocreate/remove",
            selector: "[actions*='remove']",
            path: "../CoCreate-modules/CoCreate-remove",
            repo: "github.com/CoCreate-app/CoCreate-remove.git"
        },
        attributes: {
            import: "@cocreate/attributes",
            selector: "[attribute]",
            path: "../CoCreate-modules/CoCreate-attributes",
            repo: "github.com/CoCreate-app/CoCreate-attributes.git"
        },
        users: {
            import: "@cocreate/users",
            selector: "[session], [actions*='signUp'], [actions*='signIn'], [actions*='signOut'], [user-status]",
            path: "../CoCreate-modules/CoCreate-users",
            repo: "github.com/CoCreate-app/CoCreate-users.git"
        },
        unique: {
            import: "@cocreate/unique",
            selector: "[unique]",
            path: "../CoCreate-modules/CoCreate-unique",
            repo: "github.com/CoCreate-app/CoCreate-unique.git"
        },
        industry: {
            import: "@cocreate/industry",
            selector: "[actions*='createIndustry'], [actions*='runIndustry'], [actions*='deleteIndustry'], [actions*='deleteIndustries']",
            path: "../CoCreate-modules/CoCreate-industry",
            repo: "github.com/CoCreate-app/CoCreate-industry.git"
        },
        uuid: {
            import: "@cocreate/uuid",
            selector: "[uuid]",
            path: "../CoCreate-modules/CoCreate-uuid",
            repo: "github.com/CoCreate-app/CoCreate-uuid.git"
        },
        search: {
            import: "@cocreate/search",
            selector: "[search_id]",
            path: "../CoCreate-modules/CoCreate-search",
            repo: "github.com/CoCreate-app/CoCreate-search.git"
        },
        elementConfig: {
            import: "@cocreate/element-config",
            selector: "[config-query]",
            path: "../CoCreate-modules/CoCreate-element-config",
            repo: "github.com/CoCreate-app/CoCreate-element-config.git"
        },
        validation: {
            import: "@cocreate/validation",
            selector: "[actions*='validate'], [required]",
            path: "../CoCreate-modules/CoCreate-validation",
            repo: "github.com/CoCreate-app/CoCreate-validation.git"
        },
        calculate: {
            import: "@cocreate/calculate",
            selector: "[calculate]",
            path: "../CoCreate-modules/CoCreate-calculate",
            repo: "github.com/CoCreate-app/CoCreate-calculate.git"
        },
        selection: {
            import: "@cocreate/selection",
            selector: "input, textarea, [contenteditable]",
            path: "../CoCreate-modules/CoCreate-selection",
            repo: "github.com/CoCreate-app/CoCreate-selection.git"
        },
        cursors: {
            import: "@cocreate/cursors",
            selector: "input, textarea, [contenteditable]",
            path: "../CoCreate-modules/CoCreate-cursors",
            repo: "github.com/CoCreate-app/CoCreate-cursors.git"
        },
        text: {
            import: "@cocreate/text",
            selector: "input, textarea, [contenteditable]",
            path: "../CoCreate-modules/CoCreate-text",
            repo: "github.com/CoCreate-app/CoCreate-text.git"
        },
        "rich-text": {
            import: "@cocreate/rich-text",
            selector: "[actions*='nodeName'], [actions*='cloneElement'], [actions*='deleteElement'], [node-name]",
            path: "../CoCreate-modules/CoCreate-rich-text",
            repo: "github.com/CoCreate-app/CoCreate-rich-text.git"
        },
        codearea: {
            import: "@cocreate/codearea",
            selector: "[type='code']",
            path: "../CoCreate-modules/CoCreate-codearea",
            repo: "github.com/CoCreate-app/CoCreate-codearea.git"
        },
        floatingLabel: {
            import: "@cocreate/floating-label",
            selector: "floating-label, .floating-label",
            path: "../CoCreate-modules/CoCreate-floating-label",
            repo: "github.com/CoCreate-app/CoCreate-floating-label.git"
        },
        clipboard: {
            import: "@cocreate/clipboard",
            selector: "[actions*='clipboard'], [clipboard-query]",
            path: "../CoCreate-modules/CoCreate-clipboard",
            repo: "github.com/CoCreate-app/CoCreate-clipboard.git"
        },
        print: {
            import: "@cocreate/print",
            selector: "[actions*='print'], [print-query]",
            path: "../CoCreate-modules/CoCreate-print",
            repo: "github.com/CoCreate-app/CoCreate-print.git"
        },
        fullscreen: {
            import: "@cocreate/fullscreen",
            selector: "[fullscreen]",
            path: "../CoCreate-modules/CoCreate-fullscreen",
            repo: "github.com/CoCreate-app/CoCreate-fullscreen.git"
        },
        modal: {
            import: "@cocreate/modal",
            selector: "[actions*='Modal']",
            path: "../CoCreate-modules/CoCreate-modal",
            repo: "github.com/CoCreate-app/CoCreate-modal.git"
        },
        parallax: {
            import: "@cocreate/parallax",
            selector: "[parallax-src]",
            path: "../CoCreate-modules/CoCreate-parallax",
            repo: "github.com/CoCreate-app/CoCreate-parallax.git"
        },
        progress: {
            import: "@cocreate/progress",
            selector: "[data-progress]",
            path: "../CoCreate-modules/CoCreate-progress",
            repo: "github.com/CoCreate-app/CoCreate-progress.git"
        },
        randomColor: {
            import: "@cocreate/random-color",
            selector: "[background-color]",
            path: "../CoCreate-modules/CoCreate-random-color",
            repo: "github.com/CoCreate-app/CoCreate-random-color.git"
        },
        socialShare: {
            import: "@cocreate/social-share",
            selector: "[share-network]",
            path: "../CoCreate-modules/CoCreate-social-share",
            repo: "github.com/CoCreate-app/CoCreate-social-share.git"
        },
        select: {
            import: "@cocreate/select",
            selector: "cocreate-select",
            path: "../CoCreate-modules/CoCreate-select",
            repo: "github.com/CoCreate-app/CoCreate-select.git"
        },
        toolbar: {
            import: "@cocreate/toolbar",
            selector: "[toolbar-query]",
            path: "../CoCreate-modules/CoCreate-toolbar",
            repo: "github.com/CoCreate-app/CoCreate-toolbar.git"
        },
        vdom: {
            import: "@cocreate/vdom",
            selector: "[vdom-query], [vdom-id]",
            path: "../CoCreate-modules/CoCreate-vdom",
            repo: "github.com/CoCreate-app/CoCreate-vdom.git"
        },
        notification: {
            import: "@cocreate/notification",
            selector: "[actions*='notification']",
            path: "../CoCreate-modules/CoCreate-notification",
            repo: "github.com/CoCreate-app/CoCreate-notification.git"
        },
        aos: {
            import: "@cocreate/aos",
            selector: "[data-aos]",
            path: "../CoCreate-plugins/CoCreate-aos",
            repo: "github.com/CoCreate-app/CoCreate-aos.git"
        },
        pickr: {
            import: "@cocreate/pickr",
            selector: ".color-picker",
            path: "../CoCreate-plugins/CoCreate-pickr",
            repo: "github.com/CoCreate-app/CoCreate-pickr.git"
        },
        marked: {
            import: "@cocreate/marked",
            selector: "[marked], [actions*='marked'], .markdown-body",
            path: "../CoCreate-plugins/CoCreate-marked",
            repo: "github.com/CoCreate-app/CoCreate-marked.git"
        },
        prism: {
            import: "@cocreate/prism",
            selector: "[class*='language-']",
            path: "../CoCreate-plugins/CoCreate-prism",
            repo: "github.com/CoCreate-app/CoCreate-prism.git"
        },
        "google-maps": {
            import: "@cocreate/google-maps",
            selector: "[google-maps]",
            path: "../CoCreate-plugins/CoCreate-google-maps",
            repo: "github.com/CoCreate-app/CoCreate-google-maps.git"
        },
        cli: {
            path: "../CoCreate-modules/CoCreate-cli",
            repo: "github.com/CoCreate-app/CoCreate-cli.git",
            exclude: ["git"]
        },
        docs: {
            path: "../CoCreate-modules/CoCreate-docs",
            repo: "github.com/CoCreate-app/CoCreate-docs.git"
        },
        "lazy-loader": {
            path: "../CoCreate-modules/CoCreate-lazy-loader",
            repo: "github.com/CoCreate-app/CoCreate-lazy-loader.git"
        },
        "overlay-scroll": {
            path: "../CoCreate-modules/CoCreate-overlay-scroll",
            repo: "github.com/CoCreate-app/CoCreate-overlay-scroll.git"
        },
        charts: {
            path: "../CoCreate-plugins/CoCreate-charts",
            repo: "github.com/CoCreate-app/CoCreate-charts.git"
        },
        croppie: {
            path: "../CoCreate-plugins/CoCreate-croppie",
            repo: "github.com/CoCreate-app/CoCreate-croppie.git"
        },
        domain: {
            path: "../CoCreate-plugins/CoCreate-domain",
            repo: "github.com/CoCreate-app/CoCreate-domain.git"
        },
        fabric: {
            path: "../CoCreate-plugins/CoCreate-fabric",
            repo: "github.com/CoCreate-app/CoCreate-fabric.git"
        },
        facebook: {
            path: "../CoCreate-plugins/CoCreate-facebook",
            repo: "github.com/CoCreate-app/CoCreate-facebook.git"
        },
        ffmpeg: {
            path: "../CoCreate-plugins/CoCreate-ffmpeg",
            repo: "github.com/CoCreate-app/CoCreate-ffmpeg.git",
            exclude: ["fs/webpack"]
        },
        fullcalendar: {
            path: "../CoCreate-plugins/CoCreate-fullcalendar",
            repo: "github.com/CoCreate-app/CoCreate-fullcalendar.git"
        },
        "google-auth": {
            path: "../CoCreate-plugins/CoCreate-google-auth",
            repo: "github.com/CoCreate-app/CoCreate-google-auth.git"
        },
        instagram: {
            path: "../CoCreate-plugins/CoCreate-instagram",
            repo: "github.com/CoCreate-app/CoCreate-instagram.git"
        },
        lighthouse: {
            path: "../CoCreate-plugins/CoCreate-lighthouse",
            repo: "github.com/CoCreate-app/CoCreate-lighthouse.git"
        },
        linkedin: {
            path: "../CoCreate-plugins/CoCreate-linkedin",
            repo: "github.com/CoCreate-app/CoCreate-linkedin.git"
        },
        openai: {
            path: "../CoCreate-plugins/CoCreate-openai",
            repo: "github.com/CoCreate-app/CoCreate-openai.git"
        },
        pinterest: {
            path: "../CoCreate-plugins/CoCreate-pinterest",
            repo: "github.com/CoCreate-app/CoCreate-pinterest.git"
        },
        plaid: {
            path: "../CoCreate-plugins/CoCreate-plaid",
            repo: "github.com/CoCreate-app/CoCreate-plaid.git"
        },
        rollup: {
            path: "../CoCreate-plugins/CoCreate-rollup",
            repo: "github.com/CoCreate-app/CoCreate-rollup.git"
        },
        sendgrid: {
            path: "../CoCreate-plugins/CoCreate-sendgrid",
            repo: "github.com/CoCreate-app/CoCreate-sendgrid.git"
        },
        shipengine: {
            path: "../CoCreate-plugins/CoCreate-shipengine",
            repo: "github.com/CoCreate-app/CoCreate-shipengine.git"
        },
        stripe: {
            path: "../CoCreate-plugins/CoCreate-stripe",
            repo: "github.com/CoCreate-app/CoCreate-stripe.git"
        },
        twilio: {
            path: "../CoCreate-plugins/CoCreate-twilio",
            repo: "github.com/CoCreate-app/CoCreate-twilio.git"
        },
        twitter: {
            path: "../CoCreate-plugins/CoCreate-twitter",
            repo: "github.com/CoCreate-app/CoCreate-twitter.git"
        },
        webpack: {
            path: "../CoCreate-plugins/CoCreate-webpack",
            repo: "github.com/CoCreate-app/CoCreate-webpack.git"
        }
    },

    /**
     * @namespace plugins
     * @description External plugins (CDN links, styling) and associated configurations.
     * Used to define external dependencies and their JS and CSS sources.
     * * IMPORTANT: The key for each plugin (e.g., 'Toastify', 'Quill') MUST be the exact 
     * global reference name used by the plugin. The system uses this exact key to dynamically 
     * access the object and initialize the plugin once fetched. This allows any plugin to be 
     * seamlessly whitelisted, configured, and initialized dynamically via HTML attributes or inline scripts.
     */
    plugins: {
        Toastify: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/toastify-js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"]
        },
        Choices: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"]
        },
        flatpickr: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/flatpickr", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"]
        },
        Quill: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.min.js", crossOrigin: "anonymous" }],
            css: [
                "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.core.css",
                "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css",
                "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.bubble.css"
            ]
        },
        ClassicEditor: {
            js: [{ src: "https://cdn.ckeditor.com/ckeditor5/41.2.0/classic/ckeditor.js", crossOrigin: "anonymous" }]
        },
        Dropzone: {
            js: [{ src: "https://unpkg.com/dropzone@5/dist/min/dropzone.min.js", crossOrigin: "anonymous" }],
            css: ["https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"]
        },
        SimpleBar: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css"]
        },
        GLightbox: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"]
        },
        FgEmojiPicker: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/fg-emoji-picker/fgEmojiPicker.js", crossOrigin: "anonymous" }]
        },
        bootstrap: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", crossOrigin: "anonymous" }]
        },
        Waves: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/node-waves/dist/waves.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/node-waves/dist/waves.min.css"]
        },
        feather: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js", crossOrigin: "anonymous" }]
        },
        ApexCharts: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/apexcharts", crossOrigin: "anonymous" }]
        },
        jsVectorMap: {
            js: [
                { src: "https://cdn.jsdelivr.net/npm/jsvectormap", crossOrigin: "anonymous" },
                { src: "https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js", crossOrigin: "anonymous" }
            ],
            css: ["https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css"]
        },
        Swiper: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]
        },
        List: {
            js: [
                { src: "https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js", crossOrigin: "anonymous" },
                { src: "https://cdnjs.cloudflare.com/ajax/libs/list.pagination.js/0.1.1/list.pagination.min.js", crossOrigin: "anonymous" }
            ]
        },
        Swal: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/sweetalert2@11", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"]
        },
        FullCalendar: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js", crossOrigin: "anonymous" }]
        },
        Cleave: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/cleave.js/dist/cleave.min.js", crossOrigin: "anonymous" }]
        },
        noUiSlider: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/nouislider/dist/nouislider.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/nouislider/dist/nouislider.min.css"]
        },
        wNumb: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/wnumb/wNumb.min.js", crossOrigin: "anonymous" }]
        },
        Grid: {
            js: [
                { src: "https://unpkg.com/gridjs/dist/gridjs.umd.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/gridjs/plugins/selection/dist/selection.umd.js", crossOrigin: "anonymous" }
            ],
            css: ["https://unpkg.com/gridjs/dist/theme/mermaid.min.css"]
        },
        FilePond: {
            js: [
                { src: "https://unpkg.com/filepond/dist/filepond.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.min.js", crossOrigin: "anonymous" },
                { src: "https://unpkg.com/filepond-plugin-file-encode/dist/filepond-plugin-file-encode.min.js", crossOrigin: "anonymous" }
            ],
            css: [
                "https://unpkg.com/filepond/dist/filepond.min.css",
                "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
            ]
        },
        Prism: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/prismjs/prism.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css"]
        },
        Isotope: {
            js: [{ src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js", crossOrigin: "anonymous" }]
        },
        particlesJS: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js", crossOrigin: "anonymous" }]
        },
        dragula: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/dragula/dist/dragula.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/dragula/dist/dragula.min.css"]
        },
        DomAutoscroller: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/dom-autoscroller", crossOrigin: "anonymous" }]
        },
        Card: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/card/dist/card.js", crossOrigin: "anonymous" }]
        },
        Chart: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/chart.js", crossOrigin: "anonymous" }]
        },
        echarts: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js", crossOrigin: "anonymous" }]
        },
        Multi: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/multi.js/dist/multi.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/multi.js/dist/multi.min.css"]
        },
        autoComplete: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/css/autoComplete.01.min.css"]
        },
        Pickr: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css"]
        },
        Shepherd: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/shepherd.js/dist/js/shepherd.min.js", crossOrigin: "anonymous" }],
            css: ["https://cdn.jsdelivr.net/npm/shepherd.js/dist/css/shepherd.css"]
        },
        GMaps: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/gmaps/gmaps.min.js", crossOrigin: "anonymous" }]
        },
        L: {
            js: [{ src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", crossOrigin: "anonymous" }],
            css: ["https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"]
        },
        Masonry: {
            js: [{ src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js", crossOrigin: "anonymous" }]
        },
        raterJs: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/rater-js/index.js", crossOrigin: "anonymous" }]
        },
        Anime: {
            js: [{ src: "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js", crossOrigin: "anonymous" }]
        }
    },

    /**
     * @namespace projects
     * @description Standalone apps, environments, or platforms integrated with the Poly Repo CLI.
     * * The Poly Repo CLI (initiated via the 'coc' command) merges the repo details from 'projects' and 'modules' 
     * (excluding 'plugins') to execute cross-repository actions seamlessly.
     * * @property {string} path - Local relative workspace path. Defines the workspace tree structure, determining where the repository is cloned in a new environment so the CLI can locate it during operations.
     * @property {string} repo - Git repository URL.
     * @property {string[]} [exclude] - Array of strings used to exclude the project from specific CLI commands (e.g., ["git"] or ["fs/webpack"]).
     */
    projects: {
        CoCreateJS: {
            path: "../CoCreateJS",
            repo: "github.com/CoCreate-app/CoCreateJS.git",
            exclude: ["git"]
        },
        admin: {
            path: "../CoCreate-admin",
            repo: "github.com/CoCreate-app/CoCreate-admin.git",
            exclude: ["git"]
        },
        website: {
            path: "../CoCreate-website",
            repo: "github.com/CoCreate-app/CoCreate-website.git",
            exclude: ["git"]
        },
        builder: {
            path: "../CoCreate-apps/CoCreate-builder",
            repo: "github.com/CoCreate-app/CoCreate-builder.git"
        },
        dashboard: {
            path: "../CoCreate-apps/CoCreate-dashboard",
            repo: "github.com/CoCreate-app/CoCreate-dashboard.git"
        },
        datatable: {
            path: "../CoCreate-apps/CoCreate-datatable",
            repo: "github.com/CoCreate-app/CoCreate-datatable.git"
        },
        kanban: {
            path: "../CoCreate-apps/CoCreate-kanban",
            repo: "github.com/CoCreate-app/CoCreate-kanban.git"
        },
        sandbox: {
            path: "../CoCreate-apps/CoCreate-sandbox",
            repo: "github.com/CoCreate-app/CoCreate-sandbox.git"
        }
    }
};