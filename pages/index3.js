const HomePage = () => {
  return (
    <div>
      <div className="h-[100vh] flex">
        <div className="w-1/2 h-full bg-pink-400">
          <div className="h-1/2 bg-gray-400"></div>
          <div className="h-1/2 bg-red-700 flex flex-col items-end">
            <h1 className="text-4xl">Name</h1>
            <h1 className="text-4xl">Name</h1>
            <h1 className="text-4xl">Name</h1>
            <h1 className="text-4xl">Name</h1>
          </div>
        </div>

        <div className="w-1/2 h-full bg-blue-400"></div>
      </div>
    </div>
  );
};

export default HomePage;
