import { v4 as uuidv4 } from "uuid";

const boardsData = [
  {
    id: uuidv4(),
    indicator_color: "#5030E5",
    title: "To Do",
    separator_color: "#5030E5",
    cardData: [
      {
        cardId: uuidv4(),
        chipColor: "rgba(223, 168, 116, 0.2)",
        chipTextColor: "#D58D49",
        chipText: "Low",
        title: "Brainstorming 1",
        desc:
          "Brainstorming brings team members' diverse experience into play. ",
        cardImgPath: "",
        avatarPath: "../../Assets/Card/user1.png",
        commentCount: "12",
        fileCount: "0"
      },
      {
        cardId: uuidv4(),
        chipColor: "rgba(223, 168, 116, 0.2)",
        chipTextColor: "#D58D49",
        chipText: "Low",
        title: "Brainstorming 2",
        desc:
          "Brainstorming brings team members' diverse experience into play. ",
        cardImgPath: "",
        avatarPath: "../../Assets/Card/user1.png",
        commentCount: "12",
        fileCount: "0"
      },
      {
        cardId: uuidv4(),
        chipColor: "rgba(223, 168, 116, 0.2)",
        chipTextColor: "#D58D49",
        chipText: "Low",
        title: "Brainstorming 3",
        desc:
          "Brainstorming brings team members' diverse experience into play. ",
        cardImgPath: "",
        avatarPath: "../../Assets/Card/user1.png",
        commentCount: "12",
        fileCount: "0"
      }
    ]
  },
  {
    id: uuidv4(),
    indicator_color: "#FFA500",
    title: "On Progress",
    separator_color: "#FFA500",
    cardData: [
      {
        cardId: uuidv4(),

        chipColor: "rgba(216, 114, 125, 0.1)",
        chipTextColor: "#D8727D",
        chipText: "High",
        title: "Research 1",
        desc: "User research helps you to create an optimal product for users.",
        cardImgPath: "",
        avatarPath: "../../Assets/Card/user1.png",
        commentCount: "10",
        fileCount: "3"
      },
      {
        cardId: uuidv4(),
        chipColor: "rgba(216, 114, 125, 0.1)",
        chipTextColor: "#D8727D",
        chipText: "High",
        title: "Research 2",
        desc: "User research helps you to create an optimal product for users.",
        cardImgPath: "",
        avatarPath: "../../Assets/Card/user1.png",
        commentCount: "10",
        fileCount: "3"
      }
    ]
  },
  {
    id: uuidv4(),
    indicator_color: "#76A5EA",
    title: "Done",
    separator_color: "#8BC48A",
    cardData: [
      {
        cardId: uuidv4(),
        chipColor: " rgba(131, 194, 157, 0.2)",
        chipTextColor: "#68B266",
        chipText: "Completed",
        title: "Design System",
        desc: "It just needs to adapt the UI from what you did before  ",
        cardImgPath: "",
        avatarPath: "../../Assets/Card/user1.png",
        commentCount: "12",
        fileCount: "15"
      }
    ]
  }
];
export default boardsData;
