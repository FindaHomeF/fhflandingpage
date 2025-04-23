import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/Home";

export default function Home() {

  return (
    <AnimatePresence type="crossfade">
      <HomePage/>
    </AnimatePresence>
  );
}
