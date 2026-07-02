import React from 'react';
import { Card, Col, Icon, Row } from 'antd/es';

const PublicationsGrid = ({ posts, onSelectPost }) => (
  <Row type="flex" justify="center">
    <Col sm={18} xs={24}>
      <Col span={24} className="container text-center">
        <h2>
          <Icon type="save" />
          <span className="span-icon">Publications</span>
        </h2>
        {posts.map((post) => (
          <Card
            key={post.id}
            bordered
            className="card-pubs"
            onClick={() => onSelectPost(post)}
          >
            <img src={post.imageUrl} width={200} height={200} alt={post.imageUrl} />
          </Card>
        ))}
      </Col>
    </Col>
  </Row>
);

export default PublicationsGrid;
