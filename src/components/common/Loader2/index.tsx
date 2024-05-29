const Loader2 = () => {
  return (
    <div
      className="flex items-center justify-center bg-white dark:bg-black"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader2;
