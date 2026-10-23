import { experiencias, patentes } from './util/ConfigExperiencias.ts';
import '../styles/experiencias/experiencias.css';

export function Experiencias() {
    return (
        <div className='timeline'>
            {experiencias.map((exp, index) => (
                <div key={index} className={`timelineItem reveal ${exp.periodo.includes('Atual') ? 'atual' : ''}`}>
                    <div className='timelineHeader'>
                        <div>
                            <h3 className='timelineCargo'>{exp.cargo}</h3>
                            <p className='timelineEmpresa'>{exp.empresa}</p>
                        </div>
                        <div className='timelineInfo'>
                            <span className='timelinePeriodo'>{exp.periodo}</span>
                            <span><i className="fas fa-map-marker-alt"></i> {exp.local}</span>
                        </div>
                    </div>
                    <ul className='timelineDescricao'>
                        {exp.descricao.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <div className='timelineStack'>
                        {exp.stack.map((tec) => (
                            <span key={tec} className='timelineTag'>{tec}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export function Patentes() {
    return (
        <div className='patentes'>
            {patentes.map((patente, index) => (
                <div key={index} className='patenteCard reveal'>
                    <div className='patenteIcone'>
                        <i className="fas fa-certificate"></i>
                    </div>
                    <div>
                        <p className='patenteNumero'>{[patente.numero, patente.data].filter(Boolean).join(' · ')}</p>
                        <h3 className='patenteTitulo'>{patente.titulo}</h3>
                        <p className='patenteDescricao'>{patente.descricao}</p>
                        {patente.link && (
                            <a href={patente.link} target="_blank" className='botao botaoSecundario patenteLink'>Ver registro</a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
