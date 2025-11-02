'use client'
import { Button } from "@/components/ui/button"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useWishlist } from "@/contexts/WishlistContext";

const WishlistBtn = ({ item, background, itemType = "apartment" }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  // Don't render if no item provided
  if (!item) return null;

  const wishlistItem = {
    ...item,
    type: itemType
  };

  const itemId = item.id || item.propertyId || item.itemId || item.serviceId;
  const inWishlist = isInWishlist(itemId, itemType);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWishlist) {
      removeFromWishlist(itemId, itemType);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  return (
    <Button 
      onClick={handleToggle} 
      className={`h-6 w-6 md:h-8 md:w-8 p-1 flex justify-center items-center absolute top-2 text-base md:text-xl text-white right-2 rounded-full ${background ? background : 'bg-primary'}`}
    >
      {inWishlist ? <IoMdHeart size={20} color="red"/> : <IoMdHeartEmpty size={20} color="white"/> }
    </Button>
  );
};

export default WishlistBtn;
