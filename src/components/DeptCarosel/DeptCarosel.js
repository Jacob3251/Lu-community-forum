import React from "react";

const DeptCarosel = () => {
  return (
    <div>
      <div className="carousel w-5/6 mx-auto rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2020/03/1111111-745x385.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2019/07/3-745x385.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2022/03/received_383356339963226-745x385.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2022/03/received_991091338468482-745x385.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h3 className="w-5/6 mx-auto my-5">
        Leading University (Bengali: লিডিং ইউনিভার্সিটি) or LU is a private
        university of Bangladesh. It was established in 2001 under the Private
        University Act 1992.[2] The campus of LU is located in Ragib Nagar,
        Kamal Bazar, South Surma, Sylhet.
      </h3>
    </div>
  );
};

export default DeptCarosel;
