import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  const content = favoritesCtx.totalFavorites > 0 ? <MeetupList meetups={favoritesCtx.favorites}/> : <p>No favorites yet.</p>;

  return <section>
    <h1>My Favorites</h1>
    {content}
  </section>;
}

export default FavoritesPage;
