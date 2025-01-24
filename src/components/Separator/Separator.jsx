const Separator = () => {
  return (
    <div className="relative my-4">
      <hr className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent border-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full shadow-lg"></div>
    </div>
  );
};

export default Separator;
