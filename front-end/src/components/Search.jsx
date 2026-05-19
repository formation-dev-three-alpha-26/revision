import { useDispatch, useSelector } from "react-redux";
import { setsearchvalue } from "../redux/plantSlice";
const Search = () => {
  const dispatch = useDispatch();
  const searchvalue = useSelector((state) => state.plants.searchvalue);
  return (
    <section className="search-section">
      <div className="search-row">
        <input
          onChange={(e) => dispatch(setsearchvalue(e.target.value))}
          type="search"
          placeholder="Search for plants, pots, or growing tips..."
        />
      </div>
    </section>
  );
};

export default Search;
