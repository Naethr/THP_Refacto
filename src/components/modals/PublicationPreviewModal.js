import React from 'react';
import { Button, Col, List, Modal, Row, Tag } from 'antd/es';

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
        <div>
          <b>Hashtag:</b>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={post.hashtags}
            renderItem={(tag) => (
              <List.Item>
                <Tag>{`${tag}`}</Tag>
              </List.Item>
            )}
          />
        </div>
        <div>
          <b>Mention:</b>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={post.mentions}
            renderItem={(user) => (
              <List.Item>
                <Tag>{`@${user}`}</Tag>
              </List.Item>
            )}
          />
        </div>
      </Col>
    </Row>
  </Modal>
);

export default PublicationPreviewModal;
