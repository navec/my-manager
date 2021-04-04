import Layout from "../layout";

type IndexProps = {
  imgLink: string;
  text: string;
};

const Index = ({ imgLink, text }: IndexProps) => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      style={{
        backgroundImage: `url(${imgLink})`,
        minHeight: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "0.75",
      }}
    >
      <h1
        style={{
          margin: "0 auto",
          width: "250px",
          height: "70px",
          lineHeight: "70px",
          textAlign: "center",
          alignSelf: "center",
          backgroundColor: "black",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        {text}
      </h1>
    </Layout>
  );
};

export default Index;
