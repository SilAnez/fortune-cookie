import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrPhotos from '../utils/photos.json'

const Button = ({setquoteRandom,setPhotoRandom}) => {
  const handleChangePhrase = () =>{
    setquoteRandom(getRandomFromArray(phrases))
    setPhotoRandom(getRandomFromArray(arrPhotos))
  }
  return (
    <button className="app__btn" onClick={handleChangePhrase}>Escoge otra</button>
  )
}
export default Button