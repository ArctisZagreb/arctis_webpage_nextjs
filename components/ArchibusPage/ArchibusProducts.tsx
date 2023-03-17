import React, { useState } from "react";
import styles from "./ArchibusProducts.module.scss";
import { GradiantBackground } from "../layout/GradiantBackground/GradiantBackground";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import { IABProductSubMenuItem, IArchibusProduct } from "@/types/sanity-types";
import { ArchibusNavigation } from "./ArchibusNavigation";
import { ArchibusPost } from "./ArchibusPost";
import Image from "next/image";

export const ArchibusProducts: React.FC<{
  archibusProducts: IArchibusProduct[];
}> = ({ archibusProducts }) => {
  const [selectedPost, setSelectedPost] =
    useState<IABProductSubMenuItem | null>(null);
  return (
    <GradiantBackground>
      <Wrapper>
        <div className={styles["archibus-products"]}>
          <ArchibusNavigation />
          {selectedPost ? (
            <ArchibusPost />
          ) : (
            <div className={styles["archibus-logo"]}>
              <Image
                src="/assets/logo/archibus-logo-thin.png"
                alt="Archibus Logo"
                width={420}
                height={110}
              />
            </div>
          )}
        </div>
      </Wrapper>
    </GradiantBackground>
  );
};
