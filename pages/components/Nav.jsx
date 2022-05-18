const Nav = ({ className }) => {
  const linkClasses =
    "rounded-3xl pt-2 pb-2 pl-4 pr-4 flex w-fit justify-center items-center text-lg leading-6";

  return (
    <>
      <div className={className}>
        <div className="flex w-fit p-2 rounded-full bg-white shadow-sm">
          <div className={`text-white bg-black ${linkClasses}`}>Home</div>

          <div className={linkClasses}>Work</div>
          <div className={linkClasses}>About</div>
          <div className={linkClasses}>Contact</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
