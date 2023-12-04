import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerCalculator = styled.div`
    min-width: 19rem;
    min-height: 35rem;
    border-radius: 10px;
    background-color: #2b2d42;
    box-shadow: 5px 5px 10px #11121a,
             -5px -5px 10px #11121a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem;
`

export const ContainerVisor = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #242424;
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg{
        margin: 0 1rem;
        color: #f1faee;
    }
`

export const Visor = styled.p`
    font-size: 1.8rem;
    color: #f1faee;
`

export const ContainerButtons = styled.div`
    width: 100%;
    height: 30rem;
    margin-top: 1rem;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 24% 24% 24% 24%;
    
    svg{
        color: #f1faee;
    }
`

export const Button = styled.div`
    background-color: #242424;
    height: 97%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #f1faee;
`