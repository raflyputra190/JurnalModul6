import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


function App () {
const nama= 'kantin rani'
const sapa = 'selamat pagi'
const saldo = 'saldo awal kartu kantin: Rp'
const n = 43000
return (
  <>
    <h1>
      {nama}
    </h1>
    <h3>
      {sapa}
    </h3>
    <h3>
      {saldo + n}
    </h3>
    <button>bayar</button>
    <disabled>bayar</disabled>
  </>
)
}
export default App