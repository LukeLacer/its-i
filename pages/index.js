import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'
import ImageResultModal from '../components/ImageResultModal'
import FilePicker from '../components/FilePicker'
import apiClient from '../services/apiClient'

export default function Home() {
  const [image_base64, setImage_base64] = useState(null)
  const [message, setMessage] = useState(null)

  const sendImage = (img_data) => {
    apiClient.post('itsi', { imageData: img_data })
    .then((res) => {
      setImage_base64(img_data);
      setMessage(res.data.message);
    })
    .catch(error => {
      alert('Erro no servidor' + error.response.data.error)
    });
  }

  const closeModal = () => {
    setImage_base64(null)
  }

  return (
    <div className='home-wrapper'>
      <Canvas width={256} height={256} chosenimage={sendImage}/>
      <FilePicker chosenimage={sendImage}/>
      {image_base64 ? <ImageResultModal closeModal={closeModal} image_data={image_base64} message={message} /> : null}
    </div>
  )
}
