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
                <p>The beeping coming from your link breaks the silence and serenity of your workshop. You look over to the screen and see shelter in place warning from the Verteron PD. You ignore those and scroll down to the notifications from your neighbors. The first one you see is a video of a crowd of people running and screaming pursued by some half-human half-machine monstrosity wielding a rocket launcher. That's right outside your workshop! You can't stay here. You grab your go-bag and head outside.</p>   
            </Activity>
            <Activity mode={playerClass === "Thief" ? 'visible' : 'hidden'}>
                <p>You lurk outside your target watching the workers ushering out the last customers and closing down the jewelry shop for the day. They think that their alarm systems and vaults will be enough to keep people like you away from their valuables. But their confidence will be their undoing. You are getting ready to make your move when you hear and feel it. A huge crowd of people are running towards you in a panic. Behind you see a hulking figure that seems like more of a golem than a person. "Damn it" you think "I can't pull off the job now." You look around trying to decide your next move.</p> 
            </Activity>
        </div>
    )
}
