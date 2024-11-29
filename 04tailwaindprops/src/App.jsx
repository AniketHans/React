import Card from "./components/Card";
function App() {
  return (
    <div className="flex-row place-items-center">
      <h1 className="bg-green-400 p-4 rounded-xl">Tailwind test</h1>
      <Card
        username="Aniket Hans" //passing normal value
        someArray={[1, 2, 3]} //passing array
        someobject={{ age: 25 }} //passing object
        imagename="High Monkeys"
      />
    </div>
  );
}

export default App;
