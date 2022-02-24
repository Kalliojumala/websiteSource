export function sortByDate(listToSort) {
    listToSort.sort((a, b) => {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);

    return date2 - date1;
  })
  return listToSort;
  
};