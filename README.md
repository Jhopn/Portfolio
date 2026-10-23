<div align="center">
  <h1>Jhoão Pedro — Portfólio</h1>
  <p>Desenvolvedor Full Stack no <strong>PIT - Piauí Instituto de Tecnologia</strong></p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-18-05d2fe?logo=react&logoColor=white">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-5-aa4cff?logo=vite&logoColor=white">
    <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white">
  </p>

  <p>
    <a href="https://www.linkedin.com/in/jhoaosantos/">LinkedIn</a> ·
    <a href="https://github.com/Jhopn">GitHub</a> ·
    <a href="https://www.instagram.com/jhoao_ns/">Instagram</a>
  </p>
</div>

## Sobre

Portfólio pessoal com meus projetos, experiências e habilidades. Sou graduado em Sistemas para Internet pelo IFMA Campus Timon e hoje trabalho em sistemas do Governo do Piauí, como o **SUAP**, o **Piauí Oportunidades** e o **Piauí em Dados**.

### O que tem no site

- **Início** — apresentação, download do currículo e links de contato
- **Habilidades** — tecnologias que já utilizei em projetos
- **Experiências** — linha do tempo profissional
- **Registro de Software** — IMADIO, registrado no INPI (BR512026003642-9)
- **Projetos** — carrossel com os destaques e página com todos os projetos, filtráveis por tecnologia; cada projeto abre um modal com galeria de imagens, descrição e links
- **Contato** — formulário (Formspree) e atalho para o WhatsApp

## Tecnologias

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desenvolvimento e build
- [React Router](https://reactrouter.com/) para as rotas `/` e `/projetos`
- [Swiper](https://swiperjs.com/) para os carrosséis e a galeria dos projetos
- [MUI](https://mui.com/) (Modal) para o modal de detalhes
- [Formspree](https://formspree.io/) para o formulário de contato
- [react-wavify](https://github.com/woofers/react-wavify) para a onda animada do rodapé
- CSS puro com variáveis, fontes Space Grotesk e Inter (Google Fonts) e ícones Font Awesome

## Como rodar

Pré-requisito: Node.js 24 ou superior (o deploy na Vercel usa o Node 24).

```bash
# instalar as dependências
npm install

# ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção (checa os tipos e gera a pasta dist/)
npm run build

# servir o build localmente
npm run preview
```

## Estrutura

```
src/
├── assets/            # imagens dos projetos, ícones das habilidades e logos
├── components/
│   ├── util/          # dados do site (projetos e experiências)
│   ├── ProjetoCard.tsx
│   ├── Modal.tsx      # modal de detalhes do projeto
│   ├── Experiencias.tsx
│   ├── Skills.tsx
│   └── ...
├── hooks/
│   └── useReveal.ts   # animação de entrada ao rolar a página
├── pages/
│   ├── Home.tsx
│   └── Projetos.tsx
└── styles/
    ├── global.css     # variáveis de cor, fontes, botões e animações
    └── ...            # um CSS por componente
```

## Atualizando o conteúdo

Todo o conteúdo fica em arquivos de configuração, sem precisar mexer nos componentes.

### Adicionar um projeto

- **Destaques** (aparecem no carrossel da Home e na página de projetos): `src/components/util/ConfigProjetosSwipper.ts`
- **Demais projetos** (só na página de projetos): `src/components/util/ConfigProjetosColumn.ts`

Coloque as imagens em `src/assets/Projetos/<NomeDoProjeto>/`, importe no arquivo e adicione um objeto:

```ts
{
    imagem: [capa, imagem2, imagem3], // a primeira é a capa do card
    nome: 'Nome do Projeto',
    tags: [
        { nome: 'React', cor: '#05d2fe' },
        { nome: 'PostgreSQL', cor: '#336791' },
    ],
    descricao: 'Descrição do projeto.',
    link: 'https://github.com/...', // repositório ('' = privado)
    linkSite: 'https://...',        // site ('' = indisponível)
},
```

Use o mesmo `nome` de tag em todos os projetos: o filtro da página de projetos agrupa as tags pelo nome.

### Adicionar uma experiência ou registro

Edite `src/components/util/ConfigExperiencias.ts`. As experiências aparecem na ordem do array. Um período com "Atual" ganha o marcador pulsante na linha do tempo.

### Adicionar uma habilidade

Coloque o ícone (preto, fundo transparente) em `src/assets/Icons/Skills/`, importe em `src/components/Skills.tsx` e adicione `{ name, logo }` à lista.

### Currículo

O botão "Download CV" baixa o arquivo `public/Curriculo.pdf`. Basta substituí-lo mantendo o mesmo nome.

## Deploy

O site é publicado na [Vercel](https://vercel.com/). O `vercel.json` redireciona todas as rotas para o `index.html`, para que a rota `/projetos` funcione ao recarregar a página.
