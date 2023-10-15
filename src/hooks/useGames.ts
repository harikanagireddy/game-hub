import useData from "./useData";
import { Genre } from "./useGenres";

 
export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[] // parent_platforms is a array of objects with a property "platform" of type Platform for clear understanding check the api call in the network tab
    metacritic : number;
  }
  
 
  
const useGames =(selectedGenre : Genre |null, selectedPlatform:Platform|null) => 
useData<Game>('/games', 
{
  params:
  {
    genres:selectedGenre?.id,
    platforms: selectedPlatform?.id
  },

}, 
[selectedGenre?.id, selectedPlatform?.id]);
export default useGames;