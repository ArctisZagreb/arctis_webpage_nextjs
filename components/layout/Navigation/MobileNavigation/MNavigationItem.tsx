import { INavItem } from "@/types/general";
import React from "react";

export const MNavigationItem: React.FC<{ item: INavItem }> = ({ item }) => {
  const { name, route } = item;
  return <li>{item.name}</li>;
};
