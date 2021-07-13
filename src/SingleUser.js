import React from 'react';
import FlagIcon from './us-flag-icon.png';
import MaleIcon from './male-icon.png';
import FemaleIcon from './female-icon.png';

function SingleUser(props) {
  const userImage = '';
  const userTitle = '';
  const userFName = '';
  const userLName = '';
  const userGender = '';
  const userState = '';
  const userCity = '';
  const userCountry = '';
  const userPhone = '';
  const userEmail = '';

  return <div>
            <img src={props.userImage} className="userImage"/>
                <div className="singleUserInfo">
                <div>
                    {`${props.userGender}` === "male"
                    ?
                    <img src={MaleIcon} className="genderIcon"/>
                    :
                    <img src={FemaleIcon} className="genderIcon"/>
                    }
                    <h3>{props.userTitle} {props.userFName} {props.userLName}</h3>
                </div>
                <span><b>
                    {`${props.userCountry}` === "United States"
                    ?
                    <img src={FlagIcon} className="flagIcon"/>
                    :
                    <img src=""/>
                    }
                    {props.userCity}, {props.userState}</b></span>
                <span>Tel: {props.userPhone}</span>
                <span>Email: {props.userEmail}</span>
            </div>
        </div>
}

export default SingleUser;