import { Button, Dropdown, Layout, theme } from "antd";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const { Header, Content, Footer } = Layout;
const items = [
  {
    key: "1",
    label: (
      <Link href={`/category/CPU-Processor`}>
        CPU / Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href={`/category/Motherboard`}>
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href={`/category/RAM`}>
        RAM
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href={`/category/Power-Supply-Unit`}>
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link href={`/category/RAM`}>
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link href={`/category/Monitor`}>
        Monitor
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link href={`/category/Others`}>
        Others
      </Link>
    ),
  },
];

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { data: session } = useSession();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#450fef",
        }}
      >
        <Link href="/">
          <h1
            style={{
              color: "white",
              fontSize: "28px",
            }}
          >
            Alpha Bridge
          </h1>
        </Link>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Button
            style={{
              backgroundColor: "#9d23d1",
              color: "white",
              border: "none",
            }}
          >
            Categories
          </Button>
        </Dropdown>
        {session?.user ? (
          <Button type="primary" onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button type="primary">Login</Button>
          </Link>
        )}

        <Link href="/pcbuilder">
          <Button type="primary">Pc Builder</Button>
        </Link>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Alpha Bridge Pc Building ©2023 Created by Alpha Bridge
      </Footer>
    </Layout>
  );
};

export default RootLayout;
