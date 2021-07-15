 
 const Dataquiz= [
    {
        "id": 0,
        "question": "Hello Shin dev who is create question",
        "a": "Trịnh Ngọc Phú",
        "b": "Nguyễn Quỳnh Nhi",
        "c": "Hoa Hồng Phúc",
        "d": "Trịnh Phúc",
        "correct": "ans_a"
    }, {
        "id": 1,
        "question": "What is the best programing language",
        "a": "Java",
        "b": "JavaScript",
        "c": "C#",
        "d": "Python",
        "correct": "ans_d"
    },
    {
        "id": 2,
        "question": "What is the best Framework programing JavaScript",
        "a": "ReactJS",
        "b": "ExpressJS",
        "c": "Jquery",
        "d": "Vanila",
        "correct": "ans_a"
    },
    {
        "id": 3,
        "question": "What is the best Framework",
        "a": "ReactJS",
        "b": "Django",
        "c": "Ruby tails",
        "d": ".net",
        "correct": "ans_b"
    },
    {
        "id": 4,
        "question": "What is the best friend for u",
        "a": "Phú",
        "b": "Nhi",
        "c": "Quỳnh",
        "d": "Lan",
        "correct": "ans_d"
    }

];
console.log(Dataquiz.length);
let stack = 0
let scoce = 0 


let ansA = getId('textA')
let ansB = getId('textB')
let ansC = getId('textC')
let ansD = getId('textD')
let A = getId('ans_a')
let B = getId('ans_b')
let C = getId('ans_c')
let D = getId('ans_d')
let ques = getId('question')
function loadQuiz() {
    ques.innerHTML = `Question ${Dataquiz[stack].question}`
    ansA.innerHTML = `  ${Dataquiz[stack].a}  `
    ansB.innerHTML = `  ${Dataquiz[stack].b}  `
    ansC.innerHTML = `  ${Dataquiz[stack].c}  `
    ansD.innerHTML = `  ${Dataquiz[stack].d}  `

    
}
function checkedAns() {
    let temp = ''
    const ans = document.getElementsByName("answer");
    console.log(ans);
    ans.forEach((item) => {
        if (item.checked) {
            temp = item.id
            console.log(temp);
        
        }
    })
    return temp
}
getId("check").addEventListener('click', () => {

    
    const ansQues = checkedAns();
    console.log(ansQues);
    if (ansQues) {
        if (ansQues === `${Dataquiz[stack].correct}`) {
            alert("Đúng")
            scoce++ 
        } else {
            alert("Sai")
        } 
    }
    if (stack < Dataquiz.length-1) {
        stack++
        loadQuiz()
    } else {
        getId('quiz').style.textAlign = 'center'
        getId('quiz').innerHTML = `Hoàn thành đúng ${scoce}/${Dataquiz.length}`
        alert("Done Test")
    }
   
   
})
setInterval(loadQuiz(),2000)



function getId(id) {
    return document.getElementById(id);
}