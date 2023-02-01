import { useState } from 'react'
import Carousel from './components/Carousel'
import Pienza1 from './assets/Pienza-1.jpg'
import Pienza2 from './assets/Pienza-2.jpg'
import Pienza3 from './assets/Pienza-3.jpg'
import Pienza4 from './assets/Pienza-4.jpg'
import Pienza5 from './assets/Pienza-5.jpg'
import demo from './assets/demo.mp4'


const slides = [
  Pienza1,
  Pienza2,
  Pienza3,
  Pienza4,
  Pienza5,
]


export default function App() {
  return (
    <main className='App'>
      <div className='max-w-lg mx-4'>
        <Carousel >
          {
            [...slides.map((s) => (
              <img src={s}/>
            )),
              <video src={demo} autoPlay muted loop />
          ]}
        </Carousel>
      </div>
    </main>
  )
        }