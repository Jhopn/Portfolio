import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import '../styles/modal/modal.css'; 
import { DeviceFrameset } from 'react-device-frameset';


interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  imagemProjeto: string;
  nomeProjeto: string;
  link: string;
  descricao: string;
}

export default function BasicModal({
  open,
  handleClose,
  imagemProjeto,
  nomeProjeto,
  link,
  descricao,
}: BasicModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalBox">
        <DeviceFrameset device="iPhone 8" color="gold" landscape>
          <img src={imagemProjeto} alt={nomeProjeto} className="modalImagem" />
        </DeviceFrameset>
        
        <p  className="modalTitulo">
          {nomeProjeto}
        </p>

        {/* Link */}
        <p className="acessarProjeto">
          <a href={link} target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
        </p>

        <p className="modalDescricao">
          {descricao}
        </p>


        <Button onClick={handleClose} sx={{
              backgroundColor: "#000000",
              fontFamily: 'Arial', color: "#ff0000",
              '&:hover': {
                color: "#000000"
              }
        }}>Fechar</Button>

      </Box>
    </Modal>
  );
}
