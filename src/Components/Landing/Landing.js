import React from 'react'
import '../Landing/Landing.css';
import Typewriter from 'typewriter-effect';

function Landing() {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img data-aos="fade-left" className="landing-img" src="https://ouch-cdn2.icons8.com/b0LhSkyPhxhBR0jkZNBCZDTgiQ_p2Ihr9_RoHuZtmO0/rs:fit:1216:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODk1/LzYyYWUwMTJlLWI2/OGYtNDNkZi04Njlk/LTZhNjZkZjI2MmQx/OC5zdmc.png" alt="" />
            </div>
        </div>
    )
}

export default Landing