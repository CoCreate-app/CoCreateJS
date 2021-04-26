module.exports = {
    config: {
        apiKey: "c2b08663-06e3-440c-ef6f-13978b42883a",
        securityKey: "f26baf68-e3a9-45fc-effe-502e47116265",
        organization_Id: "5de0387b12e200ea63204d6c",
        host: "server.cocreate.app:8088"
    },
 
    sources: [
        // {
        //     path: "./docs/index.html",
        //     collection: "files",
        //     document_id: "602726f95e697f4f26a98a57",
        //     key: "html",
        //     data:{
        //         name: "CoCreateJS Doc",
        //     }
        // },
        {
            path: "./docs/elements.html",
            collection: "files",
            document_id: "6084db6968177d4c2f556fd7",
            key: "html",
            data:{
                name: "CoCreateJS Elements Doc",
            }
        },

        // {
        //     path: "./docs/menu.html",
        //     collection: "components",
        //     document_id: "603717b07de7fb350ae9fec8",
        //     key: "html",
        //     data:{
        //         name: "CoCreateJS Doc Menu",
        //     }
        // },
        {
            path: "./docs/navbar.html",
            collection: "components",
            document_id: "60395ef42b3ac232657040fd",
            key: "html",
            data:{
                name: "CoCreateJS Doc Navbar",
            }
        },
        // {
        //     path: "./docs/elements.html",
        //     collection: "files",
        //     document_id: "6084db6968177d4c2f556fd7",
        //     key: "html",
        //     data:{
        //         name: "CoCreateJS Elements Doc",
        //     }
        // },
    ],
   
    crud: [{
            collection: "routes",
            document_id: "602726f95e697f4f26a98a56",
            data:{
                collection: "files",
                document_id: "602726f95e697f4f26a98a57",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/docs",
            }
        },
        {
            collection: "routes",
            document_id: "6084db6968177d4c2f556fd6",
            data:{
                collection: "files",
                document_id: "6084db6968177d4c2f556fd7",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/docs/elements",
            }
        }
    ],
    
    extract: {
        directory: "./src/",
        extensions: [
            "js",
            "css",
            "html"
        ],
        ignores: [
            "node_modules",
            "vendor",
            "bower_components",
            "archive"
        ],
    }
}
