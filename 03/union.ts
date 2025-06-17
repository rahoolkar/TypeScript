//union with variables

let score: number | string;

score = 89;

score = "A+";

console.log(score);

//union with arrays

const marks: (string | number)[] = ["A", 89, "B", 67];

console.log(marks);

export {};