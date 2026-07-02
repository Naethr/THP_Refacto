import React from 'react';
import { Button, Col, List, Modal, Row, Tag } from 'antd/es';

const PublicationTagsList = ({ label, items, prefix = '' }) => (
  <div>
    <b>{label}</b>
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <Tag>{`${prefix}${item}`}</Tag>
        </List.Item>
      )}
    />
  </div>
);

const PublicationPreviewModal = ({
  visible,
  post,
  onCancel,
  onEdit,
  onDelete,
}) => (
  <Modal
    width={520}
    visible={visible}
    onCancel={onCancel}
    footer={(
      <Row type="flex">
        <Col span={12} className="text-center">
          <Button type="ghost" icon="edit" onClick={onEdit}>Edit</Button>
        </Col>
        <Col span={12} className="text-center">
          <Button type="danger" icon="delete" onClick={onDelete}>Delete</Button>
        </Col>
      </Row>
    )}
  >
    <Row type="flex" align="middle">
      <Col xs={24} md={12} className="text-center">
        <img
          src={post.imageUrl}
          width={200}
          height={200}
          alt={post.description}
        />
      </Col>
      <Col xs={24} md={12}>
        <div>
          <b>Description: </b>
          <p>{post.description}</p>
        </div>
        <PublicationTagsList label="Hashtag:" items={post.hashtags} />
        <PublicationTagsList label="Mention:" items={post.mentions} prefix="@" />
      </Col>
    </Row>
  </Modal>
);

export default PublicationPreviewModal;
