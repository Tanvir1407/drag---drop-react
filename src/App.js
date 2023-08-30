import DragAndDrop from "./components/DragAndDrop";
import Title from "./components/Title";

function App() {

  return (
    <div >
      <div className="bg-red-500 mx-[200px] p-10 h-screen">
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
