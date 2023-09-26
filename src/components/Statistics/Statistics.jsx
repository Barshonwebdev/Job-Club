import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const data = [
    {
      name: "Google",
      uv: 235,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Netflix",
      uv: 150,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tesla",
      uv: 215,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Airbnb",
      uv: 180,
      pv: 3908,
      amt: 2000,
    }
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
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

  return (
    <div className="flex flex-col">
      <div className="text-center mt-20 text-2xl font-mono">
        <h3>Statistics</h3>
      </div>
      <p className="italic bg-sky-700 text-white text-center mt-10 md:text-2xl mb-5 border border-blue-300 inline mx-auto rounded-lg px-3">
        Bar chart of company yearly salaries (K)
      </p>
      <div className="flex justify-center md:px-48 mr-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className=" mt-20 md:w-1/2 flex flex-col p-5 rounded-lg bg-lime-50 border-black border">
        <h3 className="text-3xl mb-4">Why Stats are important?</h3>
        <p>
          Job statistics displayed on a job application website are crucial for
          both job seekers and employers. They provide transparency and
          credibility by showcasing the number of job listings, companies, and
          successful placements, which helps job seekers gauge the site's
          reliability. These statistics can also reveal trends in job demand and
          industries, assisting candidates in making informed career decisions.
        </p>
        <br />
        <p>
          For employers, job statistics highlight the website's reach and
          effectiveness in connecting them with potential candidates. Metrics
          such as the number of job applications or hires can help employers
          assess the platform's performance. Overall, these statistics foster
          trust, guide job seekers toward the right opportunities, and assist
          employers in finding the talent they need, making job statistics a
          valuable feature on job application websites.
        </p>
      </div>
      <div className="ml-auto mt-20 border border-black md:w-1/2 flex flex-col p-5 rounded-lg bg-lime-50">
        <h3 className="text-3xl mb-4">What are we showing here?</h3>
        <p>
          Our job application website provides essential job statistics,
          including salary information and detailed job descriptions, in a
          concise and user-friendly format. These statistics empower job seekers
          to make informed decisions by offering insights into compensation
          expectations and the responsibilities associated with each position.
          By presenting this valuable information, we facilitate a smoother and
          more efficient job search process, connecting candidates with
          opportunities that align with their career goals and expectations.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Statistics;
