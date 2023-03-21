import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";
import { IABProductMainMenuItem } from "@/types/sanity-types";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./ArchibusNavigation.module.scss";
import ArrowRight from "./../../public/assets/icons/arrow-right.svg";
import { IArchibusProductsPost } from "@/types/general";
export const ArchibusNavigation: React.FC<{
  archibusProducts: IABProductMainMenuItem[];
  os: Function;
  setSelectedPost: Function;
  selectedPost: IArchibusProductsPost | null;
}> = ({ archibusProducts, os, setSelectedPost, selectedPost }) => {
  const [secondaryNav, setSecondaryNav] =
    useState<IABProductMainMenuItem | null>(null);

  const openSecondaryNavHandler = (navItem: IABProductMainMenuItem) => {
    if (secondaryNav?.name === navItem.name) {
      setSecondaryNav(null);
      os(false);
    } else {
      os(true);
      setSecondaryNav(navItem);
    }
  };
  return (
    <div
      className={`${styles["archibus-navigation"]} ${
        selectedPost ? styles["hide-navbar"] : ""
      } `}
    >
      <nav className={styles["main-navigation"]}>
        {archibusProducts.map((product) => {
          return (
            <div
              key={product._id}
              className={styles["main-navigation__item"]}
              onClick={() => {
                openSecondaryNavHandler(product);
              }}
            >
              <span className={styles["item-icon"]}>
                <Image
                  src={urlFor(product.icon).url()}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </span>
              <span className={styles["item-title"]}>{product.name}</span>
              <span className={styles["item-arrow"]}>
                <ArrowRight />
              </span>
            </div>
          );
        })}
      </nav>
      <AnimatePresence>
        {secondaryNav && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ x: "-100%" }}
            className={styles["secondary-navigation"]}
          >
            <h3>{secondaryNav.name}</h3>
            <ul>
              {secondaryNav.subMenuItem.map((menuItem) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedPost({
                        menuItem,
                        headerImg: secondaryNav.headerImg,
                      });
                    }}
                    key={menuItem._key}
                  >
                    {menuItem.name}
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
