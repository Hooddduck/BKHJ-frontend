import React, { useState } from "react";
import axios from "axios";
import "./Irate.css";

const Irate = () => {
  const [loanLimit, setLoanLimit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [predictedRate, setPredictedRate] = useState(null);

  const handleLoanLimitChange = (event) => {
    setLoanLimit(event.target.value);
  };

  const handleLoanPeriodChange = (event) => {
    setLoanPeriod(event.target.value);
  };

  const handlePredict = () => {
    axios
      .post("http://127.0.0.1:5000/predict", {
        loanLimit: loanLimit, // Correct key: 'loanLimit'
        loanPeriod: loanPeriod, // Correct key: 'loanPeriod'
      })
      .then((response) => {
        setPredictedRate(response.data.predictedRate); // Correct key: 'predictedRate'
      })
      .catch((error) => {
        console.error("Prediction error:", error);
      });
  };

  return (
    <div>
      <h2>최적 금리 계산 하기 </h2>
      <div>
        <label>대출 한도</label>
        <input
          type="text"
          value={loanLimit}
          onChange={handleLoanLimitChange}
        />(만)
      </div>
      <div>
        <label>대출 기간</label>
        <input
          type="text"
          value={loanPeriod}
          onChange={handleLoanPeriodChange}
        />(년)
      </div>
      <button onClick={handlePredict}>Predict</button>
      {predictedRate && (
        <div>
          <h3>한도와 기간에 따른 최적 금리</h3>
          <p>{predictedRate}</p>
        </div>
      )}
    </div>
  );
};

export default Irate;