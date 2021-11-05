const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
 };
  
 const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
 };
  
 const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
 };
  
 const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
 };
  
function buyApparel(money, objItem, callback) {
  
  let uang = 150000
  money = 150000

  setTimeout(function() {
    console.log(`saya membawa uang sebesar Rp.${money}`)
    console.log(`saya ingin membeli Baju`)
    console.log(`dengan harga Rp.${clothes.price}`);
    console.log(`dan waktu yang dibutuhkan adalah 3 detik` + '\n')

    setTimeout(function() {
      uang = uang - clothes.price
      console.log(`saya membawa uang sebesar Rp.${uang}`)
      console.log(`saya ingin membeli Celana`)
      console.log(`dengan harga Rp.${pants.price}`);
      console.log(`dan waktu yang dibutuhkan adalah 7 detik` + '\n')

      setTimeout(function() {
        uang = uang - pants.price
        console.log(`saya membawa uang sebesar Rp.${uang}`)
        console.log(`saya ingin membeli Topi`)
        console.log(`dengan harga Rp.${hat.price}`);
        console.log(`dan waktu yang dibutuhkan adalah 2 detik` + '\n')

        setTimeout(function() {
          uang = uang - hat.price
          console.log(`saya membawa uang sebesar Rp.${uang}`)
          console.log(`saya ingin membeli Sepatu`)
          console.log(`dengan harga Rp.${shoes.price}`);
          console.log(`dan waktu yang dibutuhkan adalah 10 detik` + '\n')

          uang = uang - shoes.price
          console.log(`sisa kembaliannya adalah Rp.${uang}`)

        }, shoes.time);
      }, hat.time);
    }, pants.time);
  }, clothes.time);
}
console.log(buyApparel(clothes, pants, hat, shoes))