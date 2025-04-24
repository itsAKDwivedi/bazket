import { ShoppingBagIcon, UserRoundIcon } from "lucide-react";
import Link from "next/link";

export default function menu() {
  return (
    <div className="flex justify-end">
        <nav className="flex gap-3 w-full">
            <Link href="/signin" className="header-button">
                <UserRoundIcon className="w-7 h-7" />
                <span className="font-bold">Sign In</span>
            </Link>
            
            <Link href="/cart" className="header-button">
                <ShoppingBagIcon className="w-7 h-7" />
                <span className="font-bold">Cart</span>
            </Link>
        </nav>
    </div>
  )
}
