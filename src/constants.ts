const func = function () {
    const m = new Map()
    const li = [waiting, judging, ac, wa, ce, tle, mle, re, se]
    li.forEach(v => {
        m.set(v.id, v)
    })
    return li
}

interface entity {
    id: Number,
    name: String,
    color: String,
}

const waiting: entity = {
    id: -3,
    name: "Waiting",
    color: '#0079D3'
}
const judging: entity = {
    id: -3,
    name: "Judging",
    color: '#0079D3'
}
const ac: entity = {
    id: 0,
    name: "Accepted",
    color: 'green'
}
const wa: entity = {
    id: 1,
    name: "Wrong Answer",
    color: 'red'
}
const ce: entity = {
    id: 2,
    name: "Compile Error",
    color: '#FE9C00'
}
const tle: entity = {
    id: 3,
    name: "Time Limit Exceeded",
    color: 'grey'
}
const mle: entity = {
    id: 4,
    name: "Memory Limit Exceeded",
    color: 'grey'
}
const re: entity = {
    id: 5,
    name: "Runtime Error",
    color: 'purple'
}
const se: entity = {
    id: 6,
    name: "System Error",
    color: 'purple'
}

export const statusMap = func()