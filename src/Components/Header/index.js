import "./index.css"
import Cookies from "js-cookie"
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate=useNavigate()

  const logout=()=>{
    Cookies.remove('jwt_token')
    navigate("/login")

  }
    return(
        <div className="main-container">
          <h1 onClick={()=>{navigate("/")}} className="logo-head"><img src="https://p.kindpng.com/picc/s/160-1601328_fitness-icon-png-transparent-png.png" className="weblogo"/>WorkoutApp</h1>
          <div className="nav-card">
            <Link to="/" className="link"><p className="nav-items">Home</p></Link>
            <Link to="/workouts" className="link"><p className="nav-items">Workouts</p></Link>
            <Link to="/about" className="link"><p className="nav-items">About</p></Link>
            <Link to="/contact" className="link"><p className="nav-items">Contact Us</p></Link>
            <Link to="/cart" className="link"><p className="nav-items">Cart</p></Link>
            <button type="button" className="logout-button" onClick={logout}>Logout</button>
          </div>
        </div>
    )
}