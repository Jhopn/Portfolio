import { Button } from "@mui/material";

interface ButtonDetailsProps {
  onClick: () => void; 
}

export default function ButtonDetails({ onClick }: ButtonDetailsProps) {
  return (
    <Button
      size="medium"
      color="info"
      onClick={onClick}
      sx={{
        backgroundColor: "#000000",
        fontFamily: "Arial",
        color: "#ffffff",
        textTransform: "capitalize",
        "&:hover": {
          color: "#ffa800",
          backgroundColor: "#000000",
        },
      }}
    >
      Detalhes
      <i
        className="fa-solid fa-eye"
        style={{ marginLeft: "0.5rem" }}
        onClick={onClick}
      ></i>
    </Button>
  );
}
