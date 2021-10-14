import Modal from "react-modal";
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import fecharImg from "../../assets/fechar.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState("deposit");
  
    function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault();
      console.log(title);
      console.log(value);
      console.log(category);
      console.log(type);
    }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-fechar"
      >
        <img src={fecharImg} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
        placeholder="Título"
        value={title}
        onChange={event => setTitle(event.target.value)} 
        />

        <input 
        type="number" 
        placeholder="Valor" 
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={entradasImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={saidasImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
        placeholder="Categoria" 
        value={category}
        onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
