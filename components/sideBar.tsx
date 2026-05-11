'use client'

import { useAppSelector } from "@/lib/hooks"
import { StatusBar } from "./statusBar"
import { usePathname } from "next/navigation"

export default function SideBar() {
    const player = useAppSelector((state) => state.player)
    const pathname = usePathname();

    if (pathname !== '/prologue') return null;
    return(
        <aside className="w-72 h-screen flex flex-col bg-slate-900 border-r border-slate-800 p-6 pb-4 shadow-2xl">
            <div className="mb-10">
                <h2 className="text-2xl font-black text-cyan-500 uppercase tracking-tighter">{player.name}</h2>
                <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">{player.className}</p>
            </div>
            <div className="space-y-6">
                <StatusBar label="Health" current={player.hp} max={player.maxHp} color="bg-red-600"/>
                <StatusBar label="Stamina" current={player.stamina} max={player.maxStamina} color="bg-green-600"/>
                {player.maxMana > 0 && (
                    <StatusBar  label="Mana" current={player.mana} max={player.maxMana} color="bg-blue-600"/>
                )}
            </div>
            <div className="mt-auto pt-6 border-t border-slate-800">
                <div className="text-slate-500 text-xs uppercase font-bold mb-1">Available Funds</div>
                <div className="</div>">
                    ${player.dollars.toLocaleString()}
                </div>
            </div>
        </aside>
    )
}