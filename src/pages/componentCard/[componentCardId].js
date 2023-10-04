import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useComponents } from './ComponentsContext';

const ComponentCard = ({componentCard}) => {
  const { state, dispatch } = useComponents();

  const handleAddToBuilder = () => {
    dispatch({ type: 'SELECT_COMPONENT', category, component });
  };

  const { Meta } = Card;

  return (
    <div>
    <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {componentCard?.map((component) => (
          <Col key={component.id} className="gutter-row">
            
              <Card
                hoverable
                cover={
                  <Image
                    src={component?.image_url}
                    width={200}
                    height={200}
                    alt="pc component image"
                  />
                }
              >
                <Meta title={component?.Name} />
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
                  <p>{component?.Category}</p>
                  <p>{component?.Price}</p>
                  <p>{component?.Status}</p>
                  <p>{component?.Rating}</p>
                </div>

              </Card>
              <Link href={`/`}>
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
                    onClick={handleAddToBuilder}
                  >
                    Add
                  </button>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ComponentCard;

export const getServerSideProps = async ({params}) => {
  
  const res = await fetch(`http://localhost:5000/${params.componentCardId}`);
  const data = await res.json();
  console.log(params.componentCardId)
  

  return {
    props: {
      componentCard: data
    },
  };
};

ComponentCard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
