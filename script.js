'use strict';

const curStreamers = document.querySelector('.s-main');
const popCourses = document.querySelector('.pop-main');
const topTutors = document.querySelector('.top-main');
const sCourses = document.querySelector('.sc-main');
const searchbar = document.querySelector('.ad-search-box');
const find = document.querySelector('.f-btn');
const discbtn = document.querySelector('.discbtn');
const messbtn = document.querySelector('.messbtn');
const setbtn = document.querySelector('.setbtn');
const morebtn = document.querySelector('.more-btn')


const tutorCourses = function(name){
    const tCourses = [];
    courses.forEach(function(course){
        if(course.tutor.tName == name){
            tCourses.push(course)
        }
    });
    return tCourses
};

const tutors = [
    {index:0, tName: 'Melanie Grutt', handle: 'melgrutt',streaming: true, img: 'tutor_melanie.jpeg', owned: false, top: true},
    {index:1, tName: 'Kenny Foster', handle: 'fosterlive',streaming: true, img: 'tutor_kenny.jpeg', owned: false, top: true},
    {index:2, tName: 'Keira Danlop', handle: 'danlop.edu',streaming: true, img: 'tutor_keira.jpeg', owned: false, top: true},
    {index:3, tName: 'Hikaru Nakamura', handle: 'gmhikaru',streaming: true, img: 'tutor_hikaru.jpeg', owned: false, top: false},
    {index:4, tName: 'Hiro Ozai', handle: 'genhiro',streaming: true, img: 'tutor_hiro.jpeg', owned: false, top: true},
    {index:5, tName: 'Joy Fenn', handle: 'mrsfenn',streaming: true, img: 'tutor_joy.jpeg', owned: false, top: false},
    {index:6, tName: 'Jason Benson', handle: 'that_jason',streaming: true, img: 'tutor_jason.jpeg', owned: false, top: true},
    {index:7, tName: 'Luke Schmedtmann', handle: '_luke_',streaming: true, img: 'tutor_luke.jpeg', owned: false, top: false},
    {index:8, tName: 'Carlos Mike', handle: 'hatman',streaming: true, img: 'tutor_carlos.jpeg', owned: false, top: false},
    {index:9, tName: 'Tom Black', handle: 'blackmann__',streaming: true, img: 'tutor_tom.jpeg', owned: false, top: true},
    {index:10, tName: 'Lana Marandina', handle: 'laramara', streaming: true, img: 'tutor_lana.jpeg', owned: false, top: false},
    {index:11, tName: 'Uran Design', handle: 'urancd', streaming: true, img: 'tutor_uran.jpeg', owned: false, top: false}
];

const courses = [
    {cName: 'Illustrator Scenes', tutor: tutors[10], info: 'Learning How To Create Beautiful Scenes In Illustrator In 60 minutes', dur: 82, popular: true, color: 'rgba(165, 42, 42, 0.699)', img: 'course_scenes.jpg', displayed: false},
    {cName: 'Illustrator Potrait', tutor: tutors[11], info: 'Creating a Beautiful Potrait Illustration. Learning new Technics and Ticks', dur: 82, popular: true, color: 'rgba(80, 80, 80, 0.699)', img: 'course_potraits.jpg', displayed: false },
    {cName: 'Illustrator Scenes', tutor: tutors[11], info: 'Making Beautiful Scene with New Presets, Created by Senior Illustrator', dur: 64, popular: false, color: 'rgba(102, 78, 154, 0.699)', img: 'beautiful_scenes.jpg', displayed: false },
    {cName: 'Secret Garden Tutorial', tutor: tutors[3], info: 'Secret Garden Great Tutorial for Middle Illustrators', dur: 49, popular: false, color: 'rgba(251, 208, 79, 0.699)', img: 'secret_garden.jpg', displayed: false },
    {cName: 'Best Drawing Tips', tutor: tutors[11], info: 'Best Tips for drawing Some Good Thematic Illustration', dur: 53, popular: false, color: 'rgba(29, 19, 164, 0.699)', img: 'drawing_tips.jpg', displayed: false }
];


// Tutor: Course List
const tutorsAndCourses = [];
(function(tutors){
    let index = 0;
    tutors.forEach(function(tutor){
        tutorsAndCourses.push({index: index, name: `${tutor.tName}` ,courses : tutorCourses(tutor.tName)});
        index++
    });
    index = 0;
})(tutors);

// Some form of User Data
const userTutorList = []
let currentCourse ;
const addTutor = function(i){
        if(!userTutorList.includes(tutorsAndCourses[i])){
            userTutorList.push(tutorsAndCourses[i]);
            tutors[i].owned = true;
            topTutors.innerHTML = '';
        showTopTutors()
    };
};

// Show streamers
const showStreamers = function(){
    tutors.forEach(function(tutor){
        if(tutor.streaming){
        curStreamers.insertAdjacentHTML('beforeend', 
    `<div class="s-container"><img class="img s-icon" src="images/tutors/${tutor.img}"></div>`);
        };
    });
};
showStreamers()


let popCounter = 0;
let scCounter = 0;

// Show popular courses
const showCourses = function(){
    courses.forEach(function(course, i){
       
        if(course.popular){
            if(popCounter < 2){
            popCourses.insertAdjacentHTML('beforeend', 
            `<div class=" pop-course smooth pc${i}" onmouseover= "animatebg(${i})" onmouseout= "animatebg2(${i})">
            <div class="tutor-info pop-tut smooth">
                <img class=" img tutor-icon " src="images/tutors/${course.tutor.img}">
                <div class="text">
                    <h3>${course.tutor.tName}</h3><h4>@${course.tutor.handle}</h4>
                </div>
            </div>
            <div class="course-dur o-btn text">${course.dur} min</div>
            <div class="course-info text pc-info${i}">${course.info}</div>
        </div>`);
        popCounter++
        course.displayed = true;
            };
        }else {
            sCourses.insertAdjacentHTML('beforeend', `
            <div class="smooth pc${i} sc-course sc${scCounter}" onmouseover= "animatebg(${i})" onmouseout= "animatebg2(${i})">
            <div class="tutor-info smooth">
                <img class=" img tutor-icon " src="images/tutors/${course.tutor.img}">
                <div class="text">
                    <h3>${course.tutor.tName}</h3><h4>@${course.tutor.handle}</h4>
                </div>
            </div>
            <div class="course-dur o-btn text">${course.dur} min</div>
            <div class="course-info text pc-info${i}">${course.info}</div>
        </div>`);
        scCounter++
        course.displayed = true;
        };

        if(course.displayed){
        const pc = document.querySelector(`.pc${i}`);
        document.querySelector(`.pc-info${i}`).style.backgroundColor = `${course.color}`;
        pc.style.background = `linear-gradient(${course.color}, rgba(255, 255, 255, 0)), url('images/courses/${course.img}')`
        pc.style.backgroundPosition = 'center'
        }
    });
};
showCourses()

// Show top tutors
const showTopTutors = function(){
    tutors.forEach(function(tutor){
        if(tutor.top){
        topTutors.insertAdjacentHTML('beforeend',
         `<div class="top-info tutor-info left-container">
         <img class=" img tutor-icon " src="images/tutors/${tutor.img}">
         <div class="text">
             <h3>${tutor.tName}</h3><h4>@${tutor.handle}</h4>
         </div>
         <button class="tut-btn btn sub-btn" onclick="addTutor(${tutor.index})"><img class="img  kebab tut-menu" src="images/${tutor.owned? 'added': 'add'}.png"></button>
     </div>
         `);
        };
    });
};
showTopTutors()


// Pop course Animation
const animatebg = function(i){
    document.querySelector(`.pc${i}`).style.backgroundPosition = 'top'
        };
const animatebg2 = function(i){
    document.querySelector(`.pc${i}`).style.backgroundPosition = 'center'
};

// Search Function (find btn)

find.addEventListener('click', function(){
    alert(`Sorry, we're having trouble getting you "${searchbar.value}"`);
});
const pageError =  function(){
    alert('Sorry, The page you requested is still under construction');
}

setbtn.addEventListener('click', pageError);
messbtn.addEventListener('click', pageError);
discbtn.addEventListener('click', pageError);
morebtn.addEventListener('click', pageError)