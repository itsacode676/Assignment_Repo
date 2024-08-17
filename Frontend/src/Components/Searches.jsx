import { useSelector } from "react-redux";

const Searches = () => {
  const { searchData } = useSelector((state) => state.card);
  return (
    <div className="w-[70%] p-10 py-20 grid grid-cols-2 gap-5 mx-auto">
      {searchData.map((element, index) => (
        <div
          key={index}
          className="w-[400px] h-[180px] mx-auto bg-gray-50 border border-gray-300 rounded-lg shadow-lg py-7"
        >
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

export default Searches;
