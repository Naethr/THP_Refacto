import React, { useState } from 'react';
import { Col, Input, Modal, Row } from 'antd/es';

const ProfileField = ({ label, id, value, onChange }) => (
  <Row type="flex" justify="center" className="input-container">
    <Col span={20}>
      <b>{label}</b>
      <Input
        id={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </Col>
  </Row>
);

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
      <ProfileField label="EMail" id="email" value={email} onChange={setEmail} />
      <ProfileField label="Firstname" id="firstname" value={firstname} onChange={setFirstname} />
      <ProfileField label="Lastname" id="lastname" value={lastname} onChange={setLastname} />
      <ProfileField label="Phone number" id="email" value={phoneNumber} onChange={setPhoneNumber} />
    </Modal>
  );
};

export default EditProfileModal;
