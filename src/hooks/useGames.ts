import { GameQuery } from "../App";
import useData from "./useData";

 
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
  
 
  
const useGames =(gameQuery: GameQuery) => 
useData<Game>('/games', 
{
  params:
  {// not renaming below with gameQuery because gameQuery will pass object which will effect when we are passing individual params. i.e, we cannot fetch by individual genre or so
    genres:gameQuery.genre?.id,
    platforms: gameQuery.platform?.id,
    ordering : gameQuery.sortOrder,
    search: gameQuery.searchText
  },

}, 
[gameQuery]);
export default useGames;