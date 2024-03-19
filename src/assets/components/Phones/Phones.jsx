import axios from "axios";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RotatingTriangles } from 'react-loader-spinner'

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const[isLoading,setIsLoading] = useState(true)
  console.log(phones);

  useEffect(() => {
    setTimeout(() => {
        axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phones = data.data.data;
        const fakeData = phones.map((phone) => {
          const newObj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return newObj;
        });
        setPhones(fakeData);
    });
    setIsLoading(false);  
}, 2000);
  }, []);
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl">Total Phone:{phones.length}</h1>
     <div className="flex justify-center">
     {
        isLoading && <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
       }
     </div>
      <div className="flex justify-center">
        <AreaChart
          width={700}
          height={400}
          data={phones}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stackId="1"
            stroke="red"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Phones;
