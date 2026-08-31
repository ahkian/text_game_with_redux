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
                <h2 className="flex justify-center underline bold">Brawler Prologue</h2>                
            </Activity>
            <Activity mode={playerClass === "Engineer" ? 'visible' : 'hidden'}>
                <h2 className="flex justify-center underline bold">Engineer Prologue</h2>
                
            </Activity>
            <Activity mode={playerClass === "Thief" ? 'visible' : 'hidden'}>
                <h2 className="flex justify-center underline bold">Thief Prologue</h2>
                
            </Activity>
        </div>
    )
}
