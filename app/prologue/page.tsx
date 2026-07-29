'use client'

import { useState, Activity } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { takeDamage, healDamage } from "@/lib/features/player/playerSlice";

export default function Prologue() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const player = useAppSelector((state) => state.player);
    const playerClass = player.className;

   const takeAHit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(takeDamage(1))
   }

   const healAPoint = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(healDamage(1))
   }

    return(
        <div className="content-center">
            <Activity mode={playerClass === "Brawler" ? 'visible' : 'hidden'}>
                You are a Brawler
                <br/>
                <button className="pl-2 pr-2 bg-transparent rounded border border-red-500 mb-3" onClick={takeAHit}>Take a hit</button>
                <button className="pl-2 pr-2 bg-transparent rounded border border-blue-500" onClick={healAPoint}>Heal a point</button>
            </Activity>
            <Activity mode={playerClass === "Engineer" ? 'visible' : 'hidden'}>
                You are an Engineer
                <br/>
                <button className="pl-2 pr-2 bg-transparent rounded border border-red-500 mb-3" onClick={takeAHit}>Take a hit</button>
                <br/>
                <button className="pl-2 pr-2 bg-transparent rounded border border-blue-500" onClick={healAPoint}>Heal a point</button>
            </Activity>
            <Activity mode={playerClass === "Thief" ? 'visible' : 'hidden'}>
                You are a Thief
                <br/>
                <button className="pl-2 pr-2 bg-transparent rounded border border-red-500 mb-3" onClick={takeAHit}>Take a hit</button>
                <br/>
                <button className="pl-2 pr-2 bg-transparent rounded border border-blue-500" onClick={healAPoint}>Heal a point</button>
            </Activity>
        </div>
    )
}
