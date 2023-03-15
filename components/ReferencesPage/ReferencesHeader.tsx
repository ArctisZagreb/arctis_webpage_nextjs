import { urlFor } from "@/lib/sanity.client";
import { IReference } from "@/types/sanity-types";
import React from "react";
import { Wrapper } from "../layout/Wrapper/Wrapper";
import styles from "./ReferencesHeader.module.scss";
import Image from "next/image";
export const ReferencesHeader: React.FC<{
  references: IReference[];
  selectReference: Function;
}> = ({ references, selectReference }) => {
  return (
    <div className={styles["references-header"]}>
      <div className={styles["logo-list"]}>
        {references.map((reference) => {
          return (
            <div
              key={reference._id}
              className={styles["logo-container"]}
              onClick={() => {
                selectReference(reference.client.name);
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
