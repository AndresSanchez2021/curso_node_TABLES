const fs = require('fs');
const colors = require('colors');

const crearArchivo =async(base,list=false, amount=10)=>{

try {
  console.log("-----------------------------------".blue)
  console.log(`----------Tabla del ${base}-------------`.bgBlue)
  console.log("-----------------------------------".blue)
  let result = "";
  for(var i = 1; i <=amount; i++){
    result+=`${base+' x '+i} ${'='}  ${base*i}\n`
    if(list)
      console.log(`${base+' x '+i} ${'='.green}  ${base*i}`)
  }
  const nameFile = `./files/table-${base}.txt`
  fs.writeFileSync(nameFile, result, (err)=>{
    if(err) throw err;
    console.log("Tabla creada exitosamente")
  })
  return nameFile
 }catch(err){
  throw err;
 }

}

module.exports = {
  crearArchivo
}