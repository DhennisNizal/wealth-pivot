import React, { useState } from "react";
import { Modal, Input, Button, Typography } from "antd";

const { Text } = Typography;

const JoinModal = ({ visible, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (onSubmit) onSubmit(email);
    setEmail("");
    if (onClose) onClose();
  };

  return (
    <Modal
      title="Subscribe to Newsletter"
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text
        type="secondary"
        style={{ display: "block", marginTop: 4, marginBottom: 16 }}
      >
        We will send you updates and latest articles to this email.
      </Text>

      <Button
        type="primary"
        block
        onClick={handleSubmit}
        style={{ backgroundColor: "#00B686", borderColor: "#00B686" }}
      >
        Submit
      </Button>
    </Modal>
  );
};

export default JoinModal;
