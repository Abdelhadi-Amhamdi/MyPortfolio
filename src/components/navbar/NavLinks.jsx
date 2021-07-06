import React from 'react'
import Icon from '../icon'
import { useTheme } from '../../hooks'
import {SocilLinks} from '../context'
import useSound from 'use-sound'
import btnsound from '../../assets/btn_click.wav'
import lightclick from '../../assets/light.wav' 

const NavLinks = () => {

    const [theme , toggleTheme] = useTheme();

    const [clickBtn] = useSound(btnsound)
    const [light] = useSound(lightclick)

   
   
    return (
        <div className="nav-links">       
            {SocilLinks.map(link => (
                <li key={link.id} onClick={clickBtn}>
                    
                    <a href={link.url} target="_blank">
                        <i
                        activestyle={{
                            color: '#ff4136'
                        }}
                        >{link.icon}</i>
                    </a>
                </li>
            ))}
            {/* <li onClick={light}>
                <button onClick={toggleLang}>
                    <i class="fa fa-language" aria-hidden="true"></i>
                </button>
            </li> */}
            <li onClick={light}>
                <button onClick={toggleTheme}>
                    <Icon name={theme === 'dark'? 'day' : 'night'} />
                </button>
                
            </li>
            {/* <li>
                <img src="./img/avatar/3.jpg" alt="this is the avatar"></img>
            </li> */}
        </div>
    )
}

export default NavLinks
