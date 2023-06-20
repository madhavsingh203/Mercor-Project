import Card from "../Card/Card";
import "./Board.css";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const Board = (props) => {
  const { boardsData } = props;
  const [showModal, setShowModal] = useState(false);
  const data = boardsData;

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="board">
        <div className="board_top">
          <div className="board-flex-start">
            <div
              className="board_indicator"
              style={{
                background: `${props.indicator_color}`,
                border: `3px solid ${props.indicator_color}`
              }}
            ></div>
            <p className="board_heading">{props.title}</p>
            <button className="board_count">{data.length}</button>
          </div>
          {props.id === "1" ? (
            <>
              <button className="board_add_button">+</button>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          className="board_separator"
          style={{ border: `3px solid ${props.separator_color}` }}
        ></div>
        <div className="board_card custom-scroll">
          {data.map((card, index) => (
            <Draggable
              key={card.cardId}
              draggableId={card.cardId}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    ...provided.draggableProps.style,
                    opacity: snapshot.isDragging ? "0.5" : "1"
                  }}
                >
                  <Card
                    key={card.cardId}
                    id={card.cardId}
                    chipColor={card.chipColor}
                    chipText={card.chipText}
                    chipTextColor={card.chipTextColor}
                    title={card.title}
                    desc={card.desc}
                    cardImgPath={card.cardImgPath}
                    avatarPath={card.avatarPath}
                    commentCount={card.commentCount}
                    fileCount={card.fileCount}
                    boardId={props.id}
                    removeCard={props.removeCard}
                    closeModal={handleCloseModal}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
