// document.getElementById('btn').addEventListener('click',function(){
// 	let inp = document.getElementById('inp')

// 	console.log(inp.value * 21/100)


// })




// let a = [1,3,4,6]


// a.splice(a.length/2,0,'kiwi')

// console.log(a)


// let s= 0
// let p = 0
// let t = []
// p=+prompt('Greq tiv')




// for (let i = p; i > 0; i--) {
// 	t.push(i)
	
// }
// console.log(t)

// t.forEach(function(element,index){
// 	s+= element+index


// })
// console.log(s)

let users = [
{link:'https://www.mobilecentre.am/img/prodpic/114226.jpg',price:'699$',name:'iphone11'},
{link:'https://www.mobilecentre.am/img/prodpic/c524e4f4405350eb16bb131.png',price:'199$',name:'iphone13'},
{link:'https://www.mobilecentre.am/img/prodpic/7c8c44607f1326ba149apro2.png',price:'299$',name:'iphone13 pro'},
{link:'https://www.mobilecentre.am/img/prodpic/27ba3cd7628f9162e9faWWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a.jpg',price:'399$',name:'iphone14'},
{link:'https://www.mobilecentre.am/img/prodpic/101691.jpg',price:'599$',name:'iphone8'},
{link:'https://www.mobilecentre.am/img/prodpic/102889.jpg',price:'799$',name:'iphoneXR'},
{link:'https://www.mobilecentre.am/img/prodpic/d4041ee6de32dfb530fd%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__53_.png',price:'999$',name:'samsung03'},
{link:'https://www.mobilecentre.am/img/prodpic/291bde38502b7bef009a%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_59.png',price:'99$',name:'samsung21'},
{link:'https://www.mobilecentre.am/img/prodpic/7fadb003e93ed0693b07%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__18_.png',price:'1999$',name:'samsung22'},
{link:'https://www.mobilecentre.am/img/prodpic/e0ebf8158c71d2dc9ae0%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__51_.png',price:'2999$',name:'xiaomiF4'},

]
// let user = users.find((item) => item.id > 1 && item.age > 20)
// console.log(user.name)
// console.log(user)



for (let i = 0; i < users.length; i++) {
	let div = document.createElement('div')
	div.className = 'div'
	div.style.textAlign = 'center'
	let img1 = document.createElement('img')
	img1.className = 'img1'
	img1.src=users[i].link
	div.append(img1)
	let p1 = document.createElement('p')
	p1.innerHTML = users[i].name
	div.append(p1)
	let button1 = document.createElement('button')
	button1.className = 'button1'
	button1.innerHTML = users[i].price
	div.append(button1)
	 document.getElementById('ldiv').append(div)
	 console.log(ldiv)
	}
	
