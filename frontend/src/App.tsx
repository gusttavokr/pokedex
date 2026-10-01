// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import logoPokemon from './assets/Pokemon-Logo.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <main className='bg-red-800 text-white h-screen p-10 flex flex-col items-center'>
      {/* <img src={logoPokemon} className='max-w-100'></img>
      <h1 className='text-5xl font-bold text-center'>Pokédex</h1> */}

      <header className='flex w-full justify-between items-start'>
        <div className='w-full flex items-start gap-10'>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-blue-500 w-25 h-25 rounded-full absolute'></div>
            <div className='bg-white w-30 h-30 rounded-full'></div>
          </div>
          <div className='flex gap-5'>
            <div className='flex flex-col items-center justify-center'>
              {/* <div className='bg-blue-500 w-35 h-35 rounded-full absolute'></div> */}
              <div className='bg-red-500 w-10 h-10 rounded-full absolute'></div>
              <div className='bg-red-900 w-15 h-15 rounded-full'></div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              {/* <div className='bg-blue-500 w-35 h-35 rounded-full absolute'></div> */}
              <div className='bg-yellow-500 w-10 h-10 rounded-full absolute'></div>
              <div className='bg-yellow-900 w-15 h-15 rounded-full'></div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              {/* <div className='bg-blue-500 w-35 h-35 rounded-full absolute'></div> */}
              <div className='bg-green-500 w-10 h-10 rounded-full absolute'></div>
              <div className='bg-green-900 w-15 h-15 rounded-full'></div>
            </div>
          </div>
        </div>

        <img src={logoPokemon} className='max-w-50'></img>
      </header>

      
    </main>

      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
