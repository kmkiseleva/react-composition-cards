import "./App.css";
import Card from "./components/Card/Card";
import CardImage from "./components/Card/CardImage";
import CardTitle from "./components/Card/CardTitle";
import CardText from "./components/Card/CardText";
import Button from "./components/Card/Button";
import firstImage from "./img/pic1.jpg";

function App() {
  return (
    <div
      className="container mt-2 p-2 d-flex flex-wrap justify-content-center"
      style={{ width: "400px" }}
    >
      <Card
        style={{
          width: "300px",
          marginBottom: "10px",
          background: "grey",
          color: "white",
        }}
      >
        <CardImage imageURL={firstImage} />
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Learn More</Button>
      </Card>
      <Card style={{ width: "300px", marginBottom: "10px" }}>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content
        </CardText>
        <Button>Go to description</Button>
      </Card>
      <Card
        style={{
          width: "300px",
          marginBottom: "20px",
          background: "green",
          color: "white",
        }}
      >
        <CardTitle>Success card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Learn More</Button>
      </Card>
    </div>
  );
}

export default App;
