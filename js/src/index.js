

const WeexCamera = {
  show() {
      alert("module WeexCamera is created sucessfully ")
  }
};


var meta = {
   WeexCamera: [{
    name: 'show',
    args: []
  }]
};



if(window.Vue) {
  weex.registerModule('WeexCamera', WeexCamera);
}

function init(weex) {
  weex.registerApiModule('WeexCamera', WeexCamera, meta);
}
module.exports = {
  init:init
};
