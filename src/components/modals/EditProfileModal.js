import React, { useState } from 'react';
import { Col, Input, Modal, Row } from 'antd/es';

const EditProfileModal = ({
  visible,
  email: initialEmail,
  firstname: initialFirstname,
  lastname: initialLastname,
  phoneNumber: initialPhoneNumber,
  onCancel,
  onUpdate,
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [firstname, setFirstname] = useState(initialFirstname);
  const [lastname, setLastname] = useState(initialLastname);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  const handleUpdate = () => {
    onUpdate({
      email,
      firstname,
      lastname,
      phoneNumber,
    });
  };

  return (
    <Modal
      title="Edit your account"
      okText="Update"
      visible={visible}
      onOk={handleUpdate}
      onCancel={onCancel}
    >
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>EMail</b>
          <Input
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input
            id="firstname"
            type="text"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input
            id="lastname"
            type="text"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input
            id="email"
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default EditProfileModal;
