'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Prologue() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const player = useAppSelector((state) => state.player);

    // Debug to confirm Redux state is updated/persisted across navigation
    useEffect(() => {
        console.log('Prologue player state:', player);
    }, [player]);

    return(
        <div className="content-center">
            <h2>{player.name}</h2>
        </div>
    )
}
