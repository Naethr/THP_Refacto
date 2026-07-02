// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from 'react';
import { message } from 'antd/es';
import EditProfileModal from './components/modals/EditProfileModal';
import PublicationPreviewModal from './components/modals/PublicationPreviewModal';
import UploadPictureModal from './components/modals/UploadPictureModal';
import ProfileCard from './components/ProfileCard';
import PublicationsGrid from './components/PublicationsGrid';
import { initialProfileData } from './data/profileData';

const App = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(initialProfileData.posts[0]);
  const { posts, ...profile } = profileData;

  const openPreview = (post) => {
    setSelectedPost(post);
    setPreviewModalVisible(true);
  };

  const updatePicture = () => {
    alert("J'update la publcation avec l'id : " + selectedPost.id);
  };

  const deletePicture = () => {
    alert("Je supprime la publcation avec l'id : " + selectedPost.id);
  };

  const uploadPicture = (description, hashtags, mentions) => {
    alert("J'upload une image avec la description : " + description + " et les hashtags " + hashtags + " et les mentions " + mentions);
  };

  const updateProfile = (updatedProfile) => {
    setProfileData((currentProfile) => ({
      ...currentProfile,
      ...updatedProfile,
    }));
    setEditProfileModalVisible(false);
    message.success('Profile well updated', 3);
  };

  return (
    <div style={{ margin: 50 }}>
      <PublicationPreviewModal
        visible={previewModalVisible}
        post={selectedPost}
        onCancel={() => setPreviewModalVisible(false)}
        onEdit={updatePicture}
        onDelete={deletePicture}
      />
      <UploadPictureModal
        visible={uploadModalVisible}
        onCancel={() => setUploadModalVisible(false)}
        onUpload={uploadPicture}
      />
      <EditProfileModal
        visible={editProfileModalVisible}
        email={profileData.email}
        firstname={profileData.firstname}
        lastname={profileData.lastname}
        phoneNumber={profileData.phoneNumber}
        onCancel={() => setEditProfileModalVisible(false)}
        onUpdate={updateProfile}
      />
      <ProfileCard
        profile={profile}
        onEditAccount={() => setEditProfileModalVisible(true)}
        onUploadPicture={() => setUploadModalVisible(true)}
      />
      <PublicationsGrid posts={posts} onSelectPost={openPreview} />
    </div>
  );
};

export default App;
