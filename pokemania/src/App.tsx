import { Outlet, useLocation } from "react-router-dom"
import { Header, Footer } from "./components/index"
import { useEffect, useState } from "react"
import { BarsTransition } from './components/ui/SlideTransition';
import { PokemonProvider } from "./context/PokedexContext";

export function App() {
  const location = useLocation()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 350) 
  }, [location])

  return (
    <PokemonProvider>
      <main className="w-[95%] m-auto">
        <BarsTransition animate={animate} />
        <Header />
        <section className="w-[95%] m-auto">
          <Outlet />
        </section>
        <Footer />
      </main>
    </PokemonProvider>
  )
}

