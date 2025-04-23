import { ShoppingBagIcon, CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";

export default function menu() {
  return (
    <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
            <Link href="/signin" className="header-button">
                <CircleUserRoundIcon className="w-8 h-8" />
                <span className="font-bold">Sign in</span>
            </Link>
            
            <Link href="/cart" className="header-button">
                <ShoppingBagIcon className="w-8 h-8" />
                <span className="font-bold">Sign in</span>
            </Link>
        </nav>
    </div>
  )
}
