import React, { CSSProperties, ReactNode } from "react";
import Footer from "../../atoms/footer";
import Head from "../../atoms/head";
import Header from "../../organisms/header";

type Props = {
  children?: ReactNode;
  title?: string;
  style?: CSSProperties;
};

const Layout = ({
  children,
  style,
  title = "This is the default title",
}: Props) => (
  <div className="wrapper" style={style}>
    <Head title={title} />
    <Header />
    <article className="main">{children}</article>
    <Footer />
  </div>
);

export default Layout;
