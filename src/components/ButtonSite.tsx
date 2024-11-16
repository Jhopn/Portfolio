import { Button } from "@mui/material";

interface ButtonSiteProps {
  linkSite: string;
}

export default function ButtonSite({ linkSite }: ButtonSiteProps) {
  const handleClick = () => {
    if (linkSite) {
      window.open(linkSite, '_blank');
    }
  };

  return (
    <Button
      size="medium"
      color="info"
      onClick={handleClick}
      disabled={!linkSite}
      sx={{
        backgroundColor: linkSite ? "#000000" : "#ccc", 
        fontFamily: 'Arial',
        color: linkSite ? "#ffffff" : "#666", 
        textTransform: "capitalize",
        '&:hover': {
          color: linkSite ? '#ffa800' : '#666', 
          backgroundColor: linkSite ? "#000000" : "#ccc", 
        },
      }}
    >
      {linkSite ? "Site" : "Indisponível"}
      {linkSite && (
        <i
          className="fa-solid fa-link"
          style={{ marginLeft: '0.5rem' }}
        ></i>
      )}
    </Button>
  );
}
