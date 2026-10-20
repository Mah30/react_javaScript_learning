import { useState } from 'react'

function Counter() {
  // O estado guarda o valor atual do contador.
  const [count, setCount] = useState(0)

  return (
    <div className="mt-10 rounded-3xl bg-slate-800 p-6">
      <p className="text-lg text-slate-300">Valor do contador</p>
      <p className="my-4 text-5xl font-bold text-cyan-400">{count}</p>
      <button
        className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-800"
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Incrementar
      </button>
    </div>
  )
}

export default Counter
