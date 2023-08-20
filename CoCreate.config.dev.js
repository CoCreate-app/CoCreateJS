module.exports = {
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
                "directory": "/latest/{{directory}}",
                "path": "{{path}}",
                "content-type": "{{content-type}}",
                "public": "true"
            }
        }
    ],
};