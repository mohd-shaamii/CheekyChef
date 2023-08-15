import React from "react";
import "../styles.css"; // Import your CSS file

const UserProfile = () => {
  return (
    <div className="container">
      <div className="profile-header">
        <div
          className="profile-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=2000"
            alt="User Avatar"
            className="avatar"
            height="150px"
          />
          <h1>Chef Shamil</h1>
          <p>Email: Cheekychefs@sectrets.in</p>
          <p>Joined: January 1, 2023</p>
          <button className="edit-profile-button">Edit Profile</button>
        </div>
      </div>

      <div className="profile-sections" style={{ display: "flex" }}>
        <div className="profile-section" style={{ flex: 1, marginRight: "10px" }}>
          <h2>Saved Recipes</h2>
          <div className="recipe-list">
            {/* Display list of saved recipes */}
            {/* You can map over user's saved recipes and display them */}
            <div className="recipe-card">
              <img
                src="https://www.whiskaffair.com/wp-content/uploads/2021/04/Tandoori-Chicken-2-3-500x500.jpg"
                alt="Recipe"
                className="recipe-image"
                height={"200px"}
              />
              <div className="recipe-details">
                <h3>Tandoori Chicken</h3>
                <p>Prep Time: 90 minutes</p>
                <p>Difficulty: Medium</p>
                <button className="view-recipe-button">View Recipe</button>
              </div>
            </div>
            {/* Repeat for other saved recipes */}
          </div>
        </div>
        <div className="profile-section" style={{ flex: 2, marginLeft: "10px" }}>
          <h2>My Recipes</h2>
          <div className="recipe-list" style={{ display: "flex" }}>
            {/* Display list of user's own recipes */}
            {/* You can map over user's own recipes and display them */}
            <div className="recipe-card">
              <img src="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg"
                alt="Recipe"
                className="recipe-image" 
                height={"200px"}
              />
              <div className="recipe-details">
                <h3>Butter Chicken</h3>
                <p>Prep Time: 45 minutes</p>
                <p>Difficulty: Medium</p>
                <button className="edit-recipe-button">Edit Recipe</button>
              </div>
            </div>
            {/* Repeat for other own recipes */}
            <div className="recipe-card">
              <img
                src="https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg"
                alt="Recipe"
                className="recipe-image"
                height={"200px"}
              />
              <div className="recipe-details">
                <h3>Gobi Manchurian</h3>
                <p>Prep Time: 25 minutes</p>
                <p>Difficulty: Easy</p>
                <button className="edit-recipe-button">Edit Recipe</button>
              </div>
            </div>
            {/* Repeat for other own recipes */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
