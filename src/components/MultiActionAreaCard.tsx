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
}
  

export  function MultiActionAreaCard({ imagemProjeto, nomeProjeto, descricaoProjeto, tags = []}: MultiActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 450, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          height={280}
          component="img"
          image={imagemProjeto}
          alt="green iguana"
        />
        <CardContent  sx={{ backgroundColor: "#ffa800"}}>
          <Typography gutterBottom variant="h5" component="div" >
            {nomeProjeto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descricaoProjeto}
          </Typography>
          <div style={{display: "flex"}} >
          {tags.map((tag, index) => (
            <Typography key={index} sx={{ color: '#ffffff', textShadow: '1px 2px 4px #000000', borderRadius: 1, padding: 0.5, margin: 0.5, textAlign: 'center', backgroundColor: tag.cor}} variant="body2" color="text.secondary">
              {tag.nome}
            </Typography>
          ))}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "#AD7200" }}>
        <Button size="medium" color="info" sx={{ backgroundColor: "#000000", color: "#ffffff", textTransform: "capitalize" }}>
          Ver Mais
        </Button>
      </CardActions>
    </Card>
  );
}
