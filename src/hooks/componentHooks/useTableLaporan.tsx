export const useTableLaporan = () => {
  const handleNavigateToDetail = (id: string) => {
    console.log("Navigate to detail", id);
  };

  return { handleNavigateToDetail };
};
