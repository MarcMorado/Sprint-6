import styled from "styled-components";

export const Button = styled.button`
    background: white;
    font-sizee 1em;
    padding: 18px 400px 18px 400px;
    border: 1px solid #1E182B;
    border-radius: 0px;
    cursor: pointer;
    transotion: all .3s ease;

    &:hover{
        border: 3px solid #1E182B;
        background: #5F5085; 
    }
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 2px solid #1E182B;
    background: white;
    border-radius: 25px;
    margin:8px 80px 30px 80px;
`
export const ButDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
export const DesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const ImgDiv = styled.div`
    width: 100%;
    heigth: 100%;
    background-size: cover;
`
