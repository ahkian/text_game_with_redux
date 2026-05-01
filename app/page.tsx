'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPlayerClass } from "@/lib/features/player/playerSlice";
import { CLASS_DATA, CharacterClassName } from "@/lib/types/gameTypes";

export default function IntroPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState<CharacterClassName | ''>('')

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault()
    if (name && selectedClass) {
      dispatch(setPlayerClass({name, className: selectedClass as CharacterClassName}))
      router.push('/prologue')
    }
  }

  return(
    <div className="max-w-4xl mx-auto p-8 pt-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Title TBD</h1>
        <p className="text-slate-400 italic">An urban fantasy text based game written in React.js</p>
      </header>
      <form onSubmit={handleSubmit} className="space-y-12">
        <section className="space-y-4">
          <label className="block text-xl font-medium">Player Character Name (50 characters max)</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value.slice(0, 50))} placeholder="Enter your name" className="w-full bg-slate-800 border border-slate-700 p-4 rounded focus:border-cyan-500 text-lg" required />
        </section>
        <section className="space-y-6">
          <label className="block text-xl font-medium text-center">Select your class. This will determine starting stats.</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(CLASS_DATA) as CharacterClassName[]).map((className) =>{
              const stats = CLASS_DATA[className]
              const isActive = selectedClass == className
              return(
                <div 
                  key={className}
                  onClick={() => {
                    setSelectedClass(className)
                  }}
                  className={`cursor-pointer p-6 rounded border-2 transition-all ${
                    isActive 
                    ? 'border-cyan-500 bg-cyan-900/20'
                    : 'border-slate-800 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2">{className}</h3>
                    <p className="text-sm text-slate-400 mb-4">{stats.description}</p>

                    <div className="text-xs space-y-1 font-mono text-slate-300">
                      <p>HP: {stats.maxHp}</p>
                      <p>Stamina: {stats.maxStamina}</p>
                      {stats.maxMana > 0 && <p>Mana: {stats.maxMana}</p>}
                      <p>Base Damage: {stats.basicDamage}</p>
                    </div>
                  </div>
              )
            })
            }
          </div>
        </section>
        <div className="text-center">
            <button 
              type="submit" 
              disabled={!name || !selectedClass}
              className={`px-12 py-4 rounded-full font-bold text-xl transition-all ${
                name && selectedClass
                ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
              >
                Start your journey
              </button>
        </div>
      </form>
    </div>
  )
}