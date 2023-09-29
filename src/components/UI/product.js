import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const Products = ({ products }) => {
  const { Meta } = Card;

  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Our Featured Product
        </h1>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Check & Get Your Desired Product!
        </p>

        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {products?.map((product) => (
            <Col key={product.id} className="gutter-row" span={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src={product?.image_url}
                    width={500}
                    height={200}
                    alt="pc component image"
                  />
                }
              >
                <Meta title={product?.Name} />
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
                  <p>{product?.Category}</p>
                  <p>{product?.Price}</p>
                  <p>{product?.Status}</p>
                  <p>{product?.Rating}</p>
                </div>

                <Link href={`/product/${product?.id}`}>
                  <button
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
                  </button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Products;
