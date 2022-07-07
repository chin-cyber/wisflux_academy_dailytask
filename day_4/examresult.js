function examresult(totalMarks,exam){
    if(exam){
        return totalMarks >=90
    }else{
        return( totalMarks >= 89 && totalMarks <=100);
    }
}
console.log(examresult(80));
console.log(examresult(92));

console.log(examresult(95));