// import React, { Component } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// class Linechart extends Component{
//     render()
//     {
//         return(

//         )
//     }
// }

import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class Linechart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nxpLdg69/';
    constructor() {
        super();
        this.state = { data: [] }
    }

    render() {

        console.log('data', this.props.datastudent);
        
        var student = this.props.datastudent
        var count = student.length
        console.log('student',student)
        var st1 = []
        var st2 = []
        let cur = [] 
        cur.push({
            day : student[0].day,
        month : student[0].month,
        year : student[0].year
        })

        //st1.push(student[1])
        console.log('stday1',student[1].day)
        console.log('curday1',cur[0].day)
        for(let i = 0;i<count;i++)
        {
            if(cur[0].day === student[i].day)
            {
                st1.push({
                
                        student: student[i].student,
                       //AccessPoint: student[i].AccessPoint,
                        year: student[i].year,
                        month: student[i].month,
                        day: student[i].day,
                        time: student[i].time,
                             
                })
            }
            else 
            {
                st2.push({
                
                    student: student[i].student,
                    //AccessPoint: student[i].AccessPoint,
                    year: student[i].year,
                    month: student[i].month,
                    day: student[i].day,
                    time: student[i].time,
                         
            })
            
            }
        }
        // var countap = {}
        // st1.AccessPoint.forEach(function(i) { countap[i] = (countap[i]||0) + 1;});

        //console.log("countap",countap)
        // for(let i = 0;i<21;i++)
        // {
        //     if(student[i].day == cur.day)
        //     {
        //        st1.push(student[i]) 
        //     }
        //     else
        //     {
        //         st2.push(student[i]) 
        //     }
        // }
        return (
            <div className = "res">

            <LineChart width={600} height={300} data={st1}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} >
       <XAxis dataKey="student"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{r: 8}}/>
       
      </LineChart >
      <LineChart width={1000} height={300} data={st2}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="student"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{r: 8}}/>
       
      </LineChart>
      </div>
        );
    }
}
