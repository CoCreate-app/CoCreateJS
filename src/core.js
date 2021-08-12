// ***********   define variables end ***************** /// 
import CoCreateSocket from "@cocreate/socket-client"
let socket = window.CoCreateCrudSocket;

if (!socket) {
  socket = new CoCreateSocket('ws');
  window.CoCreateCrudSocket = socket;
}



const CoCreateCore = {
  socketInitFuncs: [],
  moduleSelectors: [],
  socket: null,
  host: 'server.cocreate.app',

  setSocket: function(socket) {
    this.socket = socket;
  },


  init: function(host, namespace) {
    if (host) {
      this.host = host;
    }

    this.__setConfig()
    this.createGeneralSocket(host, namespace || window.config.organization_Id);
    this.initSocketListener();
    this.createUserSocket(host);
  },

  __setConfig: function() {
    let config;
    if (!window.config) {
      config = {
        organization_Id: window.localStorage.getItem('organization_id'),
        apiKey: window.localStorage.getItem('apiKey'),
        host: window.localStorage.getItem('host')
      }

      if (!config) {
        console.log('missing config')
      }else
      window.config = config;
    }
  },

  initSocketListener: function() {
    const self = this;

    this.socket.listen('connect', function(data, room) {

      if (room == self.socket.getGlobalScope()) {
        self.socketInitFuncs.forEach((func) => {
          func.initFunc.call(func.instance);
        })
      }
    })

    this.socket.listen('downloadFileInfo', function(data) {
      self.socket.saveFileName = data.file_name;
      self.saveFile(data);
    })

  },
  
	saveFile: function(data) {
		if (window.document) {
			const file_name = data.file_name || 'downloadFile';
			const ndata = data.binaryData.data;
			var a = document.createElement("a");
      a.style = "display: none";
	    let blob = new Blob([ndata], { type: "application/json" });	
      let url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = file_name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
			a.remove()		
      this.saveFileName = ''
		}
	},


  createUserSocket: function(host) {
    var user_id = window.localStorage.getItem('user_id');
    if (user_id) {
      this.socket.create({
        namespace: 'users',
        room: user_id,
        host: host
      })
    }
  },

  createGeneralSocket: function(host, namespace) {
    if (namespace) {
      this.socket.create({
        namespace: namespace,
        room: null,
        host: host
      });
      this.socket.setGlobalScope(namespace);
    }
    else {
      this.socket.create({
        namespace: null,
        room: null,
        host: host
      });
    }
  },

  registerInit: function(initFunc, instance) {
    this.socketInitFuncs.push({
      initFunc,
      instance: instance || window
    });
  },

  createSocket: function(config) {
    this.socket.create(config);
  },

  destroySocket: function(config) {
    const {
      namespace,
      room
    } = config;
    const key = this.socket.getKey(namespace, room);
    let socket = this.socket.sockets.get(key);

    if (!socket) {
      return
    }
    this.socket.destroy(socket, key);
  },
}
CoCreateCore.__setConfig()
CoCreateCore.setSocket(socket);
CoCreateCore.init(window.config.host ? window.config.host : window.location.hostname);

export default CoCreateCore;
