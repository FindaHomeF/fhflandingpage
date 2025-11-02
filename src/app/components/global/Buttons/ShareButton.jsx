"use client"
import { Button } from "@/components/ui/button";
import { CiShare2 } from "react-icons/ci";
import { toast } from "sonner";

const ShareButton = ({ 
    shareUrl, 
    variant = "default",
    className = "", 
    iconOnly = false,
    buttonText = "Share",
    successMessage = "Link copied to clipboard!",
    errorMessage = "Failed to copy link!"
}) => {
    const handleShare = async () => {
        try {
            // Construct the full URL if shareUrl is a relative path
            const fullUrl = shareUrl.startsWith('http') 
                ? shareUrl 
                : `${window.location.origin}${shareUrl.startsWith('/') ? shareUrl : `/${shareUrl}`}`;
            
            await navigator.clipboard.writeText(fullUrl);
            toast.success(successMessage);
        } catch (err) {
            console.error("Share error:", err);
            toast.error(errorMessage);
        }
    };

    return (
        <Button
            className={`
                rounded-full flex items-center gap-x-2 justify-center border border-borderGray 
                bg-transparent text-primary
                ${className}
            `}
            onClick={handleShare}
            variant={variant}
        >
            <CiShare2 className="font-bold"/>
            {!iconOnly && <h6 className="hidden md:block">{buttonText}</h6>}
        </Button>
    );
};

export default ShareButton;

