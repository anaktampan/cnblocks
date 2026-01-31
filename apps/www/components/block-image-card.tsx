'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface BlockImageCardProps {
    name: string
    alt: string
    width: number
    height: number
}

export const BlockImageCard = ({ name, alt, width, height }: BlockImageCardProps) => {
    const { resolvedTheme } = useTheme()
    let src = resolvedTheme === 'dark' ? `${name}-dark` : name
    if (name === 'secondary-hero-2') {
        src = 'secondary-hero-2'
    }
    return (
        <div className="ring-foreground/6.5 dark:ring-foreground/7.5 bg-card overflow-hidden rounded-2xl p-px shadow-md shadow-black/5 ring-1">
            <Image
                src={`https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/${src}.png`}
                alt={alt}
                width={width}
                height={height}
                className="rounded-2xl"
            />
        </div>
    )
}
