import { Card, Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const CategoriesPage = ({ categories }) => {
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
        {categories?.map((category) => (
          <Col key={category.id} className="gutter-row">
            
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

              </Card>
              <Link href={`/product/${category?.id}`}>
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
          </Col>
        ))}
      </Row>
     </div>
   );
 };
 
 export default CategoriesPage;
 

 
 export const getServerSideProps = async ({params}) => {
  
   const categoryId = params.categoryId;
   const res = await fetch(`http://localhost:5000/${categoryId}`);
   const data = await res.json();
   console.log(data)
   
 
   return {
     props: {
       categories: data
     },
   };
 };
 

 CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
