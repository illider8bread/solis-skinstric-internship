import { useEffect } from "react"
import background from "../assets/background-square.png"
import gsap from "gsap";


function Background({width, marginTop, minWidth}) {

    function backgroundAnim() {
        let tl = gsap.timeline()
        tl.add("startSimultaneous", "0")
            .to("#square1",
                {
                    rotation: 360,
                    duration: 50,
                    ease: "linear",
                    repeat: "-1"
                },
                "startSimultaneous")
            .fromTo("#square2",
                {
                    rotation: -15,
                    scale: 1.1,
                    opacity: 0.66
                },
                {
                    rotation: 360,
                    duration: 55,
                    ease: "linear",
                    repeat: "-1"
                },
                "startSimultaneous")
            .fromTo("#square3",
                {
                    rotation: -30,
                    scale: 1.2,
                    opacity: 0.33,
                },
                {
                    rotation: 360,
                    duration: 60,
                    ease: "linear",
                    repeat: "-1"
                },
                "startSimultaneous")

    }

    useEffect(() => {
        backgroundAnim()
    }, [])

    return (
        <div id="background" style={{marginTop: marginTop}}>
            <img src={background} id="square1" className="background__square" style={{width: width, minWidth:minWidth}}/>
            <img src={background} id="square2" className="background__square" style={{width: width, minWidth:minWidth}}/>
            <img src={background} id="square3" className="background__square" style={{width: width, minWidth:minWidth}}/>
        </div>
    )
}
export default Background