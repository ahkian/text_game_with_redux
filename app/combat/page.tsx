'use client'

import { useRouter } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { takeDamage, healDamage } from "@/lib/features/player/playerSlice";
import { Activity } from "react";

interface combatProps {
    enemyId: string;
    nextPage: string;
}

export default function Combat({enemyId, nextPage}:combatProps){
    const router = useRouter();
    const dispatch = useAppDispatch();
    const player = useAppSelector((state) => state.player)
    const enemy = useAppSelector((state) => Object.values(state.npc.entities).find(npc => npc.id === enemyId))

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push(nextPage)
    }
    if(!enemy){
        return undefined
    }
    return(
        <div>
            <Activity mode={player.hp === 0 || enemy.hp === 0 ? 'visible' : 'hidden'}>
                <button onClick={handleClick}></button>
            </Activity>
        </div>
    )
}