define([], function () {
  // var glob_hash = '';
  
  function isNowPage(param, content) {
    if(!content){
      if(param == NowMOD.get('glob_hash')){
        return false
      }else{
        // glob_hash = param
        NowMOD.add('glob_hash', param)
        return true
      }
    } else {
      if(param == NowMOD.get('glob_nowpage')){
        return false
      }else{
        // glob_hash = param
        NowMOD.add('glob_nowpage', param)
        return true
      }
    }
    
  }
  return isNowPage
})