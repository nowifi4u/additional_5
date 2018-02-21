module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false
  let configs = bracketsConfig.length
  
  let i = 0
  let cc = 0
  while (str.length -1 !== i){
    for (let j = 0; j < configs; j++){
      if (str.length === 0) return true
      if (i === -1) i = 0
      if (cc === configs){
        i++
        cc = 0
      }
      if (str[i] === bracketsConfig[j][0] && str[i+1] === bracketsConfig[j][1]){
        str = str.replace(bracketsConfig[j][0]+bracketsConfig[j][1],'')
        i--
        cc = 0
      }
      else cc++
    }
  }
  if (str.length === 0) return true
  else return false
}
