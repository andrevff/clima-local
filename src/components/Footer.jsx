import { BsGithub, BsLinkedin } from "react-icons/bs"

export function Footer(){
    return (
        <div className="pt-4 pl-5 text-white">
            <p>© Todos os direitos reservados - André Ferreira</p>
            <div className="d-flex mb-4">
                <a href="https://github.com/andrevff" target="_blank" className="">
                    <BsGithub size={40} className="mr-3 btn btn-secondary " />
                </a>
                <a href="https://www.linkedin.com/in/andr%C3%A9-victor-ferreira-c%C3%A2ndido/" target="_blank">
                    <BsLinkedin size={40} className="btn btn-secondary" />
                </a>
            </div>
        </div>
    )
}