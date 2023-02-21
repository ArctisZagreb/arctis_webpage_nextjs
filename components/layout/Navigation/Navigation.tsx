import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import styles from "./Navigation.module.scss";
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = useCallback(() => {
    const { pageYOffset } = window;
    if (pageYOffset !== 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`${styles["navigation"]} ${scrolled && styles["scrolled"]}`}
    >
      <Wrapper>
        <div className={styles["navigation-flex"]}>
          <div className={styles["logo-container"]}>
            <Link href="/">
              <Image
                src="/assets/logo/arctis-logo-blue.png"
                width={120}
                height={50}
                alt="Arctis logo"
              />
            </Link>
          </div>
          <DesktopNavigation />
        </div>
      </Wrapper>
    </div>
  );
};
