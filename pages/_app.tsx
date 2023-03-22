import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  //Not to animate page transition of first load or refresh
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    setInitialLoad(false);
  }, []);
  return (
    <>
      <div className="absolute-logo">
        <Image
          src="/assets/logo/arctis-logo3.png"
          width={478}
          height={166}
          alt="arctis logo"
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animationState"
          exit="exitState"
          variants={{
            initialState: {
              opacity: initialLoad ? 1 : 0,
              clipPath: initialLoad
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            },
            animationState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            },
          }}
          transition={{
            duration: initialLoad ? 0 : 0.5,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
