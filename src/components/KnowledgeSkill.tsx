import '../styles/knowledgeskill/knowledgeskill.css'

export function KnowledgeSkill() {
    return (
        <div  className='linguagens'>
            <div className='habilidade'>
                <p>50%</p>
                <div className="aprendizado" style={{ height: '50%' }}></div>
                <p>Javascript</p>
            </div>
            <div className='habilidade'>
                <p>30%</p>
                <div className="aprendizado" style={{ height: '30%' }}></div>
                <p>Java</p>
            </div>
            <div className='habilidade'>
                <p>35%</p>
                <div className="aprendizado" style={{ height: '35%' }}></div>
                <p>Python</p>
            </div>
            <div className='habilidade'>
                <p>40%</p>
                <div className="aprendizado" style={{ height: '40%' }}></div>
                <p>TypeScript</p>
            </div>
            <div className='habilidade'> 
                <p>65%</p>
                <div className="aprendizado" style={{ height: '65%' }}>  </div>
                <p>HTML e CSS</p>
            </div>
        </div>
    );
}