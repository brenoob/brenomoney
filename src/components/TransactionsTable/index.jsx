import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions")
    .then(response=> console.log(response.data))  
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="entry">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>26/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel </td>
            <td className="exit">-R$ 800,00</td>
            <td>Casa</td>
            <td>27/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
