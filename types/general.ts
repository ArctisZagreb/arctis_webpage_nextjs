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
