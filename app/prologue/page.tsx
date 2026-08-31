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
            <h1 className="flex justify-center underline font-bold">Prologue</h1> 
            <Activity mode={playerClass === "Brawler" ? 'visible' : 'hidden'}>
                <p>The screams are the first indication you have that something is wrong. Your planned peaceful evening of relaxing at home with whatever show doesn't look like complete shit on Verteron+ has gone up in smoke. You leave your apartment to see your neighbors clustered around the windows looking out at your apartment block's courtyard. Shouldering people out of the way you get close enough to the window to see what's going on. There is a crowd of people running in a panic and a few yards behind them giving chase is a gargantuan figure that you barely recognize as human thanks to their extensive cyberware.</p>               
            </Activity>
            <Activity mode={playerClass === "Engineer" ? 'visible' : 'hidden'}>
                <p></p>
                
            </Activity>
            <Activity mode={playerClass === "Thief" ? 'visible' : 'hidden'}>
                <p></p>
                
            </Activity>
        </div>
    )
}
