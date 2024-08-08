const Cards = (param) => {
  return (
    <>
      <div className="m-2 flex justify-center">
        <div className="border-2 border-red-500 w-9/12 max-h-fit rounded-xl pb-2 hover:shadow-md hover:shadow-pink-500 duration-200 cursor-pointer">
          <div className="h-44">
            <img
              src={param.imageurl}
              alt="card img"
              className="h-full w-full rounded-t-xl"
            />
          </div>
          <div className="mt-2 mx-4 flex flex-col space-y-4">
            <div className="felx flex-row">
              <p>
                {param.name}
                <span className="ml-4 bg-pink-500 px-3 rounded-2xl">{param.category}</span>
              </p>
            </div>
            <div>
              <p>{param.title}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p>${param.price}</p>
              </div>
              <div>
                <button className="btn border-2 border-black hover:bg-pink-500 hover:border-pink-500 rounded-md px-2 py-1 hover:shadow-lg hover:shadow-black duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
