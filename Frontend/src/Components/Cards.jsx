import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../Services/Operations/cards";

const Cards = () => {
  const { cardData } = useSelector((state) => state.card);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCards())
  },[])
  return (
    <div className="w-[70%] p-10 py-20 grid grid-cols-2 gap-5 mx-auto">
      {cardData.map((element , index) => (
        <div key={index} className="w-[400px] h-[180px] mx-auto bg-gray-50 border border-gray-300 rounded-lg shadow-lg py-7">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 mx-4">
            {element?.title}
          </h3>
          <div className="bg-gray-300 w-full h-[1px] my-2"></div>
          <p className="text-gray-700 mx-4">{element?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
