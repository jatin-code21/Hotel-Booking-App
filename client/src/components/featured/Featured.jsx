import useFetch from "../../hooks/useFetch"; // import the custom hook
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Nashik,Akurdi,berlin" 
    // here in above url you can start with http://localhost:8800/api/ too but as its being used every time it has been set as proxy in package.json file
  );

  // console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4d/4c/b3/photo2jpg.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nashik</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://mediacdn.99acres.com/media1/15241/16/304836346O-1625547589912.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Akurdi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
