import cssLogo from '../assets/Icons/Skills/css.webp';
import htmlLogo from '../assets/Icons/Skills/html.webp';
import sqlLogo from '../assets/Icons/Skills/mysql.webp';
import nodeLogo from '../assets/Icons/Skills/node.webp';
import pythonLogo from '../assets/Icons/Skills/python.webp';
import reactLogo from '../assets/Icons/Skills/react.webp';
import javascriptLogo from '../assets/Icons/Skills/javascript.webp';
import javaLogo from '../assets/Icons/Skills/java.webp';
import mongoLogo from '../assets/Icons/Skills/mongodb.webp';
import postgresLogo from '../assets/Icons/Skills/postgresql.webp';
import prismaLogo from '../assets/Icons/Skills/prisma.webp';
import springLogo from '../assets/Icons/Skills/spring-boot.webp';
import typescriptLogo from '../assets/Icons/Skills/typescript.webp';
import expressLogo from '../assets/Icons/Skills/express.webp';
import nestLogo from '../assets/Icons/Skills/nest.webp';
import adonisLogo from '../assets/Icons/Skills/adonis.webp';
import bootstrapLogo from '../assets/Icons/Skills/bootstrap.webp';
import materiaUILogo from '../assets/Icons/Skills/material-ui.webp';
import sassLogo from '../assets/Icons/Skills/sass.webp';
import mavenLogo from '../assets/Icons/Skills/maven.webp';
import nextLogo from '../assets/Icons/Skills/nextjs.webp';
import tailwindLogo from '../assets/Icons/Skills/tailwind-css.webp';
import reactNativeLogo from '../assets/Icons/Skills/android-phone.webp';
import firebaseLogo from '../assets/Icons/Skills/firebase.webp';
import supabaseLogo from '../assets/Icons/Skills/supabase.webp';
import nginxLogo from '../assets/Icons/Skills/nginx.webp';
import '../styles/skills/skills.css';

const logos = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Sass', logo: sassLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Apache Maven', logo: mavenLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'React', logo: reactLogo },
    { name: 'React Native', logo: reactNativeLogo },
    { name: 'Next', logo: nextLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo },
    { name: 'Material UI', logo: materiaUILogo },
    { name: 'MySQL', logo: sqlLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'PostgreSQL', logo: postgresLogo },
    { name: 'Prisma', logo: prismaLogo },
    { name: 'Spring Boot', logo: springLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'Express', logo: expressLogo },
    { name: 'Nest', logo: nestLogo },
    { name: 'Adonis', logo: adonisLogo },
    { name: 'Firebase', logo: firebaseLogo },
    { name: 'Supabase', logo: supabaseLogo },
    { name: 'Nginx', logo: nginxLogo }
];

export function Skills() {
    return (
        <>
            {logos.map((img, index) => (
                <div key={index} className='imgWrapper'>
                    <img className='imgSkills' src={img.logo} alt={img.name} />
                    <span className='tooltip'>{img.name}</span>
                </div>
            ))}
        </>
    );
}