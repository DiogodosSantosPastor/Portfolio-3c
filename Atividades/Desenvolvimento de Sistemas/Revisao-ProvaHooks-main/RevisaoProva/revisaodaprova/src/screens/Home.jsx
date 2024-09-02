import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
           <Link to="/buscarcep"/>Pesquisar um CEP <Link />
        </div>
    )
}