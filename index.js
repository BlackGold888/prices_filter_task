let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null, null];

const pricesFilter = (range) => {
    let [from, to] = range;

    if (!from && !to) return [...courses];

    if (!from) from = 0;
    if (!to) to = from;

    return courses.filter(course => {
        let [start, end] = course.prices;

        if (!start) start = 0;
        if (!end) end = start;

        if (start >= from && end <= to) {
            return course;
        }
    });
}

console.log(pricesFilter(requiredRange4));