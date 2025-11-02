"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

const WishlistPanel = () => {
  return (
    <Link href="/wishlist">
      <Button variant="ghost" className="relative rounded-full w-10 h-10 p-0 border-none shadow-none">
        <Heart className="w-7 h-7"/>
      </Button>
    </Link>
  )
}

export default WishlistPanel
