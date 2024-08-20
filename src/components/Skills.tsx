import cssLogo from '../assets/Icons/Skills/css.png';
import htmlLogo from '../assets/Icons/Skills/html.png';
import sqlLogo from '../assets/Icons/Skills/mysql.png';
import nodeLogo from '../assets/Icons/Skills/node.png';
import pythonLogo from '../assets/Icons/Skills/python.png';
import reactLogo from '../assets/Icons/Skills/react.png';
import javascriptLogo from '../assets/Icons/Skills/javascript.png';
import javaLogo from '../assets/Icons/Skills/java.svg';
import mongoLogo from '../assets/Icons/Skills/mongodb.svg';
import postgresLogo from '../assets/Icons/Skills/postgresql.svg';
import prismaLogo from '../assets/Icons/Skills/prisma.svg';
import springLogo from '../assets/Icons/Skills/spring-boot.svg';
import typescriptLogo from '../assets/Icons/Skills/typescript.svg';
import expressLogo from '../assets/Icons/Skills/express.svg';

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