import style from "../Form/Form.module.css"
import { useState, useRef } from "react"
import Validate from "./validation.js"
import video from "../../videos/videoform.mp4"

export default function Form(props) {

  const { login, SubmitSound, access, navigate } = props
  const [user, setData] = useState(
    {
      email: "",
      password: "",
    })


  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    SubmitSound.play()
    e.preventDefault()
    login(user)
  }

  function handleChange(e) {
    const property = e.target.value
    const name = e.target.name
    setData({ ...user, [name]: property })
    setErrors(Validate({ ...user, [name]: property }))

  }

  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const handleVideoEnd = () => {
    navigate("/home")
  };



  return <div className={style.contenedor}>


    <video className={style.videoform} ref={videoRef} onEnded={handleVideoEnd}>
      <source src={video} type="video/mp4" />
      Tu navegador no soporta la reproducción de videos HTML5.
    </video>
    {access && (

      playVideo())}


    <form className={access ? style.forms1 : style.forms}>
      <div className={style.FormConteiner}>
        <div className={errors.email ? style.labelform1 : style.labelform11}>
          <label className={style.label1}>Email</label>
          <input className={style.input1} name="email" onChange={handleChange} />
          <p className={style.p1}>{errors.email}</p>
        </div>
        <div className={errors.password ? style.labelform22 : style.labelform2}>
          <label className={style.label2}>Password</label>
          <input className={style.input2} type="password" name="password" onChange={handleChange} />
          <p className={style.p1}>{errors.password}</p>
        </div>
        <div className={style.buttonSubmit}>
          <button onClick={handleSubmit}>Iniciar</button>
        </div>
      </div>

    </form>

  </div>;

}

