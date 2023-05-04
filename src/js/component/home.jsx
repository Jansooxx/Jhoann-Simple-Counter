import React from "react";
//create your first component
const Home = (props) => {

  return (
    
    <>
    
    
        <div className="text-center d-flex justify-content-center bg-dark">


          
        <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white me-4 fs-1">
                <i className="far fa-clock"></i>
              </div>
            </div>
          </div>

        <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white me-4 border-white fs-1 text-center w-100">
                {props.cienmil}
              </div>
            </div>
          </div>

          <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white me-4 border-white fs-1 text-center w-100">
                {props.diezmil}
              </div>
            </div>
          </div>

          <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white me-4 border-white fs-1 text-center w-100">
                {props.mil}
              </div>
            </div>
          </div>

          <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white me-4 border-white fs-1 text-center w-100">
                {props.centena}
              </div>
            </div>
          </div>

          <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white me-4 border-white fs-1 text-center w-100">
                {props.decena}
              </div>
            </div>
          </div>

          <div className="card bg-dark">
            <div className="card-body">
              <div className="text-white text-center me-4 border-dark fs-1 text-center w-100">
                {props.unidad}
              </div>
            </div>
          </div>


        </div>
    </>
  );
};

export default Home;
