import React from 'react';
import { Col, Icon, Row } from 'antd/es';
import PublicationCard from './PublicationCard';

const PublicationsGrid = ({ posts, onSelectPost }) => (
  <Row type="flex" justify="center">
    <Col sm={18} xs={24}>
      <Col span={24} className="container text-center">
        <h2>
          <Icon type="save" />
          <span className="span-icon">Publications</span>
        </h2>
        {posts.map((post) => (
          <PublicationCard
            key={post.id}
            imageUrl={post.imageUrl}
            onClick={() => onSelectPost(post)}
          />
        ))}
      </Col>
    </Col>
  </Row>
);

export default PublicationsGrid;
