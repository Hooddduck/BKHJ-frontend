import React, { useState, useEffect } from 'react';
import AuthService from '../services/auth.service';
import axios from "axios";

const Customization = () => {
  const [derivedValues, setDerivedValues] = useState(null);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    if (currentUser) {
      axios.get(`http://localhost:5000/api/customization?id=${currentUser.id}`)
        .then(response => {
          setDerivedValues(response.data);
        })
        .catch(error => {
          console.error('Error:', error.response.data);
        });
    }
  }, [currentUser]);

  return (
    <div>
     
   
      {derivedValues ? (
        <div>
          <h1>맞춤 상품 추천</h1>
          <p> 상품 번호: {derivedValues.predictions.join(', ')}</p>
          <p> 상품 이름: {derivedValues.result}</p>
        </div>
      ) : (
        <h1>잠시만 기다려주세요...</h1>
      )}
    </div>
  );
};

export default Customization;