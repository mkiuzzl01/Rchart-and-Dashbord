import { BarChart, ComposedChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,Legend,Area,Line} from "recharts";

const Bar_chat = () => {
  const students = [
    {
      student_id: 1,
      name: "John Doe",
      subjects: {
        Math: 85,
        Science: 78,
        English: 90,
        History: 82,
        Art: 75,
      },
    },
    {
      student_id: 2,
      name: "Alice Smith",
      subjects: {
        Math: 92,
        Science: 88,
        English: 85,
        History: 78,
        Art: 80,
      },
    },
    {
      student_id: 3,
      name: "Michael Johnson",
      subjects: {
        Math: 78,
        Science: 85,
        English: 88,
        History: 80,
        Art: 72,
      },
    },
    {
      student_id: 4,
      name: "Emily Brown",
      subjects: {
        Math: 90,
        Science: 82,
        English: 85,
        History: 88,
        Art: 75,
      },
    },
    {
      student_id: 5,
      name: "David Wilson",
      subjects: {
        Math: 85,
        Science: 78,
        English: 92,
        History: 80,
        Art: 85,
      },
    },
    {
      student_id: 6,
      name: "Emma Taylor",
      subjects: {
        Math: 88,
        Science: 85,
        English: 90,
        History: 78,
        Art: 82,
      },
    },
    {
      student_id: 7,
      name: "Daniel Martinez",
      subjects: {
        Math: 82,
        Science: 90,
        English: 85,
        History: 88,
        Art: 78,
      },
    },
    {
      student_id: 8,
      name: "Sophia Anderson",
      subjects: {
        Math: 85,
        Science: 88,
        English: 82,
        History: 75,
        Art: 90,
      },
    },
    {
      student_id: 9,
      name: "Oliver Garcia",
      subjects: {
        Math: 78,
        Science: 85,
        English: 88,
        History: 90,
        Art: 82,
      },
    },
    {
      student_id: 10,
      name: "Isabella Martinez",
      subjects: {
        Math: 90,
        Science: 82,
        English: 85,
        History: 78,
        Art: 85,
      },
    },
  ];

  return (
    <div className="mt-4 text-center">
      <h1 className="text-2xl">This is BarChat for every student each subject marks</h1>
     <div className="flex justify-center ">
     <BarChart width={1000} height={300} data={students}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis  />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="subjects.Math" fill="#8884d" barSize={80} /> 
        <Bar dataKey="subjects.Science" fill="#8888" barSize={80} /> 
        <Bar dataKey="subjects.English" fill="#84d8" barSize={80} /> 
        <Bar dataKey="subjects.History" fill="#888" barSize={80} />
        <Bar dataKey="subjects.Art" fill="#8884d8" barSize={80} />
      </BarChart>
     </div>
     <div className="flex justify-center">
     <ComposedChart width={1000} height={400} data={students}>
     <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke='yellow' />
      <Area type="monotone" dataKey="name" fill="#8884d8" stroke="green" />
      <Bar dataKey="subjects.Math" barSize={50} fill="green" />
      <Bar dataKey="subjects.Science" barSize={50} fill="purple" />
      <Bar dataKey="subjects.English" barSize={50} fill="black" />
      <Bar dataKey="subjects.History" barSize={50} fill="orange" />
      <Bar dataKey="subjects.Art" barSize={50} fill="#413ea0" />

      <Line type="monotone" dataKey="subjects.Math" stroke="red" />
     </ComposedChart>
     </div>
    </div>
  );
};

export default Bar_chat;
