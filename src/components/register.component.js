import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
       필수 정보입니다.
      </div>
    );
  }
};


//회원가입 아이디
const vusername = vusername => {
  if (vusername.length < 3 || vusername.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        아이디 : 3~20자 영문 소문자,숫자를 사용하세요.
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        유효한 이메일이 아닙니다.
      </div>
    );
  }
};

const password = password => {
  if (password.length < 6 || password.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        비밀번호 : 6자이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.
      </div>
    );
  }
};
//회원가입 성명
const vusersId = vusersId => {
  if(vusersId.length < 2 || vusersId.length > 9) {
    return (
      <div className="alert alert-danger" role="alert">
        성명을 입력해주세요.
      </div>
    );
  }
}
const vnickname = vnickname => {
  if(vnickname.length < 2 || vnickname.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The usernickname must be between 10 and 20 characters.
      </div>
    );
  }
}
const vzoneCode = vzoneCode => {
  if(vzoneCode.length < 2 || vzoneCode.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The zonecode must be between 10 and 20 characters.
      </div>
    );
  }
}
const vaddress = vaddress => {
  if(vaddress.length < 2 || vaddress.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The address must be between 10 and 20 characters.
      </div>
    );
  }
}
const vdetailaddress = vdetailaddress => {
  if(vdetailaddress.length < 2 || vdetailaddress.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The detailAddress must be between 10 and 20 characters.
      </div>
    );
  }
}
const vlegalDong = vlegalDong => {
  if(vlegalDong.length < 2 || vlegalDong.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The legalDong must be between 10 and 20 characters.
      </div>
    );
  }
}
const vphonenumber  = vphonenumber => {
  if(vphonenumber.length < 5 || vphonenumber.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        "000-0000-0000" 입력해주세요. 
      </div>
    );
  }
}
const vresidentnumber = vresidentnumber => {
  if(vresidentnumber.length < 12 || vresidentnumber.length > 14) {
    return (
      <div className="alert alert-danger" role="alert">
        "-" 없이 13자리 입력해주세요.
      </div>
    );
  }
}


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsersId = this.onChangeUsersId.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeZoneCode = this.onChangeZoneCode.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDetailaddress = this.onChangeDetailaddress.bind(this);
    this.onChangeLegalDong = this.onChangeLegalDong.bind(this);
    this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
    this.onChangeResidentnumber = this.onChangeResidentnumber.bind(this);

    
    

    this.state = {
      username: "",
      email: "",
      password: "",
      usersId: "",
      nickname: "",
      zoneCode: "",
      address: "",
      detailaddress: "",
      legalDong: "",
      phonenumber: "",
      residentnumber: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeUsersId(e) {
    this.setState({
      usersId: e.target.value
    });
  }
  onChangeNickname(e) {
    this.setState({
      nickname: e.target.value
    });
  }
  onChangeZoneCode(e) {
    this.setState({
      zoneCode: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeDetailaddress(e) {
    this.setState({
      detailaddress: e.target.value
    });
  }
  onChangeLegalDong(e) {
    this.setState({
      legalDong: e.target.value
    });
  }
  onChangePhonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    });
  }
  onChangeResidentnumber(e) {
    this.setState({
      residentnumber: e.target.value
    });
  }
       

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.usersId,
        this.state.nickname,
        this.state.zoneCode,
        this.state.address,
        this.state.detailaddress,
        this.state.legalDong,
        this.state.phonenumber,
        this.state.residentnumber                
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <>
      <div className="register-wrapper">
      <div className="col-md-12">
        <div className="card card-container">
        <div className="logo-container">
              <Link to="/">
                <img
                  src="./logo2.png"
                  alt=""
                  width={150}
                />
              </Link>
            </div>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">아이디</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                

                <div className="form-group">
                  <label htmlFor="password">비밀번호</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, password]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">이메일</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="usersId">성명</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="usersId"
                  value={this.state.usersId}
                  onChange={this.onChangeUsersId}
                  validations={[required, vusersId]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="nickname">닉네임 </label>
                 <Input
                  type="text"
                  className="form-control"
                  name="nickname"
                  value={this.state.nickname}
                  onChange={this.onChangeNickname}
                  validations={[required, vnickname]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="zoneCode">지번</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="zoneCode"
                  value={this.state.zoneCode}
                  onChange={this.onChangeZoneCode}
                  validations={[required, vzoneCode]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="address">주소</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  validations={[required, vaddress]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="detailaddress">상세주소</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="detailaddress"
                  value={this.state.detailaddress}
                  onChange={this.onChangeDetailaddress}
                  validations={[required, vdetailaddress]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="legalDong">법정동</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="legalDong"
                  value={this.state.legalDong}
                  onChange={this.onChangeLegalDong}
                  validations={[required, vlegalDong]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="phonenumber">핸드폰번호</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.onChangePhonenumber}
                  validations={[required, vphonenumber]}
                  />
                </div>

                <div className="form-group">
                 <label htmlFor="residentnumber">주민등록번호</label>
                 <Input
                  type="text"
                  className="form-control"
                  name="residentnumber"
                  value={this.state.residentnumber}
                  onChange={this.onChangeResidentnumber}
                  validations={[required, vresidentnumber]}
                  />
                </div>

               
               
                <div className="form-group">
                  <button className="btn btn-primary btn-block">가입하기</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}😊
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      </div>
      </>
    );
  }
}
