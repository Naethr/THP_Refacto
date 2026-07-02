import React, { useState } from 'react';
import { Col, Input, Modal, Row } from 'antd/es';
import MentionsTagsComponent from './MentionsTagsComponent';

const UploadPictureModal = ({ visible, onCancel, onUpload }) => {
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [mentions, setMentions] = useState('');

  const handleUpload = () => {
    onUpload(description, hashtags, mentions);
  };

  return (
    <Modal
      title="Upload a picture"
      okText="Upload"
      visible={visible}
      onOk={handleUpload}
      onCancel={onCancel}
    >
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Description:</b>
          <Input
            id="description"
            title="Description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Col>
      </Row>
      <MentionsTagsComponent
        type="mentions"
        title="Mention a user"
        setValue={setMentions}
      />
      <MentionsTagsComponent
        type="tags"
        value={hashtags}
        title="Hashtags"
        setValue={setHashtags}
      />
    </Modal>
  );
};

export default UploadPictureModal;
