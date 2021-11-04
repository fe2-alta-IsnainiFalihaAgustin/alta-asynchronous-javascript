function jajanBoba(uang, callback) {
  
  const boba = { boba : 5000 };
  sisaUang = uang - boba.boba;

  setTimeout(function() {
    if (uang >= boba.boba) {
      console.log(`kamu jajan boba dengan harga Rp.${boba.boba}`);
      console.log(`sisa uang kamu Rp.${sisaUang}`);
    } else {
      console.log(`maaf uang kamu belum cukup untuk membeli ${Object.keys(boba)}. sisa uang kamu sebesar Rp.${uang}`);
    }
  }, 5000);
  callback(sisaUang);
}
 
function jajanSeblak(uang) {   
  const seblak = { seblak : 8000 };
  let sisaUang = uang - seblak.seblak;

  setTimeout(function() {

    if (uang >= seblak.seblak) {
      console.log(`kamu jajan seblak dengan harga Rp.${seblak.seblak}`);
      console.log(`sisa uang kamu Rp.${sisaUang}`);
    } else {
      console.log(`maaf uang kamu belum cukup untuk membeli ${Object.keys(seblak)}. sisa uang kamu sebesar Rp.${uang}`)
    }
  }, 9000);
  
}
 
console.log(jajanBoba(20000, jajanSeblak));