import actImg from './img/act.png';
import ieaImg from './img/iea.png';
import lightworkImg from './img/lightwork.png';
import mapImg from './img/map.png';
import grabImg from './img/screengrab.png';
import inrollImg from './img/inroll.png';
export const PORTFOLIO = [
    {
        "id": "act",
        "img" : actImg,
        "title": "act.org.nz",
        "intro" : "act.org.nz is a WordPress website using HTML, CSS, PHP and JavaScript for the template. I applied a grid system to ensure it displays well on a range of devices. It is integrated with CiviCRM to manage contacts.",
        "skills": ["HTML5 - audio, video, canvas","CSS3 - preprocessed with SASS","PHP","JavaScript", "Ressponsive Website Design"]
    },
    {
        "id": "iea",
        "img": ieaImg,
        "title": "IEANZ",
        "intro": "Website developed for IEANZ. Interpreted and executed designs as requested by clients, then enveloped and enhanced the site. Maintained and updated HTML/CSS templates on a regular basis and as required.",
        "skills": ["UI/UX Design", "HTML5 - audio, video","CSS3 - preprocessed with SASS", "PHP"]
    },
    {
        "id": "eroll",
        "img": inrollImg,
        "title": "Electroal Roll",
        "intro": "A database web application in PHP (Laravel framework) and MySQL to enable my client’s non-professional IT users and volunteers to access and update a copy of the New Zealand electoral roll. The electoral roll is a regulated database complied by the New Zealand Electoral Commission and contains data on each of New Zealand’s 3,000,000 plus electors.",
        "skills": ["HTML5", "CSS3", "AngularJS", "PHP - Laravel", "MySQL"]
    },
    {
        "id": "map",
        "img": mapImg,
        "title": "Interactive Map",
        "intro": "A Javascript based interactive map to synthesise complex census data into visual formats so that it could be easily digested by the business.",
        "skills":  ["Javascript -Leafleft"]
    },
    {
        "id": "js",
        "img": grabImg,
        "title": "Javascript Module",
        "intro": "A ReactJS single-page module to collect donations. The module can be reused for other projects.",
        "skills": ["HTML5","CSS3 - preprocessed with SASS", "React.JS"]
    },
    {
        "id": "lightwork",
        "img": lightworkImg,
        "title": "Lightwork Marking",
        "intro": "I spent a summer working as a Java/PHP programmer on the Lightwork project at Massey University. Lightwork is a Java application used for synchronising/updating Moodle server information through RESTful APIs.",
        "skills": ["Java", "PHP"]
    }
]