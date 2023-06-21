import Chip from "../Chip/Chip";
import "./Card.css";
import { ReactComponent as MenuIcon } from "../../Assets/Icons/Card/menu.svg";
import { ReactComponent as CommentIcon } from "../../Assets/Icons/Card/comment.svg";
import { ReactComponent as FolderIcon } from "../../Assets/Icons/Card/folder.svg";
import { useState } from "react";
import Avatar from "antd/es/avatar/avatar";
import Dropdown from "../Dropdown/Dropdown";
import { Modal } from "antd";

const Card = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOnClick = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // console.log(props.avatarPath);
  return (
    <>
      {isModalOpen ? (
        <Modal
          title="Enter Details"
          onOk={handleOk}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <h3>Coming Soon...</h3>
        </Modal>
      ) : (
        <></>
      )}
      <div className="card" onClick={showModal}>
        <div className="card_top">
          <Chip
            chipColor={props.chipColor}
            chipTextColor={props.chipTextColor}
            chipText={props.chipText}
          />

          <MenuIcon
            className="card_top_menu"
            onClick={(e) => handleOnClick(e)}
          />

          {showDropdown && (
            <Dropdown
              class="card_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeCard(props.boardId, props.id)}>
                Delete Card
              </p>
            </Dropdown>
          )}
        </div>
        <div className="card_content">
          <p className="card_title">{props.title}</p>
          <img className="card_img" src={props.cardImgPath} alt="" />
          <p className="card_content">{props.desc}</p>
        </div>
        <div className="card_bottom">
       
            <Avatar src={props.avatarPath} />
          
          <div className="card_bottom_right card_bottom">
            <div className="card_comment">
              <CommentIcon
                style={{
                  marginRight: "5px"
                }}
              />
              <p
                style={{
                  marginRight: "14px"
                }}
              >
                {props.commentCount} comments
              </p>
            </div>
            <div className="card_file card_comment">
              <FolderIcon
                style={{
                  marginRight: "5px"
                }}
              />
              <p>{props.fileCount} Files</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
