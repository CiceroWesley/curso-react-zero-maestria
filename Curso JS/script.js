// // 3 filtr

// const arr = [1,2,4,7,5]
// // o filter não modifica a variavel inicial
// //o n vai andar em todos os elementos de ar
// const hightArr = arr.filter((n)=>{
//   if(n >=3){
//     return n
//   }
// })

// console.log(arr)
// console.log(hightArr)

// const users = [
// {name: 'Pedro',avaliable: true},
// {name: 'Mateus',avaliable: false},
// {name: 'Lucas',avaliable: true},
// {name: 'João',avaliable: false}]

// //filtar
// //como é so um retorno ele pode ser omitido e colocado em apenas uma linha
// const avaliableUsers = users.filter((user)=> user.avaliable)
// const notAvaliableUsers = users.filter((user) => !user.avaliable)

// console.log(avaliableUsers)
// console.log(notAvaliableUsers)


//4 map
//modificar elementos do array

// const products = [
//   {name: 'Blusa', price: 50.55, category: 'Roupas'},
//   {name: 'Bule', price: 15.00, category: 'Cozinha'},
//   {name: 'Short', price: 37.99, category: 'Roupas'},
//   {name: 'Panela', price: 25.75, category: 'Cozinha'},
// ]

// products.map((product)=>{
//   if(product.category == 'Cozinha'){
//     product.onSale = true
//   }
// })

// console.log(products)


// // 5 template literals
// // colocar variáveis entre texto
// //crases

// const userName = 'Wesley'
// const age = 22

// //com template literal
// console.log(`O nome do usuário é ${userName} e possui idade de ${age} anos.`)
// //forma clássica
// console.log('O nome do usuário é ' + userName + ' e possui idade de ' + age + ' anos.')

// // 6 destructuring
// //para arrays
// const fruits = ['Maça','Mamão','Banana']
// //colchetes
// const [fruta1, fruta2, fruta3] = fruits

// console.log(fruta1)
// console.log(fruta2)
// console.log(fruta3)

// // para objeto

// const productDetails = {
//   name: 'Teclado',
//   price: 50.00,
//   category: 'Periféricos',
//   color: 'Preta'
// }

// //se eu quiser colocar outro nome para a varíavel eu colocar o atributo : variavel
// //se não, coloco apenas o nome do atributo
// //chaves
// const {name: productName, price, category, color: productColor} = productDetails

// console.log(`O nome do produto é ${productName}, custa R$ ${price}, é da categoria ${category} e possui cor ${productColor}`)


// // 7 spread operator
// //para arrays
// const a1 = [4,5,6]
// const a2 = [1,2,3]
// //o spread é os ... junta um array em outro. Concatena um em outro
// const a3 = [...a1,...a2]
// console.log(a3)

// //para objetcs
// //atributos como objetos separados
// const carName = {name: 'Onix'}
// const carBrand = {brand: 'CV'}
// const otherInfos = {km: 10000, price: 45000}
// //jutando com o ... spread os atributos, formando apenas um objeto. Os nomes do atributos ficam o mesmo
// const car = {...carName,...carBrand,...otherInfos, year: 2016}

// console.log(car)

//8 classes
//declaração de classe
class Product {
  constructor(name,price){
    this.name = name
    this.price = price
  }
  //método
  productWithDiscount(discount){
    return this.price * ((100 - discount) / 100)
  }
}
//instanciando objeto
const shirt = new Product('Camila gola v',25)

//acessando atributos e métodos
console.log(shirt.name)
console.log(shirt.productWithDiscount(50))
console.log(shirt.productWithDiscount(10))

const tenis = new Product('Tênis branco', 75)

console.log(tenis.price)

// 9 herança
//herda com o extends
class ProdutWithAttributes extends Product {
  constructor(name,price,colors){
    //usa o super como no Java para usar os atributos da classe pai e não recria-los
    super(name,price)
    //novo atributo
    this.colors = colors
  }
  showColors(){
    console.log('As cores são:')
    this.colors.forEach((color)=>{
      console.log(color)
    })
  }
}

const hat = new ProdutWithAttributes('Chapeu', 42, ['Preto','Branco','Palha'])

console.log(hat.name)
console.log(hat.price)
console.log(hat.productWithDiscount(50))
hat.showColors()

