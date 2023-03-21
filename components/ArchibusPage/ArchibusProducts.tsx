import React, { useState } from "react";
import styles from "./ArchibusProducts.module.scss";
import { GradiantBackground } from "../layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import {
  IABProductSubMenuItem,
  IABProductMainMenuItem,
} from "@/types/sanity-types";
import { ArchibusNavigation } from "./ArchibusNavigation";
import { ArchibusPost } from "./ArchibusPost";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IArchibusProductsPost } from "@/types/general";

export const ArchibusProducts: React.FC<{
  archibusProducts: IABProductMainMenuItem[];
}> = ({ archibusProducts }) => {
  const [selectedPost, setSelectedPost] =
    useState<IArchibusProductsPost | null>(null);
  const [openedSidebar, setOpenedSideBar] = useState(false);
  const closeSelectedPostHandler = () => {
    setSelectedPost(null);
  };

  return (
    <GradiantBackground>
      <div className={styles["archibus-products"]}>
        <ArchibusNavigation
          archibusProducts={archibusProducts}
          os={setOpenedSideBar}
          setSelectedPost={setSelectedPost}
          selectedPost={selectedPost}
        />
        <div className={styles["content"]}>
          <AnimatePresence>
            {selectedPost ? (
              <ArchibusPost
                closeSelectedPost={closeSelectedPostHandler}
                postData={selectedPost}
              />
            ) : (
              <motion.div
                key="logo"
                className={`${styles["archibus-logo"]} ${
                  openedSidebar && styles["opsid"]
                }`}
              >
                <Image
                  src="/assets/logo/archibus-logo-thin.png"
                  alt="Archibus Logo"
                  width={420}
                  height={110}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </GradiantBackground>
  );
};
