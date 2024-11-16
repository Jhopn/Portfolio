import { Button } from "@mui/material";

interface ButtonRepositoryProps {
  link: string;
}

export default function ButtonRepository({ link }: ButtonRepositoryProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Button
      size="medium"
      color="info"
      onClick={handleClick}
      disabled={!link} 
      sx={{
        backgroundColor: link ? "#000000" : "#ccc", 
        fontFamily: 'Arial',
        color: link ? "#ffffff" : "#666", 
        textTransform: "capitalize",
        '&:hover': {
          color: link ? '#ffa800' : '#666', 
          backgroundColor: link ? "#000000" : "#ccc",
        },
      }}
    >
      {link ? "Repositório" : "Privado"}
      {link && (
        <i
          className="fa-brands fa-github"
          style={{ marginLeft: '0.2rem' }}
        ></i>
      )}
    </Button>
  );
}
