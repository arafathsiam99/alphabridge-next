import RootLayout from "@/components/Layouts/RootLayout";
import { EditOutlined } from "@ant-design/icons";
import { Card, Col, Descriptions, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const mapProductToItems = (featured_products) => {
  return [
    {
      label: "Category",
      children: featured_products.Category,
    },
    {
      label: "Price",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: featured_products.Price,
    },
    {
      label: "Status",
      children: featured_products.Status,
    },
    {
      label: "Rating",
      children: featured_products?.Rating,
    },
    {
      label: "Individual Rating",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: featured_products?.Individual_Rating,
    },
    {
      label: "Average Rating",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: featured_products?.Average_Rating,
    },
    {
      label: "Description",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: featured_products?.Description,
    },
    {
      label: "Review",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: featured_products?.Review,
    },
  ];
};
const ProductDetailPage = ({ featured_products }) => {
  const { Meta } = Card;
  const mappedItems = mapProductToItems(featured_products);
  return (
    <Row
      style={{
        justifyContent: "center",
      }}
    >
      <Col span={10}>
        <Card
          style={{
            width: "50%",
          }}
          hoverable
          cover={
            <Image
              src={featured_products?.image_url}
              width={250}
              height={100}
              alt="pc component image"
            />
          }
        >
          <Meta title={featured_products?.Name} />
        </Card>
        <h1>Key Features</h1>
        <p>Brand: {featured_products?.Key_Features.Brand}</p>
        <p>Model: {featured_products?.Key_Features.Model}</p>
        <p>Specification: {featured_products?.Key_Features.Specification}</p>
        <p>Port: {featured_products?.Key_Features.Port}</p>
        <p>Type: {featured_products?.Key_Features.Type}</p>
        <p>voltage: {featured_products?.Key_Features.Voltage}</p>
        <p>Resolution: {featured_products?.Key_Features.Resolution}</p>
      </Col>
      <Col span={12}>
        <Descriptions
          title="Product Details"
          bordered
          column={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          items={mappedItems}
        />
      </Col>
    </Row>
  );
};

export default ProductDetailPage;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/featured_products");
  const featured_products = await res.json();

  const paths = featured_products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/featured_products/${params.productId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      featured_products: data,
    },
  };
};


ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
