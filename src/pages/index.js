import RootLayout from "@/components/Layouts/RootLayout";
import Categories from "@/components/UI/categories";
import Products from "@/components/UI/product";
import Head from "next/head";

const HomePage = ({ products, categories }) => {
  return (
    <>
      <Head>
        <title>Alpha Bridge</title>
        <meta
          name="description"
          content="This is pc builder website of Alpha Bridge made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Products products={products} />
      </div>
      <div>
        <Categories categories={categories}></Categories>
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res1 = await fetch("http://localhost:5000/featured_products");
    const res2 = await fetch("http://localhost:5000/featured_categories");

    if (!res1.ok || !res2.ok) {
      throw new Error("Failed to fetch data");
    }

    const data1 = await res1.json();
    const data2 = await res2.json();

    return {
      props: { products: data1, categories: data2 },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { products: [], categories: [] }, // Provide default values or handle the error gracefully.
    };
  }
};
