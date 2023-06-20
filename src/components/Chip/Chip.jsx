import "./Chip.css";

const Chip = ({ chipColor, chipTextColor, chipText }) => {
  console.log(chipTextColor);
  return (
    <>
      <div
        className="chip"
        style={{
          backgroundColor: `${chipColor}`
        }}
      >
        <p
          className="chip_content"
          style={{
            color: `${chipTextColor}`
          }}
        >
          {chipText}
        </p>
      </div>
    </>
  );
};

export default Chip;
