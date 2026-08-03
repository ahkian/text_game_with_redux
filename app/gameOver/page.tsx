'use client'
import { useRouter } from "next/navigation"
import { setGameStatus } from "@/lib/features/game/gameSlice"
import { restPlayer } from "@/lib/features/player/playerSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function GameOver () {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const restart = (): undefined => {
        dispatch(setGameStatus('playing'))
        dispatch(restPlayer())
        router.push("/")
    }
    return(
        <div>
            <h2>You have died</h2>
            <button onClick={restart}>Return to start</button>
        </div>
    )
}