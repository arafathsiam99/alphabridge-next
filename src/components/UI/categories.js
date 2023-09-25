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
          <Col key={category.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={category?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="pc component image"
                />
              }
            >
              <Meta title={category?.Name} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <p>{category?.Category}</p>
                <p>{category?.Price}</p>
                <p>{category?.Status}</p>
                <p>{category?.Rating}</p>
              </div>

              <Link href="">
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Details
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Categories;
