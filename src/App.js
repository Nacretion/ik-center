import './App.scss';
import {ReactComponent as Ik} from "./svg/ik.svg"
import {Controller, Scene} from "react-scrollmagic";
import {Tween, Timeline} from "react-gsap";

function App() {
    return (
        <div className="App">
            <Timeline>
                <header>
                    <nav>
                        <li><a href={"#line1"}>
                            <Ik/>Center</a></li>
                        <div className={"distItem"}>
                            <li><a href={"#line1"}>о нас</a></li>
                            <li><a href={"#line1"}>портфолио</a></li>
                            <li><a href={"#line1"}>заявка</a></li>
                        </div>
                    </nav>
                </header>
                <Tween
                    target={0}
                    from={{ x: "0px", y: "100px", opacity: 0 }}
                    to={{ x: "0px", y: "0px", opacity: 1 }}
                    duration={1.3}
                />
            </Timeline>
            <Controller>
                <Scene
                    duration={1000}
                    pin={{pushFollowers: true}}
                    triggerHook={0.4}
                    offset={125}>
                    {(progress) => (
                        <div className="mx-auto">
                            <Timeline totalProgress={progress}>
                                <Timeline
                                    target={
                                        <div className={"container timeline"}>
                                            <p className={"heading rightAlign"}>студия разработки <br/> и внедрения
                                                digital-решений</p>
                                        </div>
                                    }
                                >
                                    <Tween
                                        from={{x: 100, opacity: 0}}
                                        to={{x: 0, opacity: 1}}
                                    />
                                </Timeline>
                                <Timeline
                                    target={
                                        <div className={"container timeline"}>
                                            <p className={"heading rightAlign"}>студия разработки <br/> и внедрения
                                                digital-решений</p>
                                        </div>
                                    }
                                >
                                    <Tween
                                        from={{x: 100, opacity: 0}}
                                        to={{x: 0, opacity: 1}}
                                    />
                                </Timeline>

                            </Timeline>
                        </div>
                    )}
                </Scene>
            </Controller>
        </div>
    );
}

export default App;
