// Home.jsx
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="grid grid-cols-4 p-5">
      {props.products
        .filter((data) =>
          data.title.includes(props.search ? props.search : props.menu)
        )
        .map((data) => (
          <Link to="/details" state={{ data: data }} key={data.id}>
            <div className="w-72 h-90 border border-spacing-1 p-2 ml-3 mt-3 flex flex-col items-center">
              <img src={data.image} className="w-40 h-40 object-cover" />
              <h1 className="font-bold text-xl">₹ {data.price}</h1>
              <h1>{data.title}</h1>
              <h1>{data.category}</h1>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;
