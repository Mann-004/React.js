import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Tailwind and Props
    </h1>
    <Card nftname="Bored ape nft accidental" nftId="004" price="$56.5"/>
    <Card/>
    </>
  )
}

export default App
