/*global window*/
import CoCreateSocket from "@cocreate/socket"
import Core from "./core.js"
import * as utils from "@cocreate/utils"
import Message from "@cocreate/message"
import CRUD from "@cocreate/crud"

let socket = new CoCreateSocket('ws');
// let socketApi = new CoCreateSocket('api');

let core = Core(socket)
let crud = CRUD(socket)
let message = Message(socket)

core.init(window.config.host ? window.config.host : 'server.cocreate.app');

function addComponent(key, component) {
    this[key] = component;
}

function removeComponent(key) {
    if (this[key]) {

    }
}

export {
    core,
    socket,
    crud,
    utils,
    message,
    addComponent,
    removeComponent
};
