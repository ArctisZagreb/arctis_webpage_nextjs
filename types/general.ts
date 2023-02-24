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
