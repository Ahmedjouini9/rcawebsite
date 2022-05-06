import React from 'react'
import ProfileCard from '../profileCard/profileCard'

export default function feed() {
    return (
        <div className="feed">
          <div className="feedWrapper">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
          </div>
        </div>
      );
    }
