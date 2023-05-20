import React from "react";
import { useState } from "react";
import "./Style.css";
import { Button } from "react-bootstrap";

function Article() {
  const [inputArray, setInputArray] = useState([]);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  console.log("aaaaaaaa", inputArray);

  const handleInput1Change = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInputValue2(event.target.value);
  };

  const handleButtonClick = () => {
    const newObj = { input1: inputValue1, input2: inputValue2 };
    setInputArray([...inputArray, newObj]);
    setInputValue1("");
    setInputValue2("");
  };

  return (
    <div className="row m-1 ArticlePage">
      <div className="col-12 col-lg-5  userinput">
        <h2 className="ArticleTitle">
          Share your Thoughts, knowledge and experience about Robotics
        </h2>
        <input
          className="name"
          type="text"
          value={inputValue1}
          onChange={handleInput1Change}
          placeholder="Enter Name"
        />
        <textarea
          className="article"
          rows={4}
          cols={50}
          type="text"
          value={inputValue2}
          onChange={handleInput2Change}
          placeholder="write our thoughts"
        />
        <Button onClick={() => handleButtonClick()}>POST</Button>
      </div>
      <div className="col-12 col-lg-7  userinput">
        <h1 className="explore">Explore Shared information by the peaple </h1>

        <div className="article11">
          {inputArray.map((obj, index) => (
            <p newObj={index}>
              <div className="userName">{obj.input1}</div>
              <div className="theirArticle">{obj.input2}</div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
