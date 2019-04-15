const selectstr = str => str.filter(str => /\S/.test(str))
const sortt = st => st.sort()
const strxx = strx => { if (strx !== undefined) return strx.toString() }
const sh = shit => shit.shift()
var count={}
const mapp = arr => {arr.forEach(function(i) { count[i] = (count[i]||0) + 1;})
    return count}

const repeat = re => re.filter(function (item, pos) {
    return re.indexOf(item) == pos;
})


var intt = a => a.split(' ').map(function (item) {
    return parseInt(item, 10)
})

exports.selectstr = selectstr
exports.mapp = mapp
exports.repeat = repeat
exports.intt = intt
exports.sortt = sortt
exports.strxx = strxx
exports.sh = sh