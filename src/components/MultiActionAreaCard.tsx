import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface Tag {
  nome: string;
  cor: string;
}

interface MultiActionAreaCardProps {
    imagemProjeto: string;
    nomeProjeto: string;
    descricaoProjeto: string;
    tags: Tag[];
    link: string;
}


export  function MultiActionAreaCard({ imagemProjeto, nomeProjeto, descricaoProjeto, tags = [], link}: MultiActionAreaCardProps) {
  
  const handleClick = () => {
    window.open(link, '_blank')
  };

  return (
    <Card sx={{ maxWidth: 450, marginBottom: 5, height: 480 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          height={280}
          component="img"
          image={imagemProjeto}
          alt="green iguana"
        />
        <CardContent  sx={{ backgroundColor: "#ffa800"}}>
          <div style={{display: "flex"}} >
          {tags.map((tag, index) => (
            <Typography key={index} sx={{ color: '#ffffff', textShadow: '1px 2px 4px #000000', borderRadius: 1, padding: 0.5, margin: 0.5, textAlign: 'center', backgroundColor: tag.cor, fontFamily: 'Arial'}} variant="body2" color="text.secondary">
              {tag.nome}
            </Typography>
          ))}
          </div>
          <Typography gutterBottom variant="h5" sx={{ color: '#000000', margin: 0.5, fontFamily: 'Arial', fontWeight: 'bold' }} component="div" >
            {nomeProjeto}
          </Typography>
          <Typography variant="body2" sx={{ color: '#000000', marginLeft: 0.5, fontFamily: 'Arial', height: 40}} >
            {descricaoProjeto}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "#ffa800" }}>
        <Button size="medium" 
        color="info" 
        onClick={handleClick}
        sx={{ backgroundColor: "#000000", 
        fontFamily: 'Arial',
        color: "#ffffff", textTransform: "capitalize",  marginLeft: 1,
              '&:hover': {
                color: '#ffa800',
                backgroundColor: "#000000",
              }
        }}>
          Ver Mais
        </Button>
      </CardActions>
    </Card>
  );
}
