import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify"


const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    }
    catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div
        className="bg-bgDark2 min-h-screen">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />

        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {
            loading ? <Spinner /> : <Cards courses={courses} category={category} />
          }
        </div>
      </div>
    </div>
  )
};

export default App;
