import Counter from "./Counter";



const Home = () => {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
        <section className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projeto de estudos
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Meus estudos de React e JavaScript
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Acompanhamento
          </p>

          { <Counter />}
   
        </section>
      </main>
    )
  }

  export default Home;