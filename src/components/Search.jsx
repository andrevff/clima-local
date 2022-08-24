import { useState } from "react"
import { BsSearch } from "react-icons/bs";

export function Search(){

    const [city, setCity] = useState("");
    const [weatherCurrent, setWeatherCurrent] = useState();

    const handleChange = (e) => {
        setCity(e.target.value)
    }
    const handleSearch = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=264484e4b6864c12a1e195308222308&q=${city}&lang=pt`)
        .then((response) => {
            if(response.status === 200){
                return response.json()
            }
        })
        .then((data) => {
            setWeatherCurrent(data)
        });
    };

    return (
        <div>
            <main className="container">
                <div className="jumbotron jumbotron-4">
                    <h1>Veja como está o tempo na sua cidade!</h1>
                    <p className="lead">Digite no campo abaixo o nome da sua cidade, e clique em pesquisar.</p>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <input 
                                onChange={handleChange}
                                className="form-control" 
                                type="text" 
                                value={city} 
                                placeholder="Ex: São Paulo, Brasília..." 
                            />
                        </div>
                    </div>

                    <button onClick={handleSearch} className="btn btn-primary btn-lg bg-info d-flex align-items-center">
                        <BsSearch className="mr-2" />
                        Pesquisar
                    </button>

                    <hr className="my-4" />

                    {weatherCurrent ? (
                        <div>
                            <div className="mt-4">
                                <div className="d-flex align-items-center lead">
                                    <img src={weatherCurrent.current.condition.icon} className="mr-3" />
                                    <p className="mt-3">{weatherCurrent.location.name}, {weatherCurrent.location.region}, {weatherCurrent.location.country}</p>
                                </div>
                                <div>
                                    <h3>{weatherCurrent.current.condition.text}</h3>
                                    <div className="lead d-flex">
                                        <p className="mr-3">Temperatura atual: <b>{weatherCurrent.current.temp_c}°C</b></p>
                                        <p className="mr-3">Sensação Térmica: <b>{weatherCurrent.current.feelslike_c}°C</b></p>
                                        <p className="mr-3">Humidade relativa do ar: <b>{weatherCurrent.current.humidity}%</b></p>
                                        <p>Velocidade do Vento: <b>{weatherCurrent.current.wind_kph}km/h</b></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        ) : null}

                </div>
            </main>
        </div>
    )
}