import React, { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { Avatar } from "antd";
import styled from "styled-components";
const AvatarWrapper = (props) => {
  const [imageURL, setImageURL] = useState(props.imageURL);
  console.log("Image URL  >> ", imageURL);
  return (
    <AvatarContainer>
      <div className="display-container">
        {imageURL === null || imageURL === undefined ? (
          <div className="after">
            <label
              htmlFor="image-input"
              className="image-input-label font-regular text-light"
            >
              <IoCameraOutline />
            </label>
            <input
              type="file"
              accept="image/*"
              id="image-input"
              style={{ width: 0.0001, height: 0.0001 }}
              onChange={(e) => {
                setImageURL(props.handleImage(e.target.files));
              }}
            />
          </div>
        ) : (
          <Avatar alt="user-image" src={imageURL} />
        )}
      </div>
    </AvatarContainer>
  );
};

export default AvatarWrapper;
const AvatarContainer = styled.div`
  .display-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-block: 20px;
    position: relative;
    background-color: var(--background-theme);
  }
  .after {
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .image-input-label {
    display: flex;
    justif-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }
  .image-input-label svg {
    font-size: 6em;
  }

  .ant-avatar {
    width: inherit;
    height: inherit;
    border: 3px solid #fff;
    box-shadow: 0px 0px 10px 0px #a8a6a6;
  }
`;
