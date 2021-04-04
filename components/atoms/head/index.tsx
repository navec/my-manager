import Head from "next/head";
import React from "react";

type IndexProps = { title?: string };

const Index = ({ title = "This is the default title" }: IndexProps) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default Index;
