// ***********   define variables end ***************** /// 
import CoCreateSocket from "@cocreate/socket-client"

let socket = window.CoCreateCrudSocket;

if (!socket) {
  socket = new CoCreateSocket('ws');
  window.CoCreateCrudSocket = socket;
}

// let socket = new CoCreateSocket('ws');

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
    this.createGeneralSocket(host, namespace || config.organization_Id);
    this.initSocketListener();
    this.createUserSocket(host);
  },
  
  __setConfig: function() {
		let orgId = window.localStorage.getItem('organization_id');
		let securityKey = window.localStorage.getItem('securityKey');
		let apiKey = window.localStorage.getItem('apiKey');
		
		if (orgId)        config['organization_Id'] = orgId
		if (apiKey)       config['apiKey'] = apiKey
		if (securityKey)  config['securityKey'] = securityKey;
  },
  
  initSocketListener: function() {
    const self = this;
    
    this.socket.listen('connect', function (data, room) {
      
      if (room == self.socket.getGlobalScope()) {
        self.socketInitFuncs.forEach((func) => {
          func.initFunc.call(func.instance);
        })
      }
    })
    
    this.socket.listen('downloadFileInfo', function(data) {
      self.socket.saveFileName = data.file_name;
    })
    
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
    } else {
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
      instance : instance || window
    });
  },
  // registerSelector: function(selector) {
  //   if (this.moduleSelectors.indexOf(selector) === -1) {
  //     this.moduleSelectors.push(selector);
  //   }
  // },
  
  // getSelectors: function(selector) {
  //   return this.moduleSelectors.join(",");
  // },

  // listenMessage: function(message, fun) {
  //   this.socket.listen(message, fun);
  // },
 
 createSocket: function(config) {
   this.socket.create(config);
 },
 
 destroySocket: function(config) {
   const {namespace, room} = config;
   const key = this.socket.getKey(namespace, room);
   let socket = this.socket.sockets.get(key);
   
   if (!socket) {
     return
   }
   this.socket.destroy(socket, key);
 },
}

CoCreateCore.setSocket(socket);
CoCreateCore.init(window.config.host ? window.config.host : 'server.cocreate.app');

export default CoCreateCore;


