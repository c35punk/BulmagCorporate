import React from "react";

function HistoryPoints(props) {
  return (
    <div className="container">
      {props.data.map((data) => {
        return (
          <>
            <div id="timeline">
              <div className="timeline-item">
                <div className="blur--hover">
                  <div className="blur-item  mt-5 on-screen">
                    <h4 className="text-darker">{data.title}</h4>
                  </div>
                  <div className="blur-hidden h5">
                    {" "}
                    <h1 className=" text-primary">{data.year}</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default HistoryPoints;
