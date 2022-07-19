import react from "react";

function SingleCar({
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors,
}) {


return (
    <div>
    <li
        style={{
        border: '1px solid black',
        marginBottom: '5px',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
        <span>Brand: {brand}</span>
      <span>Model: {model}</span>
      <span>Year: {year}</span>
      <span>Max Speed: {maxSpeed}</span>
      <span>{isAutomatic ? 'Is' : 'Not'} Automatic </span>
      <span>Engine: {engine}</span>
      <span>Number of doors: {numberOfDoors}</span>

    </li>
</div>
)
}
export default SingleCar;

