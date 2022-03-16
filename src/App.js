import "./styles.css";

export default function App() {
  return (
    <div className="bigger-app">
      <div className="App" style={{ paddingTop: "20px" }}>
        <div
          className="tab"
          style={{
            height: "56px",
            width: "56px",
            backgroundColor: "#323232",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            position: "relative"
          }}
        >
          <div
            style={{
              height: "30px",
              width: "30px",
              backgroundColor: "#F3A446"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
