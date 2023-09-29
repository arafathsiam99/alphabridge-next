import { Button, Col, Divider, Row } from "antd";
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
            <Link href="/categoires">
              <Button type="primary" ghost>
                Choose
              </Button>
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
            <Button type="primary" ghost>
              Choose
            </Button>
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
            <Button type="primary" ghost>
              Choose
            </Button>
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
            <Button type="primary" ghost>
              Choose
            </Button>
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
            <Button type="primary" ghost>
              Choose
            </Button>
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
            <Button type="primary" ghost>
              Choose
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PcBuilderPage;
