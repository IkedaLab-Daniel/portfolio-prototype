import mepng from '../assets/me.png'
import fullstackbanner from '../assets/1.svg'
import aibanner from '../assets/2.svg'
const Hero = () =>{

    return(
        <>
            <div className="hero">
                <div className="left">
                    <h1 className="name">NAME NAME NAME NAME NAME</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id reprehenderit tenetur exercitationem perferendis temporibus ipsa quisquam similique corrupti maiores, animi atque nulla. Voluptas, eius quia aut itaque ipsum amet?</p>
                    <div className="button-container">
                        <button>Contact</button>
                        <button>Projects</button>
                    </div>
                </div>

                <div className="right">
                    <img src={mepng} alt="" className='me' />
                    <img src={fullstackbanner} className='absolute fullstackbanner' />
                    <img src={aibanner} className='absolute aibanner' />
                </div>
            </div>
        </>
    )
}

export default Hero