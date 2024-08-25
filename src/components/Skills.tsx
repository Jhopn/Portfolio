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
import '../styles/skills/skills.css';

const logos = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'React', logo: reactLogo },
    { name: 'MySQL', logo: sqlLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'PostgreSQL', logo: postgresLogo },
    { name: 'Prisma', logo: prismaLogo },
    { name: 'Spring Boot', logo: springLogo },
    { name: 'Express', logo: expressLogo }
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