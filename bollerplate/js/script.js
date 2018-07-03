console.log('you are at ' + window.location);

//document.getElementsByTagName('div')
//document.getElementsByClassName('myClassName')
//document.getElementsById('myIdName')
//document.querySelector('anySelector')
//document.querySelectorAll('allSelector')

const allH1 = document.querySelectorAll('h1');
const allP = document.querySelectorAll('p');
const allDiv = document.querySelectorAll('div');

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

for(let i = 0; i<allH1.length; i++) {
	allH1[i].innerHTML = crypto[i]['name']
	allP[i].innerHTML = crypto[i]['price']
	allDiv[i].style.width = crypto[i]['price'] + 'px'
}