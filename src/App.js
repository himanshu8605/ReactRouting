import React, { Component, useEffect } from "react";
import { Row, Col, Card, CardGroup } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    const url = "https://api.punkapi.com/v2/beers";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true
      });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        {items.map((item) => (
          <CardGroup style={{height:'auto',width:'400px'}} sm={8} >
            <Card  className="card" key={item.id}>
              {/* <Card.Img variant="top" style={{height:'100px',width:'200px'}} src={item.image_url} /> */}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
               {item.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Volume : {item.volume.value}{item.volume.unit}</small>
              </Card.Footer>
            </Card>     
          </CardGroup>
        ))}
      </div>
    );
  }
}

export default App;
