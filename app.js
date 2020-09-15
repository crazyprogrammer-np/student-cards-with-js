const stuPhoto = document.querySelector('#stuPhoto');
const sid = document.querySelector('#sid');
const stuName = document.querySelector('#stuName');
const stuClass = document.querySelector('#stuClass');
const rollNo = document.querySelector('#rollNo');
const stuAddress = document.querySelector('#add');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


students = [
    {
        stuPhoto: "subhash",
        sid: 127,
        sname: "Subhash Yadav",
        class: "Computer III/II",
        rollNo: 17,
        address: "Dhanusha, Nepal"
    },
    {
        stuPhoto: "ravi",
        sid: 128,
        sname: "Ravi Kushwaha",
        class: "Computer III/II",
        rollNo: 16,
        address: "Sarlahi, Nepal"
    },
    {
        stuPhoto: "pankaj",
        sid: 129,
        sname: "Pankaj Kuswaha",
        class: "Computer II/II",
        rollNo: 19,
        address: "Sarlahi, Nepal"
    },
    {
        stuPhoto: "prakash",
        sid: 130,
        sname: "Prajash Raj",
        class: "Computer I/I",
        rollNo: 20,
        address: "Sarlahi, Nepal"
    },
    {
        stuPhoto: "suraj",
        sid: 131,
        sname: "Suraj Yadav",
        class: "Computer III/II",
        rollNo: 18,
        address: "Sirha, Nepal"
    },
    {
        stuPhoto: "mithlesh",
        sid: 132,
        sname: "Mithlesh Raj Yadav",
        class: "Computer III/II",
        rollNo: 12,
        address: "Sunsari, Nepal"
    },
];

function loadStudents(students) {
    stuPhoto.src = "Images/"+ students.stuPhoto + ".jpg";
    sid.textContent = students.sid;
    stuName.textContent = students.sname;
    stuClass.textContent = students.class;
    rollNo.textContent = students.rollNo;
    stuAddress.textContent = students.address;
}

//loadStudents(students[1]);

studentIndex = 0;

function nextStudent(){
    studentIndex = (studentIndex + 1) % students.length;
    loadStudents(students[studentIndex]);
};
function prevStudent(){
    studentIndex = (studentIndex - 1 + students.length) % students.length;
    loadStudents(students[studentIndex]);
};

nextBtn.addEventListener('click', nextStudent);
prevBtn.addEventListener('click', prevStudent);