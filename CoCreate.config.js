module.exports = {
    "config": {
        "apiKey": "2061acef-0451-4545-f754-60cf8160",
        "organization_id": "5ff747727005da1c272740ab",
        "host": "general.cocreate.app"
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
                "domains": [
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
                "input-demo": "{{./demo/elements/input.html}}"
            }
        },
        {
            "entry": "./demo/elements/textarea.html",
            "collection": "demos",
            "document": {
                "_id": "619bd887a8b6b4001a9e05af",
                "textarea-demo": "{{./demo/elements/textarea.html}}"
            }
        }
    ]
}