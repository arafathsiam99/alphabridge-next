import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const style = {
  padding: "8px 0",
};
const PcBuilderPage = () => {
  return (
    <>
      <div>
        <h1>PC Builder - Build Your Own Computer - Alpha Bridge</h1>
      </div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6}>
          <div style={style}>
            <p>Cpu/Processor</p>
            <Image
              src="/images/images (2).png"
              width={70}
              height={70}
              alt="cpu"
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={style}>
            <Link href='/componentCard/Cpu-Processor'>
            <button type="primary" ghost>
              Choose
            </button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6}>
          <div style={style}>
            <p>Motherboard</p>
            <Image src="/images/3962832.png" width={70} height={70} alt="cpu" />
          </div>
        </Col>
        <Col span={6}>
          <div style={style}>
          <Link href='/componentCard/Motherboard'>
            <button type="primary" ghost>
              Choose
            </button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6}>
          <div style={style}>
            <p>RAM</p>
            <Image src="/images/908522.png" width={70} height={70} alt="cpu" />
          </div>
        </Col>
        <Col span={6}>
          <div style={style}>
          <Link href='/componentCard/RAM'>
            <button type="primary" ghost>
              Choose
            </button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6}>
          <div style={style}>
            <p>Power Supply Unit</p>
            <Image src="/images/images.png" width={70} height={70} alt="cpu" />
          </div>
        </Col>
        <Col span={6}>
          <div style={style}>
          <Link href='/componentCard/Power-Supply-Unit'>
            <button type="primary" ghost>
              Choose
            </button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6}>
          <div style={style}>
            <p>Storage Device</p>
            <Image
              src="/images/a42be9ab09291094c2374fd9c61b18c9_t.jpeg"
              width={70}
              height={70}
              alt="cpu"
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={style}>
          <Link href='/componentCard/RAM'>
            <button type="primary" ghost>
              Choose
            </button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col span={6}>
          <div style={style}>
            <p>Monitor</p>
            <Image
              src="/images/images (1).png"
              width={70}
              height={70}
              alt="cpu"
            />
          </div>
        </Col>
        <Col span={6}>
          <div style={style}>
            <Link href='/componentCard/Monitor'>
            <button type="primary" ghost>
              Choose
            </button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
