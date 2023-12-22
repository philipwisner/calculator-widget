import Calculator from "awesome-react-calculator";

const App = () => {
  const handleInput = (input) => {
    // console.log(
    //   `${input.expression} is shown in the calculator, User clicked the ${input.key}`
    // );
  };

  const onResultChange = (newResult) => {
    // console.log(newResult);
    // console.log(`${newResult.expression} is validated as ${newResult.result} `);
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Calculator onNewInput={handleInput} onResultChange={onResultChange}/>
    </div>
  );
};

export default App;
