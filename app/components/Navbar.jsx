const Navbar = () => {
  return (
    <nav className="border-b flex justify-between drop-shadow-sm p-4 py-5 items-center bg-white">
      <div className="text-2xl h-fit flex p-2 ml-2">
        <i className="lni lni-menu"></i>
      </div>
      <div className="flex items-center gap-2 border rounded-md text-sm font-medium px-3 py-2">
        <i className="lni lni-shift-right text-md"></i>
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
