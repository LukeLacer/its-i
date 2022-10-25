/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const Information = () => {
    return (<div className='information-wrapper'>
        <h3>Atividade Pratica Supervisionada 6º Semestre</h3>
        <p><strong>Disciplina: </strong> Processamento de Imagens e Visão Computacional</p>
        <p><strong>Professor: </strong>Vinicius de Novaes</p>
        <p>A atividade tem como objetivo aplicar conceitos de machine learning com classificadores existentes na biblioteca python sckit learn. Para tal atividade foram utilizadas os classificadores SGD, Random Forest e SVM.</p>
        <p>Utilizando pré processamento de imagens e um banco de dados contendo vogais maiusculas e minusculas os classificadores foram treinados para descobrir se a vogal é ou não uma letra i.</p>
        <p>As conclusões retiradas dos resultados (utilizando as métricas que o scikit learn oferece para os classificadores) decidimos utilizar o classificador SVM.</p>
        <p>Assim o classificador foi treinado e utilizado nesse exemplo.</p>
        <p><strong>ATENÇÃO! </strong>Qualquer imagem que não cumpra todos os requisitos abaixo pode diminuir a eficácia da predição do modelo:</p>
        <li>Letras vogais maiusculas ou minusculas</li>
        <li>Letras pretas com fundo branco</li>
        <li>Imagem com baixa resolução</li>
        <p>Desenhar no campo abaixo é recomendado, mas também é possível realizar o upload de uma imagem caso desejado.</p>
        <p>O pré processamento transforma a imagem, transformando-a em uma imagem em preto e branco e de resolução de 28 x 28px, portanto realizar o upload de imagens muito grandes ou com muitas cores afeta diretamente a predição.</p>
        <p>Um problema conhecido é que o pré processamento não trabalha com transparencia, portanto o uso de imagens com canal de transparencia resulta em um erro.</p>
    </div>)
}

export default Information;
