import React from "react";
import "./CandidateRating.css";

const CandidateRating2 = ({ fullName, image, voteCount, totalVotes }) => {
  return (
    <div>
      <li className=" one1 ">
        {/* <div className="result_candidate-image">
          <img src={image} alt={fullName} />
        </div> */}
        <small>{`${
          voteCount > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0
        }%`}</small>
        <div className="two2">
          <div className="three3">
            <div className="four4">
              {/* <small>{`${
                voteCount > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0
              }%`}</small> */}
              <span
                style={{
                  height: `${
                    voteCount > 0 ? (voteCount / totalVotes) * 100 : 0
                  }%`,
                }}
              ></span>
            </div>
          </div>

          <div>
            <h5>{fullName}</h5>{" "}
            <small>{`${voteCount} ${voteCount == 1 ? "vote" : "votes"}`}</small>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CandidateRating2;
