import React, { useState } from "react";
import styles from "./ArchibusProducts.module.scss";
import { GradiantBackground } from "../layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { IABProductSubMenuItem, IArchibusProduct } from "@/types/sanity-types";
import { ArchibusNavigation } from "./ArchibusNavigation";
import { ArchibusPost } from "./ArchibusPost";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IArchibusProductsPost } from "@/types/general";

export const ArchibusProducts: React.FC<{
  archibusProducts: IArchibusProduct[];
}> = ({ archibusProducts }) => {
  const [selectedPost, setSelectedPost] =
    useState<IArchibusProductsPost | null>(null);
  const [openedSidebar, setOpenedSideBar] = useState(false);
  console.log(selectedPost);

  return (
    <GradiantBackground>
      <div className={styles["archibus-products"]}>
        <ArchibusNavigation
          archibusProducts={archibusProducts}
          os={setOpenedSideBar}
          setSelectedPost={setSelectedPost}
        />
        <AnimatePresence>
          {selectedPost ? (
            <ArchibusPost postData={selectedPost} />
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
    </GradiantBackground>
  );
};
