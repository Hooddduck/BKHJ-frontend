import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Diagnosis.css";

const Diagnosis = () => {
  const [derivedValues, setDerivedValues] = useState(null);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`http://localhost:5000/api/customization?id=${currentUser.id}`)
        .then((response) => {
          setDerivedValues(response.data);
        })
        .catch((error) => {
          console.error("Error:", error.response.data);
        });
    }
  }, [currentUser]);

  return (
    <>
      <section className="credit-section">
        <div className="credit-wrapper">
          <div className="user-info">
            {currentUser && <p>{currentUser.username}</p>}
          </div>
          {/* 버튼창 start*/}
          <div className="bkhj-top-menu">
            <div className="credit-button">
              <Link to="/credit" className="button-link-credit">신용대출</Link>
            </div>
            <div className="diagnosis-button">
              <Link to="/diagnosis" className="button-link-diagnosis">금리진단</Link>
            </div>
            <div className="estate-button">부동산관리</div>
            <div className="loans-button">담보대출</div>
          </div>
          {/* 버튼창 end */}
          {/* 시작하기창 start*/}
          <div className="credit-start">
            <div className="credit-top">
              <div>
                <h3 className="bold-text">
                  나에게 맞는 최적 금리를 찾아보세요👍
                </h3>
              </div>
            </div>
            <div className="credit-bottom">
              <div className="mydiagnosis">
                <Link to="/diagnosis/Irarte" className="button-link-diagnosis">
                  내 금리 진단하기
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 시작하기창 end*/}
      </section>
    </>
  );
};
export default Diagnosis;
