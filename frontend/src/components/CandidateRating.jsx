import React from "react";
import "./CandidateRating.css";

const CandidateRating = ({ fullName, image, voteCount, totalVotes }) => {
  return (
    <>
      <div>
        <li className="result_candidate ">
          <div className="result_candidate-info">
            <div className="result_candidate-image">
              <img src={image} alt={fullName} />
            </div>
            <h5 className="h4">{fullName}</h5>
            <small className="h4">{`${voteCount} ${
              voteCount == 1 ? "vote" : "votes"
            }`}</small>
            <small className="h4">{`${
              voteCount > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0
            }%`}</small>
          </div>
        </li>
      </div>
    </>
  );
};

export default CandidateRating;
// import React from "react";

// const CandidateRating = ({ fullName, image, voteCount, totalVotes }) => {
//   return (
//     <>
//       <div>
//         <li className="result_candidate ">
//           <div className="result_candidate-image">
//             <img src={image} alt={fullName} />
//           </div>
//           <div className="result_candidate-info">
//             <h5 className="h5">{fullName}</h5>
//             <small>{`${voteCount} ${voteCount == 1 ? "vote" : "votes"}`}</small>

//             <div className="result_candidate-rating">
//               <div className="result_candidate-loader">
//                 <span
//                   style={{
//                     width: `${
//                       voteCount > 0 ? (voteCount / totalVotes) * 100 : 0
//                     }%`,
//                   }}
//                 ></span>
//               </div>
//               <small>{`${
//                 voteCount > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0
//               }%`}</small>
//             </div>
//           </div>
//         </li>
//       </div>
//     </>
//   );
// };

// export default CandidateRating;
