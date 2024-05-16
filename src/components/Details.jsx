// Details.jsx

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {

    const location = useLocation();

    console.log(location);

    return (<>
    <Navbar/>
        <div className="flex p-4">

            <img src={location?.state?.data?.image} className="w-80 h-80" />
            <div>
                <h1 className="font-bold text-3xl">₹  {location?.state?.data?.price}</h1>
                <h1 className="mt-5"><span className="font-semibold">Category</span> : {location?.state?.data?.category}</h1>
                <h1 className="mt-5"><span className="font-semibold">Title</span> : {location?.state?.data?.title}</h1>
                <h1 className="mt-5"><span className="font-semibold">Description</span> : {location?.state?.data?.description}</h1>
            </div>
        </div>
        </>
    );
};

export default Details;
