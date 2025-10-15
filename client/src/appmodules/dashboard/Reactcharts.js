import React,{Fragment, useEffect,useState} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';


function Reactcharts() {

const [mydata, setmydate] = useState([])
const [a,b]=useState([])
const [filterdata,updatefilter]=useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      // console.log(d.data.products);
      setmydate(d.data.products);
      updatefilter(d.data.products);

      const udata = d.data.products.map((u)=>{
        return u.category
      });
      const c = [...new Set(udata)];
      b(c);


    })
  }

  useEffect(()=>{
    myapi();
  },[])



const selectfilter = (e)=>{
  const filtervalue = filterdata.filter((f)=>{
    return f.category===e.target.value
  });
  setmydate(filtervalue);

}


  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <select className='form-select' onChange={selectfilter}>
              {a.map((d)=>{
                  return <option key={d}>{d}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={mydata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="red" />
           <Bar dataKey="price" fill="green" />
        </BarChart>
      </ResponsiveContainer>
      </Fragment>
  )
}

export default Reactcharts