import './style.css'
const arraycartas = [
  { id: 1, color: 'red' },
  { id: 2, color: 'black' },
  { id: 3, color: 'pink' },
  { id: 4, color: 'yellow' },
  { id: 5, color: 'orange' },
  { id: 6, color: 'red' },
  { id: 7, color: 'black' },
  { id: 8, color: 'pink' },
  { id: 9, color: 'yellow' },
  { id: 10, color: 'orange' }
]
arraycartas.sort(() => Math.random() - Math.random())

let count = 0
let carta1
let carta2
let score = 0
const divapp = document.querySelector('#app')
const scorehtml = document.createElement('h3')
scorehtml.textContent = score
document.body.insertBefore(scorehtml, divapp)
const resetcartas = (cartageneral) => {
  cartageneral.nodohtml.style.backgroundColor = '#e600a9'

  cartageneral.nodohtml.style.backgroundImage =
    "url('https://www.transparenttextures.com/patterns/black-scales.png')"
}
const resetvalues = () => {
  count = 0
  carta1 = undefined
  carta2 = undefined
  console.log(score)
}
const compare = () => {
  if (carta1.datosdecarta.color === carta2.datosdecarta.color) {
    console.log('son iguales')
    score++
    resetvalues()
  } else {
    score--
    //aqui dar vuelta
    //cambiar backgroundcolor
    setTimeout(() => {
      resetcartas(carta1)
      resetcartas(carta2)
      resetvalues()
    }, 1000)
  }
  console.log('son differentes')

  scorehtml.textContent = score

  console.log(score)
}
const seleccionar = (divCartanodohtml, datosdecarta) => {
  if (count < 2) {
    count++

    divCartanodohtml.style.backgroundColor = datosdecarta.color
    divCartanodohtml.style.backgroundImage = 'none'
  }
  if (count == 1) {
    carta1 = {
      nodohtml: divCartanodohtml,
      datosdecarta: datosdecarta
    }
    console.log('selected carta', carta1)
  }
  if (count == 2) {
    carta2 = {
      nodohtml: divCartanodohtml,
      datosdecarta: datosdecarta
    }
    console.log('selected second carta', carta2)
    compare()
  }
}

arraycartas.forEach((datosdecarta) => {
  const divCartanodohtml = document.createElement('div')

  divCartanodohtml.className = 'carta'
  divCartanodohtml.addEventListener('click', () =>
    seleccionar(divCartanodohtml, datosdecarta)
  )
  divapp.appendChild(divCartanodohtml)
})
