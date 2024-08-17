const Navbar = () => {
  return (
    <div className="w-full flex text-md justify-around bg-black py-2 px-3 items-center">
      <div className="flex gap-5 items-center">
        <div className="text-white flex gap-2 items-center">
          <div>Abstract</div>
          <div>|</div>
          <div>Help Center</div>
        </div>
      </div>
      <button className="border-gray-400 border-2 p-2 text-white outline-none">
        Submit a request
      </button>
    </div>
  );
};

export default Navbar;
