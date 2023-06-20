import React, { useState } from "react";
import axios from "axios";

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
      <h2>금리 예측하기</h2>
      <div>
        <label>대출 한도</label>
        <input
          type="text"
          value={loanLimit}
          onChange={handleLoanLimitChange}
        />
      </div>
      <div>
        <label>대출 기한</label>
        <input
          type="text"
          value={loanPeriod}
          onChange={handleLoanPeriodChange}
        />
      </div>
      <button onClick={handlePredict}>예상 금리</button>
      {predictedRate && (
        <div>
          <h3> ★☆★☆★☆★☆★ </h3>
          <p>{predictedRate} %</p>
        </div>
      )}
    </div>
  );
};

export default Irate;