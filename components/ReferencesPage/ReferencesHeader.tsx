import { urlFor } from "@/lib/sanity.client";
import { IReference } from "@/types/sanity-types";
import React from "react";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import styles from "./ReferencesHeader.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "@/lib/hooks";
export const ReferencesHeader: React.FC<{
  references: IReference[];
  selectReference: Function;
  chosenReference: IReference | null;
}> = ({ references, selectReference, chosenReference }) => {
  const router = useRouter();
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <div className={styles["references-header"]}>
      <div className={styles["logo-list"]}>
        {references.map((reference) => {
          return (
            <div
              key={reference._id}
              className={`${styles["logo-container"]} ${
                chosenReference &&
                reference._id === chosenReference._id &&
                styles["active"]
              }`}
              onClick={() => {
                selectReference(reference.client.name);
                if (
                  windowSize &&
                  (windowSize.height < 610 || windowSize.width < 768)
                ) {
                  router.push("/references#reference");
                }
              }}
            >
              <Image
                src={urlFor(reference.logo).url()}
                width={150}
                height={100}
                alt={reference.client.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
