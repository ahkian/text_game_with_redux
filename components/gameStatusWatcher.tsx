'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAppSelector } from "@/lib/hooks" 

export default function GameStatusWatcher () {
    const router = useRouter();
    const status = useAppSelector((state) => state.game.status)

    useEffect(() => {
        if (status == 'game over'){
            router.push('/gameOver')
        }
    }, [status, router]);
    return null;
}