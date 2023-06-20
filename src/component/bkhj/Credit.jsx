import React from 'react'
import "./Credit.css";

const Credit = () => {
  return (
    <>
   <section className='credit-section'>
    <div className='credit-wrapper'>
      {/* 버튼창 start*/}
      <div className='bkhj-top-menu'>
        <div>신용대출</div>
        <div>금리진단</div>
      </div>
      {/* 버튼창 end */}
      {/* 시작하기창 start*/}
      <div className='credit-start'></div>
    </div>
    {/* 시작하기창 end*/}
   </section>
    </>
  )
}

export default Credit