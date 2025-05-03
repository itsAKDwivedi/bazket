'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HomeCarousel({
    items,
    }: {
        items: {
            title: string
            buttonCaption: string
            image: string
            url: string
        }[]
}) {
    const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }))

return (
    <Carousel dir='ltr' plugins={[plugin.current]} className="w-full mx-auto" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
        <CarouselContent>
            {items.map((item) => (
                <CarouselItem key={item.title}>
                    <Link href={item.url}>
                        <div className='flex aspect-[16/6] items-center justify-center relative p-6'>
                            <Image src={item.image} alt={item.title} fill className="object-cover" priority />
                                <div className='absolute w-1/3 left-18 top-1/3 transform -translate-y-1/2 text-left'>
                                    <h2 className={cn('text-xl md:text-6xl font-bold mb-4 text-primary')}>
                                        {item.title}
                                    </h2>
                                    <Button className='hidden md:block'>
                                        {item.buttonCaption}
                                    </Button>
                                </div>
                        </div>
                    </Link>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='left-10 md-left-12 size-13' />
        <CarouselNext className='right-10 md-right-12 size-13' />
    </Carousel>
)}