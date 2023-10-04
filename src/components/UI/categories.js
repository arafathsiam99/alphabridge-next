import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const Categories = ({ categories }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Our Featured Category
      </h1>

      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Get Your Desired Product from Featured Category!
      </p>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {categories?.map((category) => (
          <Col key={category.id} className="gutter-row">
            <Link href={`/category/${category.Category}`}>
              <Card
                hoverable
                cover={
                  <Image
                    src={category?.image_url}
                    width={200}
                    height={200}
                    alt="pc component image"
                  />
                }
              >
                <Meta title={category?.Name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Categories;
