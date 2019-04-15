const axios = require('axios')
const split = require('./component/split.js')
const match = require('./component/match.js')
const countrepeat = require('./component/count.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
let router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', bodyParser.json(), router)   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router)

// console.log('this is find date',finddate)
// var date = `http://mon.phuket.psu.ac.th/arubalog/${finddate}.log`
var students = []
var cstudents = []
var finddate = ""
var countst = 0
router.route('/students')
    // get all bears
    .get((req, res) => res.send(cstudents))

    .post((req, res) => {
       
        res.send({ message: 'student created!' })
    })
router.route('/students/date')

    .get((req, res) => {

        try {
            //countData(finddate)
            res.send(students)
        } catch (error) {
            console.error(error)
        }
    })

    .post((req, res) => {
        try {
            finddate = req.body.date
            console.log("this is finddate22222222222", finddate)
            countData(finddate)
            res.send({ message: 'student created!' })
        } catch (error) {
            console.error(error)
        }

    })

app.listen(8000, () => console.log('server ready'))

const getData = async (dateUrl) => {

    var date = `http://mon.phuket.psu.ac.th/arubalog/${dateUrl}.log`
    try {
        return  axios.get(date)
    } catch (error) {
        console.error(error)
    }
}

const countData = async (dateUrl) => {
    //students = []
    data = await getData(dateUrl)

    console.log('data',data);
    
    if (data.data ) {
        var str = data.data //ข้อมูล

        const strr = str.toString()

        const lines = split.splitn(strr) //ทำข้อมูลเป็น array โดยแบ่งจาก \n

        const resultid = match.atac(lines) //เลือกข้อมูลที่มีการเชื่อมต่อ (522008) แล้วเก็บไว้เป็น array

        let n = (resultid === undefined) ? 0 : resultid.length

        var count = 0

        for (let i = 0; i < n; i++) {
            const resultidfilter = [n]
            resultidfilter[i] = resultid[i]
            count += 1

            var findap = split.splitspace(resultidfilter[i])//fibdap  เก็บค่า   แต่ละ array ที่มีชื่อและรหัสนักศึกษา ใน array นั้นๆ

            var name = match.matchname(findap)

            var ap = match.matchap(findap)
            if (findap[1] !== '') {
                var month = findap[0]
                var day = findap[1]
                var time = findap[2]
                var year = findap[3] // name เก็บข้อมูล usename ทั้งหมดที่เชื่อมต่อมา
            }
            if (findap[1] === '') {
                var month = findap[0]
                var day = findap[2]
                var time = findap[3]
                var year = findap[4] // name เก็บข้อมูล usename ทั้งหมดที่เชื่อมต่อมา
            }

            var cutname = (cutname === undefined) ? name : cutname + name// นำข้อมูล usename ทั้งหมดมาเก็บไว้เป็น string
            var cutap = (cutap === undefined) ? ap : cutap + ap
            var cutmonth = (cutmonth === undefined) ? month : cutmonth + 'month' + month
            var cutday = (cutday === undefined) ? day : cutday + 'day' + day
            var cuttime = (cuttime === undefined) ? time : cuttime + 'time' + time
            var cutyear = (cutyear === undefined) ? year : cutyear + 'year' + year
        }
        var tname = split.splitname(cutname) // เก็บ ไอดี นักศึกษา เป็น  array  

        var tap = split.splitap(cutap) //เก็บชื่อ access point

        var tmonth = split.splitmonth(cutmonth)
        var ttime = split.splittime(cuttime)
        var tday = split.splitday(cutday)
        var tyear = split.splityear(cutyear)

        var outspacename = countrepeat.selectstr(tname) // กรอง '' ออก

        var outspaceap = countrepeat.selectstr(tap)

        var repeatname = countrepeat.repeat(outspacename) // เอาเฉพาะข้อมูลที่ไม่ซ้ำ

        var countrepeatname = countrepeat.mapp(outspacename) // นับจำนวนครั้งตัวซ้ำ

        var stc = 0
        
        for (let key in outspaceap) {
             students.push({
                
                student: outspacename[key],
                AccessPoint: outspaceap[key],
                year: tyear[key],
                month: tmonth[key],
                day: tday[key],
                time: ttime[key],
                //  latitude : null,
                //  longtitude:null
            })
           
        }
        // for (let key in outspaceap) {
        // ast.push({as:students})
        // }
        console.log('this is students', students)
        // for (let key in outspaceap){
        // if(students[key].AccessPoint == 'AP105-5302A')
        //     {
        //         students[key].latitude=7.893926 
        //         students[key].longtitude=98.353420
        //     }
        //     else if(students[key].AccessPoint == 'AP105-D1E2')
        //     {
        //         students[key].latitude=7.892782 
        //         students[key].longtitude=98.354691
        //     }
        //     else if(students[key].AccessPoint == 'AP105-D_Base-01')
        //     {
        //         students[key].latitude=7.892697 
        //         students[key].longtitude=98.354744

        //     }
        //     else{
        //         students[key].latitude=null
        //         students[key].longtitude=null

        //     }
        // }
        for (var pro in countrepeatname) {
            stc += ' ' + countrepeatname[pro] // นำข้อมูลจำนวนครั้งมาเก็บใน stc
        }

        var toa = countrepeat.intt(stc) //ทำเป็น array แล้วแปลงเป็น int

        toa.shift()

        var cid = 0

        for (var t in toa) {
            cid += toa[t]
        }
        console.log("toa",toa)

        const uniqueNames = Array.from(new Set(outspaceap));
        console.log("uni",repeatname)

        for (let key in repeatname) {
            cstudents.push({
               
               student:repeatname[key],
               time:toa[key],
               year:tyear[key],
               month:tmonth[key],
               day:tday[key]
               //  latitude : null,
               //  longtitude:null
           })
          
       }
       console.log("cstudents",cstudents)
        // const uniqueNames = names.filter((val, id, array) => {
        //     return array.indexOf(val) == id;  
        //  });
        // var cur = students[0].student
        // var counttt = 0;
        // var reci = []
        // reci[0] = students[0].student
        // for (let key in outspaceap)
        // {
        //    if(students[key].student !== cur) 
        //    {
        //        if()
        //        counttt = counttt + 1
        //        reci[counttt] = students[key].student
        //        cur = students[key].student
        //    }
        // }

       // console.log("reci",reci)
        
    }
}







