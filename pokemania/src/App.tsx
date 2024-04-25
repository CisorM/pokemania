import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index"

function App() {

  return (
    <main className="w-[95%] m-auto">
      <Header />
      <section className="w-[95%] m-auto">
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default App
