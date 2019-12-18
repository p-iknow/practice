import React from "react";

class ClassExam extends React.Component {
  state = {
    test1: ["1", "2", "3", "4"],
    status: "STATTUS"
  };

  componentDidMount() {
    this.setState({ add: "CHANGED" });
  }

  render() {
    const { test1, status } = this.state;

    return (
      <>
        <div style={{ fontSize: 30 }}>{status}</div>
        <ul>
          {test1.map((char, i) => (
            <li key={i}>char</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ClassExam;
