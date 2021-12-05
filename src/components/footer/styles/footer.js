import styled from 'styled-components/macro'

export const COntainer = styled.div`
display: flex;
padding: 70px 56px;
margin:auto;
max-width: column;

@media (max-width: 1000px){
    padding 70px 30px;
}
`
export const Column =styled.div`
display:flex;
flex-direction: column;
text-align:left;
`
export const Row = styled.div`
display:grid;
grid
`