'use client'
import { useRouter } from "next/navigation"

export default function GameOver () {
    const router = useRouter()
    const restart = (): undefined => {
        router.push("/")
    }
    return(
        <div>
            <h2>You have died</h2>
            <button onClick={restart}>Return to start</button>
        </div>
    )
}