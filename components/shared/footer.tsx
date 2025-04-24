'use client'
import { Button } from '@/components/ui/button'
import { CircleChevronUp } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
    return (
        <footer className="bg-lime-950 text-white underline-link">
            <div className="w-full">
                <Button variant="ghost" className="bg-lime-900 w-full rounded-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <CircleChevronUp className="mr-2 h-6 w-6" /> Back to Top
                </Button>
            </div>
            <div className='p-4'>
                <div className='flex justify-center gap-3 text-sm'>
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'>Privacy Policy</Link>
                    <Link href='/page/help'>Help</Link>
                </div>
                <div className='flex justify-center text-sm'>
                    <p>&copy; {new Date().getFullYear()} {APP_NAME}</p>
                </div>
                <div className='mt-8 flex justify-center text-sm text-gray-400'>
                    Galgotias College of Engineering and Technology, Greater Noida, India - 201310
                </div>
            </div>
        </footer>
    )

}