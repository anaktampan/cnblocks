import React from 'react'
import Link from 'next/link'
import { Button } from '@veil/components/ui/button'
import { Card } from '@veil/components/ui/card'
import { HeroHeader } from './header'
import { ChevronRight } from 'lucide-react'
import { Supabase } from '@veil/components/ui/svgs/supabase'
import { Slack } from '@veil/components/ui/svgs/slack'
import { Twilio } from '@veil/components/ui/svgs/twilio'
import { Linear } from '@veil/components/ui/svgs/linear'
import { Figma } from '@veil/components/ui/svgs/figma'
import { Vercel } from '@veil/components/ui/svgs/vercel'
import { Firebase } from '@veil/components/ui/svgs/firebase'
import { ClerkIconLight as Clerk } from '@veil/components/ui/svgs/clerk'
import { Claude } from '@veil/components/ui/svgs/claude'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="bg-background">
                    <div className="relative pb-32 pt-44">
                        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% aspect-9/4 absolute inset-0 top-24">
                            <img
                                src="https://images.unsplash.com/photo-1740516367177-ae20098c8786?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="mx-auto max-w-md text-center">
                                <h1 className="text-balance font-serif text-5xl font-medium">Ship faster. Integrate smarter.</h1>
                                <p className="text-muted-foreground mt-4 text-balance">Veil is your all-in-one engine for adding seamless integrations to your app.</p>

                                <Button
                                    asChild
                                    className="mt-6 pr-1.5">
                                    <Link href="#link">
                                        <span className="text-nowrap">Start Building</span>
                                        <ChevronRight className="opacity-50" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="mx-auto mt-24 max-w-xl">
                                <div className="**:fill-foreground grid scale-95 grid-cols-3 gap-12">
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Supabase className="size-4" />
                                            <span className="font-medium">Supabase</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Slack className="size-4" />
                                            <span className="font-medium">Slack</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Figma className="size-4" />
                                            <span className="font-medium">Figma</span>
                                        </Card>
                                    </div>
                                    <div className="mr-auto">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Vercel className="size-4" />
                                            <span className="font-medium">Vercel</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Firebase className="size-4" />
                                            <span className="font-medium">Firebase</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 mx-auto flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Linear className="size-4" />
                                            <span className="font-medium">Linear</span>
                                        </Card>
                                    </div>
                                    <div className="ml-auto blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Twilio className="size-4" />
                                            <span className="font-medium">Twilio</span>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card className="shadow-foreground/10 mx-auto flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Claude className="size-4" />
                                            <span className="font-medium">Claude AI</span>
                                        </Card>
                                    </div>
                                    <div className="blur-[2px]">
                                        <Card className="shadow-foreground/10 flex h-10 w-fit items-center gap-2 rounded-xl px-4">
                                            <Clerk className="size-4" />
                                            <span className="font-medium">Clerk </span>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
