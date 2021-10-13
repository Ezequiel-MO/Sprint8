import { data } from "../data/data";

export const mergeStarshipsWithImages = (starships) => {
  const mergedStarships = [...starships];
  for (let i = 0; i < starships.length; i++) {
    mergedStarships[i].image = data[i].image;
  }
  return mergedStarships;
};
