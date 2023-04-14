import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    let markArray = [
        { 
          name:  "assingment 1",
          totalMark:50,
          myMark: 46
        },
        { 
          name:  "assingment 2",
          totalMark:60,
          myMark: 58
        },
        { 
          name:  "assingment 3",
          totalMark:50,
          myMark: 48
        },
        { 
          name:  "assingment 4",
          totalMark:50,
          myMark: 35
        },
        { 
          name:  "assingment 5",
          totalMark:60,
          myMark: 58
        },
        { 
          name:  "assingment 6",
          totalMark:60,
          myMark: 52
        },
        {  
          name:  "assingment 7",
          totalMark:60,
          myMark: 60 
         
        },
        { name:  "assingment 7",
        totalMark:60,
        myMark: 60
        }
      ];
    return (
     
        <div>
             <ResponsiveContainer width="100%" height={300}>

            <AreaChart
            width={700}
            height={500}
            data={markArray}>
            
            <XAxis dataKey="totalMark" />
            <Area type="monotone" dataKey="myMark" stroke="#8884d8" fill="#8884d8" />


          <YAxis  dataKey= "myMark"/>
          <Tooltip />  
            </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;