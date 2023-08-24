import SideBar from "./components/sideBar"
import Main from "./components/main"

function App() {
  

  return (
    <div className="flex bg-[#ffffff]">
      <div className="basis-[12%] border h-[100vh]">
        <SideBar />
      </div>
      <div className="basis-[88%] border">
        <Main />
      </div>
    </div>
  );
}

export default App
