import React from 'react'

export const BlockPreviewWrapper = ({ children, id, height }: { children: React.ReactNode; id: string; height: number }) => {
    return (
        <section
            id={id}
            className="h-(--block-height) group mb-16 scroll-my-6 [--block-height:36rem] lg:[--block-height:var(--block-static-height)]"
            style={{ '--block-static-height': `${height + 48}px` } as React.CSSProperties}>
            {children}
        </section>
    )
}
