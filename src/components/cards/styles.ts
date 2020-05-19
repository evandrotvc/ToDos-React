import styled  from 'styled-components'

export const Form = styled.form`
    input {
        width:99%;
        outline: 0;
        align-items:center;
        border-bottom:1px solid black;
    }

`;


export const Repository = styled.div`
    margin-top:5px;
    border-bottom: 1px solid black;

    display:flex;

    box-shadow: 0px 0px 0px 0px rgb(72, 250, 81);
    transition: box-shadow 0.4s linear;

    &:hover {
        box-shadow: 0px 0px 0px 2px rgb(72, 250, 81);
    }

    label{
        max-width:550px;
        height:auto;
        overflow:auto;
    }
    svg{ /** Icone da lixeira */
        margin-left: auto; /**faz enconstar na borda da direita */
        cursor: pointer;
        padding:3px;

    }
`;

export const Card = styled.div`
    margin: auto auto;
    max-width:550px;
    height:auto;
    /* background:green; */
    align-items:center;
`;

