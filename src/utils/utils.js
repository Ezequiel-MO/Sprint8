export const mergeWithImages = (array, data) => {
  const mergedArray = [...array];
  for (let i = 0; i < array.length; i++) {
    mergedArray[i].image = data[i].image;
  }
  return mergedArray;
};
