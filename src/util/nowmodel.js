
  var nowModel = {}
  
  function modStatus(name) {
    if(name){
      return nowModel[name]
    }
    return nowModel
  }
  function add(name, mod) {
    if(nowModel[name]){
      delete nowModel[name]
    }
    nowModel[name] = mod
  }
  function sub(name) {
    delete nowModel[name]
  }

  window.NowMOD = {
    add: add,
    sub: sub,
    get: modStatus
  }
