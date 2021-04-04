import { Menu } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { IMenuItem, menuItemList } from "../../../config/menu";
import MenuItem from "../../atoms/menuItem";

const Index = () => {
  const { pathname } = useRouter();

  return (
    <Menu mode="horizontal" selectedKeys={[pathname]}>
      {[...menuItemList]
        .sort((a, b) => a.position - b.position)
        .map(({ path: patch, name }: IMenuItem) => (
          <MenuItem key={patch} to={patch} name={name} />
        ))}
    </Menu>
  );
};

export default Index;
