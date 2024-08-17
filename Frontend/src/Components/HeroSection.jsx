import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { SearchCards } from "../Services/Operations/cards";
import { RxCross2 } from "react-icons/rx";
import { setSearchFlag } from "../Slices/CardSlice";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  function searchHandler() {
    setFlag((prev) => !prev);
    dispatch(SearchCards(search));
  }

  function cancelHandler() {
    setFlag((prev) => !prev);
    dispatch(setSearchFlag(false));
    setSearch("")
  }
  return (
    <div className="h-[300px] w-full bg-custom-blue flex justify-center items-center flex-col">
      <div className="flex flex-col gap-4 p-4">
        <div className="text-5xl text-black font-semibold  py-2">
          How can we help ?
        </div>
        <div>
          <label
            htmlFor=""
            className="flex items-center mx-2 gap-1 bg-white  border-black border-1 shadow-md justify-around"
          >
            <IoMdSearch className="text-gray-300 text-3xl font-black ml-3" />
            <input
              type="text"
              value={search}
              placeholder={`Search`}
              className="p-[10px]  px-2 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            {flag ? (
              <RxCross2
                className="text-gray-300 text-xl font-black ml-3 hover:text-gray-900"
                onClick={cancelHandler}
              />
            ) : (
              <GrLinkNext
                className="text-gray-300 text-xl font-black ml-3 hover:text-gray-900"
                onClick={searchHandler}
              />
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
