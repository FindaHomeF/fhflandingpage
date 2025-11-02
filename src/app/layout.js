import { Mulish } from "next/font/google";
import "./globals.css";
import { Abhaya_Libre } from 'next/font/google';
import ToasterProvider from './components/global/ToasterProvider';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { CartProvider } from '@/contexts/CartContext';


// Initialize the font with desired subsets and weights
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-mulish',
});

export const abhayaLibre = Abhaya_Libre({
  weight: '800', // ExtraBold weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abhaya-libre',
});

export const metadata = {
  title: "Find-a-Home FUTA | Your Trusted Student Housing Platform",
  description: "The #1 platform for FUTA student accommodation. Find verified properties, connect with trusted service providers, and discover affordable essentials. Simple, safe, student-focused.",
};

export default function RootLayout({ children }) {
  
  return (
      <html lang="en">
        <body
          className={`${mulish.className}  antialiased`}
        >   
         <WishlistProvider>
          <CartProvider>
            <ToasterProvider />
            {children}
          </CartProvider>
         </WishlistProvider>
        </body>
      </html>
  );
}
