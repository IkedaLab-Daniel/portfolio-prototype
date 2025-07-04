import mepng from '../assets/me.png'
import fullstackbanner from '../assets/1.svg'
import aibanner from '../assets/2.svg'
import jscircle from '../assets/js3.svg'
import pythoncircle from '../assets/py3.svg'

const Hero = () =>{

    return(
        <>
            <div className="hero">
                <div className="left">
                    <h1 className="name">Night is so peaceful guys</h1>
                    <h4>see you'll tommorow</h4>
                    <p>join yeolpunta group??????????</p>
                    <div className="button-container">
                        <button className='contact'>Contact</button>
                        <button className='projects'>Projects</button>
                    </div>
                </div>

                <div className="right">
                    <img src={mepng} alt="" className='me' />
                    <img src={fullstackbanner} className='absolute fullstackbanner' />
                    <img src={aibanner} className='absolute aibanner' />
                    <img src={jscircle} className='absolute js' />
                    <img src={pythoncircle} className='absolute py' />
                </div>
            </div>
        </>
    )
}

export default Hero