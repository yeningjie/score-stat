// 课程数据：数组+对象组织，存储课程名称、分数、学分
const courseList = [
  {name:"高等数学", score:86, credit:4},
  {name:"大学英语", score:91, credit:2},
  {name:"计算机导论", score:-5, credit:3},
  {name:"体育", score:55, credit:1},
  {name:"线性代数", score:103, credit:3},
  {name:"思修", score:76, credit:2}
];
console.table(courseList);

 // 课程数据：数组+对象组织，存储课程名称、分数、学分
const courseList = [
  {name:"高等数学", score:86, credit:4},
  {name:"大学英语", score:91, credit:2},
  {name:"计算机导论", score:-5, credit:3},
  {name:"体育", score:55, credit:1},
  {name:"线性代数", score:103, credit:3},
  {name:"思修", score:76, credit:2}
];
console.table(courseList);

// 清洗课程数据：过滤小于0、大于100的非法成绩
const cleanCourse = (list) => list.filter(item => item.score >= 0 && item.score <= 100);

// 分数转换单科绩点，单一职责函数
function getGpa(score){
  if(score >=90) return 4.0;
  else if(score >=80) return 3.0;
  else if(score >=70) return 2.0;
  else if(score >=60) return 1.0;
  else return 0.0;
}

//执行清洗
const validCourse = cleanCourse(courseList);
console.table(validCourse);