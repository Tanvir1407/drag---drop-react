import DragAndDrop from "./components/DragAndDrop";
import Title from "./components/Title";

function App() {

  return (
    <div >
      <div className="bg-red-500 mx-[200px] sm:mx-[0px] p-10 sm:p-2 ">
        <div className="flex justify-center">
          <Title />
        </div>
          <div className="mt-10">
            <DragAndDrop/>
          </div>
      </div>
    </div>
  );
}

export default App;
