import React from "react";
import './InfoContainer.css';
import styled from "styled-components";

function InfoContainer({data}) {

    const Button = styled.button`
    border: 2px solid white;
    font-size: 1.5vh;
    margin-top: 10px;
    width: 90%;
    padding: 10px;
    font-weight: bolder;
    border-radius: 20px;
    cursor: pointer;
  `;

    return (
        <div className="info-container">
            <p>{data.name}</p>
            <p>{data.mgzn}</p>
            <p className="date">{data.date}</p>
            
            <Button>HAVE A LOOK</Button>
        </div>
    )
}

export default InfoContainer;
