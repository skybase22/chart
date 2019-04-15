const splitequal = spl => { if (spl !== undefined) return spl.split('=') }

const splitn = spl => { if (spl !== undefined) return spl.split('\n') }

const splitcomma = spl => { if (spl !== undefined) return spl.split(',') }

const splitspace = spl => { if (spl !== undefined) return spl.split(' ') }

const splitname = spl => { if (spl !== undefined) return spl.split('username=') }

const splitap = spl => { if (spl !== undefined) return spl.split('AP=') }

const splitday = spl => { if (spl !== undefined) return spl.split('day') }

const splitmonth = spl => { if (spl !== undefined) return spl.split('month') }

const splittime = spl => { if (spl !== undefined) return spl.split('time') }

const splityear = spl => { if (spl !== undefined) return spl.split('year') }

exports.splitequal = splitequal
exports.splitn = splitn
exports.splitcomma = splitcomma
exports.splitspace = splitspace
exports.splitname = splitname
exports.splitap = splitap
exports.splitday = splitday
exports.splitmonth = splitmonth
exports.splittime = splittime
exports.splityear = splityear