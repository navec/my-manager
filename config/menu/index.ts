export interface IMenuItem {
  path: string;
  key: string;
  name: string;
  position: number;
}

export const menuItemList: IMenuItem[] = [
  { path: "/", key: "home", name: "HOME", position: 0 },
  { path: "/about", key: "about", name: "ABOUT", position: 1 },
];

export const defaultKey = menuItemList[0].key;
