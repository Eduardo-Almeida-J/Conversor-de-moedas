const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")

   const dolarToday = 5.76
   const euroToday = 5.95
   const libraToday = 7.22
   const bitcoinToday = 96.136

   if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   }

   if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   }

   if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
   }

   if (currencySelect.value == "bitcoin") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcoinToday)
   }

   currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-be", {
      style: "currency",
      currency: "BRL"

   }).format(inputCurrencyValue)
}

function changeCurrency(){
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currancy-img")

   if(currencySelect.value == "dolar"){
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src = "./assents/estados-unidos (1) 1.png"
   }
   
   if(currencySelect.value == "euro"){
      currencyName.innerHTML = "euro"
      currencyImage.src = "./assents/Euro.png"
   }

   if(currencySelect.value == "libra"){
      currencyName.innerHTML = "libra"
      currencyImage.src = "./assents/libra 1.png"
   }

   if(currencySelect.value == "bitcoin"){
      currencyName.innerHTML = "bitcoin"
      currencyImage.src = "./assents/bitcoin 1.png"
   }
   
   convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)