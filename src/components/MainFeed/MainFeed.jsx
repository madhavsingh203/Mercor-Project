import "./MainFeed.css";
import { ReactComponent as EditIcon } from "../../Assets/Icons/MainFeed/edit.svg";
import { ReactComponent as LinkIcon } from "../../Assets/Icons/MainFeed/link.svg";
import { ReactComponent as FilterIcon } from "../../Assets/Icons/MainFeed/filter.svg";
import { ReactComponent as DayIcon } from "../../Assets/Icons/MainFeed/day.svg";
import { ReactComponent as DownArrowIcon } from "../../Assets/Icons/downArrow.svg";
import { ReactComponent as ShareIcon } from "../../Assets/Icons/MainFeed/share.svg";
import { ReactComponent as UserGroup } from "../../Assets/Icons/MainFeed/userGroup.svg";
import { ReactComponent as Equal } from "../../Assets/Icons/MainFeed/equal.svg";
import { ReactComponent as FourDot } from "../../Assets/Icons/MainFeed/fourDot.svg";

import Board from "../Board/Board";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import boardsData from "../mockData";
import Grid from "@mui/material/Grid";

const MainFeed = () => {
  // const [boards, setBoards] = useState(boardsData);
  const [data, setData] = useState(boardsData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceBoardIndex = data.findIndex(
        (e) => e.id === source.droppableId
      );
      const destinationBoardIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceBoard = data[sourceBoardIndex];
      const destinationBoard = data[destinationBoardIndex];

      const sourceCard = [...sourceBoard.cardData];
      const destinationCard = [...destinationBoard.cardData];

      const [removed] = sourceCard.splice(source.index, 1);
      destinationCard.splice(destination.index, 0, removed);

      data[sourceBoardIndex].cardData = sourceCard;
      data[destinationBoardIndex].cardData = destinationCard;

      
      setData(data);
    }
  };

  const removeCard = (bid, cid) => {
    const index = boardsData.findIndex((item) => item.id === bid);

    if (index < 0) return;

    const tempBoards = [...boardsData];
    const cards = tempBoards[index].cardData;

    const cardIndex = cards.findIndex((item) => item.cardId === cid);

    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setData(tempBoards);
  };

  return (
    <>
      <div className="container-main-feed">
        <div className="btn-div-container">
          <div className="heading">
            <p className="mobile-heading">Mobile App</p>
            <EditIcon className="icon" />
            <LinkIcon className="icon" />
          </div>
          <div className="invite-section-container">
            <button>+</button>
            <p>Invite</p>
            <UserGroup className="user-grp"/>
          </div>
        </div>
        {/*Going for the stuff below Mobile App heading  */}
        <div className="btn-div-container">
          <div className="btn-div">
            <button className="main-feed-btn">
              <FilterIcon />
              <p>Filter</p>
              <DownArrowIcon />
            </button>
            <button className="main-feed-btn">
              <DayIcon />
              <p>Today</p>
              <DownArrowIcon />
            </button>
          </div>
          <div className="btn-div-right-container">
          <div className="btn-div-right">
            <ShareIcon />
            <div
              style={{
                height: "28px",
                borderRight: "1px solid #787486",
                margin: "0 20px 0 20px"
              }}
            ></div>
            <Equal
              style={{
                marginRight: "22px"
              }}
            />
            <FourDot className="four-dot"/>
          </div>
          </div>
       
        </div>
        <Grid container>
          <div>
            <Grid
              style={{
                marginLeft: "20px",
                marginTop: "20px"
              }}
              container
              spacing={4}
              item
              xs={12}
              className="mainfeed_board"
            >
              <DragDropContext onDragEnd={onDragEnd}>
                {data.map((item, index) => (
                  <Droppable key={item.id} droppableId={item.id}>
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        <Board
                          key={item.id}
                          indicator_color={item.indicator_color}
                          title={item.title}
                          separator_color={item.separator_color}
                          id={item.id}
                          boardsData={item.cardData}
                          cardData={item.cardData}
                          removeCard={removeCard}
                        />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default MainFeed;
