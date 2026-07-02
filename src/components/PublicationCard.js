import React from 'react';
import { Card } from 'antd/es';

const PublicationCard = ({ imageUrl, onClick }) => (
  <Card bordered className="card-pubs" onClick={onClick}>
    <img src={imageUrl} width={200} height={200} alt={imageUrl} />
  </Card>
);

export default PublicationCard;
