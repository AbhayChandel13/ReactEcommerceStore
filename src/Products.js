import React from "react";
import styled from "styled-components";
import { useProductContext } from "./context/productcontext";
import { Container } from "./styles/Container";

const Products = () => {
  const {isLoading, products} = useProductContext();
  console.log("products",products);
  if(isLoading){
    return  <div>....Loading </div>
}
  return <Wrapper className="section">      
      <Container className="container">
      <div className="grid grid-three-column">
          {products.map((curElem) => {
            <table>
            <tr key={curElem.id} >
              <td><th>Name</th></td>
              <td><th>Company</th></td>
              <td><th>Price</th></td>
            </tr>
            <tr>
              <td>{curElem.name}</td>
            </tr>            
          </table>
          })}
          </div>
        </Container>        
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
