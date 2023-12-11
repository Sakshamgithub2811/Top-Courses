import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { apiUrl, filterData } from './data';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';

function App() {
  
  const [courses,setCourses] = useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        alert("something went Wrong");
      }
    }
    fetchData();
  },[]);

  return (
    <Fragment>
      <Navbar />
      <Filter filterData={filterData}/>
      <Cards courses={courses}/>
    </Fragment>
  );
}

export default App;
