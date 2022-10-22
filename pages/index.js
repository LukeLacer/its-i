import styles from '../styles/Home.module.css'
import Canvas from '../components/Canvas'
import FilePicker from '../components/FilePicker'

export default function Home() {
  const sendImage = (img_data) => {
    console.log(typeof img_data)
    console.log(img_data)
    alert('Essa imagem pode ser uma letra "i"');
  }

  return (
    <div className='home-wrapper'>
      <Canvas width={256} height={256} chosenimage={sendImage}/>
      <FilePicker chosenimage={sendImage}/>
    </div>
  )
}
