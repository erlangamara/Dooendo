import React from 'react';
import {
  Link
} from 'react-router-dom';

import ProfileImage from '../assets/user-avatar.svg';

const Card = (props) => {
  const {habitList, page} = props;

  return (
    <>
      {habitList.map((data, index) => {
        return (
        <Link className="Main-page-card" key={index} to={`/detail/${data.id}`}>
          <div className="Main-page-card-content-1">
            {
              page === 'mainPage' ? ( 
                <img src={ProfileImage} alt="small profile"></img>
              ) : (
                ''
              )
            }
            <div className="Card-data">
              <h2>{data.title}</h2>
              <p>{data.creator_username}</p>
            </div>
          </div>
        </Link>
        )
      })
      }
    </>
  )
}

export default Card;