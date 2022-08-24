import { TiWeatherCloudy } from "react-icons/ti"

export function Header(){
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-info bg-info mb-4 d-flex">
                <TiWeatherCloudy className="text-white mr-1" size={38}/>
                <h1 className="navbar-brand text-white mt-2">
                    Clima Local
                </h1>
            </nav>
        </div>
    )
}