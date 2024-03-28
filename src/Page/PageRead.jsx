import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getLocalStoresGetData } from "../utils/utilitis";
import { useEffect, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];


// bookName
// totalPages
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
 
  
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageRead() {
  const [data,setData] = useState([]);

  // your localstors data 
  useEffect(() => {
    const data = getLocalStoresGetData("read");
      setData(data)
  }, []);
  return (
   data.length ? 
    <div className="flex justify-center">
        <BarChart
        className="overflow-x-auto"
    width={700}
    height={400}
    data={data}
    margin={{
      top: 10,
      right: 10,
      left: 10,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="bookName" />
    <YAxis />
    <Tooltip />
    <Bar
      dataKey="totalPages"
      fill="#8884d8"
      shape={<TriangleBar />}
      label={{ position: "top" }}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
      ))}
    </Bar>
  </BarChart> 
    </div>
: <div className="flex justify-center items-center h-[400px]"><h1 className=" font-bold text-4xl text-red-500">Book read && wishlist cart add</h1></div>
  );
}
