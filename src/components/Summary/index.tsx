import EntradaImg from '../../assets/entradas.svg';
import SaidaImg from '../../assets/saidas.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from "./style";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradaImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidaImg} alt="Entradas" />
                </header>
                <strong>R$ -500,00</strong>
            </div>
            <div className="total-green">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Entradas" />
                </header>
                <strong>500,00</strong>
            </div>
        </Container>
    )
}