const Shimmer = () => {
  return (
    <>
    <div className="bg-gray-200 h-24"></div>
    <div  data-testid=" shimmer"className="restaurant-listss">
      {Array(20)
        .fill(" ")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
    </>
  );
};
export default Shimmer;
