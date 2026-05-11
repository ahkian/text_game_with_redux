interface Props {
    label: string;
    current: number;
    max: number;
    color: string;
}

export const StatusBar = ({label, current, max, color}: Props) => {
    const percentage = Math.max(0, Math.min(100, (current/max) * 100))
    return(
        <div className="mb-4">
            <div className="flex justify-between text-xs mb-1 font-mono uppercase tracking-wider">
                <span>{label}</span>
                <span>{current} / {max}</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                    className={`h-full ${color} transition-all duration-500 ease-out`}
                    style={{width: `${percentage}`}}
                />
            </div>
        </div>
    )
}