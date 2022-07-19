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
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Year: {year}</p>
        <p>Max Speed: {maxSpeed}</p>
        <p>{isAutomatic ? 'Is' : 'Not'} Automatic</p>
        <p>Engine: {engine}</p>
        <p>Number of doors: {numberOfDoors}</p>

    </li>
</div>
)
}
export default SingleCar;

