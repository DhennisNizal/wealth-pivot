import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Flex } from "antd";

const Loader = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#00B686" }} spin />
  );

  return (
    <Flex align="center" gap="middle">
      <Spin indicator={antIcon} size="large" />
    </Flex>
  );
};

export default Loader;
