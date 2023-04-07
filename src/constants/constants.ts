import { aghReactjs, agh, chevysonic, fitness, GPT3, madMovies, realEstate, signOut, tamagotchi, techCityOshawa, theSweetGroceries, travel } from '../aseets/project_covers';
import volodymyrImg from '../aseets/volodymyr.jpeg';
import email from '../aseets/email.png';
import linkedIn from '../aseets/linkedIn.png';
import resumePDF from '../aseets/Volodymyr_Ruzhak_CV.pdf';

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
        id: 'aghReact',
        title: 'AGH React.js',
        smallDiscription: 'E-commerce tech shop',
        buildWithTitle: 'Build with:',
        buildWith: 'React.js / Commerce.jc / Stripe / Rapid API',
        link: 'https://agh-react-js.netlify.app/',
        img: aghReactjs
    },
    {
        id: 'chevysonic2018',
        title: 'Chevy Sonic 2018 LT React.js',
        smallDiscription: 'Car Specifications and Details',
        buildWithTitle: 'Build with:',
        buildWith: 'React.js / Material-UI',
        link: 'https://chevysonic.vercel.app/',
        img: chevysonic
    },
    {
        id: 'fitnessapp',
        title: 'My Fitness React.js',
        smallDiscription: 'All about fitness',
        buildWithTitle: 'Build with:',
        buildWith: 'React.js / Material-UI / Rapid API',
        link: 'https://fitness-exercises-app-opal.vercel.app/',
        img: fitness
    },
    {
        id: 'travelapp',
        title: 'Travel the World React.js',
        smallDiscription: 'Travel guid app',
        buildWithTitle: 'Build with:',
        buildWith: 'React.js / Material-UI / JSON',
        link: 'https://travel-the-world-react-js.netlify.app/',
        img: travel
    },
    {
        id: 'realestateapp',
        title: 'Real Estate Next.js',
        smallDiscription: 'Buy or Rent Property',
        buildWithTitle: 'Build with:',
        buildWith: 'Next.js / Chakra-UI / Rapid API',
        link: 'https://real-estate-app-next-js.vercel.app/',
        img: realEstate
    },
    {
        id: 'gpt3app',
        title: 'GPT-3 OpenAI React.js',
        smallDiscription: 'Demo of AI Builder',
        buildWithTitle: 'Build with:',
        buildWith: 'React.js/Custom CSS',
        link: 'https://modern-ui-ux-gpt3-neon.vercel.app/',
        img: GPT3
    },
    {
        id: 'techoshawa',
        title: 'Teaching City Oshawa Vue.js',
        smallDiscription: 'Collaborative Project',
        buildWithTitle: 'Build with:',
        buildWith: 'Vue.js / JavaScript / JSON',
        link: 'https://dcdowntownoshawa.netlify.app/',
        img: techCityOshawa
    },
    {
        id: 'grocerystore',
        title: 'the Sweet Groceries',
        smallDiscription: 'Grocery Web Site Store',
        buildWithTitle: 'Build with:',
        buildWith: 'PHP / MySQL / JavaScript',
        link: 'http://tsg.volodymyrdc.ca/#/splash/',
        img: theSweetGroceries
    },
    {
        id: 'moviewebsite',
        title: 'Mad Movies / Movie site',
        smallDiscription: 'Movie Web Site',
        buildWithTitle: 'Build with:',
        buildWith: 'PHP / MySQL / JavaScript',
        link: 'http://madmovies.volodymyrdc.ca/#/splash/',
        img: madMovies
    },
    {
        id: 'tamagotchigame',
        title: 'Tamagotchi Game',
        smallDiscription: 'Game using DOM-manipulation',
        buildWithTitle: 'Build with:',
        buildWith: 'JavaScript / DOM / GSAP 3 / SVG',
        link: 'http://tamagotchi.volodymyrdc.ca/',
        img: tamagotchi
    },
    {
        id: 'equipmentsignout',
        title: 'Equipment Sign Out Vue.js',
        smallDiscription: 'Equipment Sign Out Site',
        buildWithTitle: 'Build with:',
        buildWith: 'PHP / JavaScript / MySQL / Vue.js',
        link: 'http://signout.volodymyrdc.ca/',
        img: signOut
    },
    {
        id: 'aghwordpress',
        title: 'Advanced Gaming Hardware',
        smallDiscription: 'Ecommerce Site',
        buildWithTitle: 'Build with:',
        buildWith: 'Custom WordPress theme, WooCommerce',
        link: 'http://agh.volodymyrdc.ca/',
        img: agh
    },
]

export const webDevSkills = [
    {
        id: 'frontend',
        title: 'Front End',
        skillslist: [
            {
                id: '1',
                skill: 'React.js'
            },
            {
                id: '2',
                skill: 'Tailwind.CSS'
            },
            {
                id: '3',
                skill: 'Material-UI'
            },
            {
                id: '4',
                skill: 'JavaScript'
            },
            {
                id: '5',
                skill: 'Typescript'
            },
            {
                id: '6',
                skill: 'CSS 3'
            },
            {
                id: '7',
                skill: 'REST API,'
            },
            {
                id: '8',
                skill: 'Next.js'
            },
            {
                id: '9',
                skill: 'VUE.js'
            },
            {
                id: '10',
                skill: 'HTML 5'
            },
        ]
    },
    {
        id: 'backend',
        title: 'Back End',
        skillslist: [
            {
                id: '1',
                skill: 'Firebase'
            },
            {
                id: '2',
                skill: 'Formspark | Form Submission'
            },
            {
                id: '3',
                skill: 'PHP'
            },
            {
                id: '4',
                skill: 'MySQL'
            },
        ]
    },
    {
        id: 'webdesign',
        title: 'Web Design',
        skillslist: [
            {
                id: '1',
                skill: 'Photoshop'
            },
            {
                id: '2',
                skill: 'Figma'
            },
            {
                id: '3',
                skill: 'Illustrator'
            },
            {
                id: '4',
                skill: 'Lightroom'
            },
            {
                id: '5',
                skill: 'Premier Pro'
            },
        ]
    },
    {
        id: 'software&tools',
        title: 'Software & Tools',
        skillslist: [
            {
                id: '1',
                skill: 'GitHub'
            },
            {
                id: '2',
                skill: 'Asana'
            },
            {
                id: '3',
                skill: 'Jira'
            },
            {
                id: '4',
                skill: 'VS Code Editor'
            },
            {
                id: '5',
                skill: 'Local by Flywheel'
            },
        ]
    },
]

export const aboutme = [
    {
        id: 'aboutme',
        title: 'HELLO',
        description: 'I am a front-end web developer. I like to build websites using React.js and Taiwind.css. I am a team player and I have professional experience working as a team lead and managing small teams.',
        resume: resumePDF,
        img: volodymyrImg,
        name: 'Volodymyr Ruzhak',
        position: 'Front-end Web Developer',
        linkedIn: 'https://www.linkedin.com/in/volodymyr-ruzhak-326585138/',
        email: 'mailto:volodymyr.ruzhak@dcmail.ca',
        linkedInImg: linkedIn,
        emailImg: email,
    },
]