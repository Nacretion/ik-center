import './App.scss';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <li><a href={"#line1"}>ik-Center</a></li>
                    <div className={"distItem"}>
                        <li><a href={"#line1"}>о нас</a></li>
                        <li><a href={"#line1"}>портфолио</a></li>
                        <li><a href={"#line1"}>заявка</a></li>
                    </div>
                </nav>
            </header>
            <div className={"container"}>
                <p className={"heading rightAlign"}>студия разработки <br/> и внедрения digital-решений</p>
            </div>
        </div>
    );
}

export default App;
