/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YjSNo1f3MoB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32">
                    <div className="container space-y-10 xl:space-y-16">
                        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                        Revolutionize Your Internet Browsing With Our Browser Extension
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Discover how our browser extension makes it easier for you to browse the internet with confidence.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <TrustIcon className="h-12 w-12 text-primary" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Increase Trust</h3>
                                    <p className="max-w-[300px] text-muted-foreground">
                                        Our innovative extension increases trust in the web by showing the accuracy of different sites.
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <RocketIcon className="h-12 w-12 text-primary" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Boost Research Efficency</h3>
                                    <p className="max-w-[300px] text-muted-foreground">
                                        By removing the need to manually check source to see if they are reliable your speed when researching topics or ideas will skyrocket.
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <GaugeIcon className="h-12 w-12 text-primary" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Save Time</h3>
                                    <p className="max-w-[300px] text-muted-foreground">
                                        Our product will save you time day to day when browsing the internet.
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Are Saying</h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from the people who have experienced the power of our innovative browser extension firsthand.
                                </p>
                            </div>
                        </div>
                        <Carousel opts={{ align: "start" }} orientation="vertical" className="w-full max-w-2xl h-[400px] mt-8">
                            <CarouselContent className="h-[400px]">
                                <CarouselItem>
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                                            <blockquote className="text-center">
                                                <p className="text-xl font-medium">
                                                    &quot;Would&apos;ve been great to have back when I was in uni!&quot;
                                                </p>
                                                <cite className="mt-4 not-italic text-muted-foreground">- Taylor Kahlenberg, 25</cite>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem>
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                                            <blockquote className="text-center">
                                                <p className="text-xl font-medium">
                                                    &quot;This product is pretty gang. It has greatly improved my trust in the internet and ability to find good sources.&quot;
                                                </p>
                                                <cite className="mt-4 not-italic text-muted-foreground">- Ethan Mcauliffe, 16</cite>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem>
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                                            <blockquote className="text-center">
                                                <p className="text-xl font-medium">
                                                    &quot;This is actually really good.&quot;
                                                </p>
                                                <cite className="mt-4 not-italic text-muted-foreground">
                                                    - Vaugh Johnston, 16
                                                </cite>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem>
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                                            <blockquote className="text-center">
                                                <p className="text-xl font-medium">
                                                    &quot;This is the most innovative product I&apos;ve seen in years. It&apos;s completely revolutionized  my ability to research on the internet.&quot;
                                                </p>
                                                <cite className="mt-4 not-italic text-muted-foreground">
                                                    - Eric Xie, 17
                                                </cite>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
            </main>
        </div>
    )
}

function BoltIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    )
}


function GaugeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 14 4-4" />
            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
    )
}

function RocketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vwLXYSnC5Px
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
function TrustIcon(props: any) {
    return (
        <div className="flex items-center justify-center" {...props}>
            <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2L3 7V13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}
