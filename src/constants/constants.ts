import { emailImg, James_Ruzhak_Resume, linkedIn, volodymyr } from '../aseets';
import { mobileHomeScreenEditor, tamagotchi, pcmaxrepair, triviaquiz, employeeboard, cfbank, transportationsystem, elibrary, artifactband } from '../aseets/project_covers';


export const navLinks = [
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "aboutme",
        title: "About Me",
    },
    {
        id: "contactme",
        title: "Contact Me",
    },
]

export const projects = [
    {
        id: 'pcmaxrepair',
        title: 'PC MAX REPAIR',
        smallDiscription: 'Repair Tech Shop',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS, FormSpark',
        link: 'https://pcmaxrepair.ca/',
        img: pcmaxrepair
    },
    {
        id: 'triviaquizgame',
        title: 'Trivia Quiz Game',
        smallDiscription: 'Test Your Knowledge',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS, MongoDB, Firebase, Node JS',
        link: 'https://trivia-quiz-game.vercel.app/',
        img: triviaquiz
    },
    {
        id: 'artifactband',
        title: 'Artifact Thrash Metal',
        smallDiscription: 'Musical band Website',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS',
        link: 'https://artifact-band.vercel.app/',
        img: artifactband
    },
    {
        id: 'mobileappeditor',
        title: 'Mobile Home Screen Editor',
        smallDiscription: 'Create Your Own Mobile App',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS(Context API), TypeScript, Tailwind CSS',
        link: 'https://mobile-home-screen-editor.vercel.app/',
        img: mobileHomeScreenEditor
    },
    {
        id: 'transportationsystem',
        title: 'RoadLink Freight Services',
        smallDiscription: 'Road Transportation Managment',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS, MongoDB, Node JS',
        link: 'https://road-freight-transportation.vercel.app/',
        img: transportationsystem
    },
    {
        id: 'elibrary',
        title: 'Condor eLibrary',
        smallDiscription: 'Get Books Online',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS',
        link: 'https://condor-e-library.vercel.app/',
        img: elibrary
    },
    {
        id: 'cfbank',
        title: 'Capital Finance Bank',
        smallDiscription: 'Full-stack banking app with user accounts & transactions',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS, MongoDB, Node JS',
        link: 'https://capital-finance-bank.vercel.app/',
        img: cfbank
    },
    {
        id: 'employeeboard',
        title: 'Employee Board',
        smallDiscription: 'Employee Management UI with tag-based filtering',
        buildWithTitle: 'Build with:',
        buildWith: 'React JS, TypeScript, Tailwind CSS, JSON',
        link: 'https://employee-board.vercel.app/',
        img: employeeboard
    },
    {
        id: 'tamagotchigame',
        title: 'Tamagotchi Game',
        smallDiscription: 'Interactive Tamagotchi pet simulator with animations',
        buildWithTitle: 'Build with:',
        buildWith: 'JavaScript / DOM / GSAP 3 / SVG',
        link: 'https://tamagotchi-pet-metaljames.vercel.app/',
        img: tamagotchi
    }
]

export const webDevSkills = [
    {
        id: 'frontend',
        title: 'Front End',
        skillslist: [
            { id: '1', skill: 'React JS' },
            { id: '2', skill: 'TypeScript' },
            { id: '3', skill: 'Tailwind CSS' },
            { id: '4', skill: 'JavaScript' },
            { id: '5', skill: 'HTML 5' },
            { id: '6', skill: 'Context API' },
            { id: '7', skill: 'useReducer' },
            { id: '8', skill: 'REST API' },
            { id: '9', skill: 'CSS 3' },
            { id: '10', skill: 'Next.js' }
        ]
    },
    {
        id: 'backend',
        title: 'Back End',
        skillslist: [
            { id: '1', skill: 'Node JS' },
            { id: '2', skill: 'Express JS' },
            { id: '3', skill: 'MongoDB' },
            { id: '4', skill: 'Firebase' },
            { id: '5', skill: 'Formspark' },
            { id: '6', skill: 'MySQL' },
        ]
    },
    {
        id: 'webdesign',
        title: 'Web Design',
        skillslist: [
            { id: '1', skill: 'Photoshop' },
            { id: '2', skill: 'Figma' },
            { id: '3', skill: 'Illustrator' },
            { id: '4', skill: 'Lightroom' },
            { id: '5', skill: 'Premier Pro' },
        ]
    },
    {
        id: 'software&tools',
        title: 'Software & Tools',
        skillslist: [
            { id: '1', skill: 'GitHub' },
            { id: '2', skill: 'Jira' },
            { id: '3', skill: 'Asana' },
            { id: '4', skill: 'VS Code' },
            { id: '5', skill: 'Visual Studio' },
        ]
    },
]

export const aboutme = [
    {
        id: 'aboutme',
        title: 'HELLO',
        descriptionone: 'I am detail-oriented software developer experienced in creating and optimizing web applications using React.js, TypeScript, and Tailwind CSS.',
        descriptiontwo: 'Skilled in improving performance and scalability, integrating APIs, and maintaining high code quality through hands-on development and collaboration.',
        descriptiontree: 'Recently expanded practical knowledge in Node.js and MongoDB through advanced education and applied it to new projects.',
        resume: James_Ruzhak_Resume,
        img: volodymyr,
        name: 'James Ruzhak',
        position: 'Software Developer',
        linkedIn: 'https://www.linkedin.com/in/james-ruzhak-326585138/',
        email: 'mailto:jamesruzhak@gmail.com',
        linkedInImg: linkedIn,
        emailImg: emailImg,
    },
]