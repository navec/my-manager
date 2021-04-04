import { Menu, MenuItemProps } from "antd";
import Link from "next/link";
import React from "react";

interface IndexProps extends MenuItemProps {
  to: string;
  name: string;
}

function Index({ to, name, ...menuItemProps }: IndexProps) {
  return (
    <Menu.Item {...menuItemProps}>
      <Link href={to}>{name}</Link>
    </Menu.Item>
  );
}

export default Index;
