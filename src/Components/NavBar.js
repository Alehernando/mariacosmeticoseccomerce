import './NavBar.css'
 
const NavBar = () => {
    return (
        <div className='container'>
            <div className='logo-box'>
                <img src='https://images.app.goo.gl/EdhgFchjkDSzr9RJ9'/>
            </div>
            <nav className= 'NavBar'>
            <div className= 'CentertNav'>
            <div className= 'NavOptionsCenter'>  
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Quienes Somos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                </div> 
                </div> 
                <div className= 'CenterNav'>
                <div className= 'NavOptionsCenter'>
                <button className= "Option">SignIn</button>
                <button className= "Option">SignUp</button>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar