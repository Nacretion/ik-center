import './App.scss';

function App() {
    return (
        <div className="App">
            <div className={"container"}>
                <div className={"line"} id={"line1"}> </div>
                <div className={"line"} id={"line2"}> </div>
                <div className={"line"} id={"line3"}> </div>
                <header>
                    <nav>
                        <li><a href={""}>ik-Center</a></li>
                        <div className={"distItem"}>
                            <li><a href={""}>о нас</a></li>
                            <li><a href={""}>портфолио</a></li>
                            <li><a href={""}>заявка</a></li>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default App;
