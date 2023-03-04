export type TSocialIcons = "facebook" | "linkedin";
export type TContactIcons = "address" | "phone" | "email";
type subroute = {
  name: string;
  route: string;
};
export interface INavItem {
  name: string;
  route: string;
  show: boolean;
  subroutes: null | subroute[];
}

export interface IArchibusPlan {
  _id: number;
  name: string;
  cardMainText: string;
  cardContentList: string[];
  cardDetails: {
    title: string;
    text: string[];
  }[];
}

export interface IFAQGroup {
  mainTopic: string;
  question: string;
  answer: string;
  showed: boolean;
  id: string;
}
