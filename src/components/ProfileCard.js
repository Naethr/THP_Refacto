import React from 'react';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';

const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
};

const ProfileDetail = ({ icon, children }) => (
  <p>
    <Icon type={icon} className="p-icon" />
    {children}
  </p>
);

const ProfileCard = ({ profile, onEditAccount, onUploadPicture }) => (
  <Row type="flex" align="middle" justify="center">
    <Col sm={16} xs={24}>
      <Card bordered>
        <Row type="flex" align="middle" justify="center">
          <Col md={14} sm={16} xs={24}>
            <Row type="flex" justify="space-between">
              <Col span={10} className="text-center">
                <Avatar size={100} icon="user" className="profil-pic" src={profile.profilePicture} />
                <h3>{`${profile.firstname} ${profile.lastname}`}</h3>
              </Col>
              <Col span={10}>
                <ProfileDetail icon="user">{profile.username}</ProfileDetail>
                <ProfileDetail icon="mail">{profile.email}</ProfileDetail>
                <ProfileDetail icon="phone">{profile.phoneNumber}</ProfileDetail>
                <ProfileDetail icon="calendar">{formatDate(profile.createdAt)}</ProfileDetail>
              </Col>
            </Row>
          </Col>
          <Col md={10} sm={16} xs={24} className="text-center">
            <Button type="ghost" icon="setting" onClick={onEditAccount}>Edit account</Button>
            <br />
            <br />
            <Button type="ghost" icon="upload" onClick={onUploadPicture}>Upload a picture</Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default ProfileCard;
