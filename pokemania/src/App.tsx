import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/index";
import { Suspense, useEffect, useState } from "react";
import { BarsTransition } from "./components/ui/SlideTransition";
export function App() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 350);
  }, [location]);

  return (
    <main className="w-[95%] m-auto">
      <BarsTransition animate={animate} />
      <Header />
      <section className="w-[95%] m-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
