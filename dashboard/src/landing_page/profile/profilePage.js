import React from 'react';
import ProfileCard from "./profileCard";

function ProfilePage() {
  return (
    <div className='bg-white' style={{ position: "relative", height: "90vh", width: "60%", left: "40%", bottom: "90vh" }}>
      <div className="container py-5">
        <div className="d-flex justify-content-center">
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;

