import loading from '../images/loading.gif';

export const Loader = () => {
  return (
    <div className="loader_bg">
        <div className="loader"><img src={loading} alt="loader gif" /></div>
    </div>
  )
}
