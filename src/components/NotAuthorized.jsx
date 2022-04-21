import fourOfour from '../assets/404_v2.png';

export const NotAuthorized = () => {
  return (
    <div className="container">
        <div className="text_box">
            <h2>You are not authorized:</h2> 
             <img src={fourOfour} alt="404 png" style={{maxWidth:'50vw'}}/></div>
             
        
    </div>
  )
}
