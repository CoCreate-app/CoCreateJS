module.exports = {
    "config": {
        "organization_id": "",
        "key": "",
        "host": ""
    },
    "directories": [
        {
            "entry": "./docs",
            "exclude": [
                "demo"
            ],
            "collection": "files",
            "document": {
                "name": "{{name}}",
                "src": "{{source}}",
                "hosts": [
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
            "collection": "demos",
            "document": {
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
    ]
}