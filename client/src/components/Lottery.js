import { NavLink } from 'react-router-dom';

export default function Lottery() {

    return (
        <>
        <NavLink to='/dailygrand'><img src={process.env.PUBLIC_URL + '/images/dailygrand.png'} width='300px' alt='DAILY GRAND'/></NavLink>
        <NavLink to='/lotto649'><img src={process.env.PUBLIC_URL + '/images/lotto649.jpg'} width='300px' alt='LOTTO 649'/></NavLink>
        <NavLink to='/lottomax'><img src={process.env.PUBLIC_URL + '/images/lottomax.png'} width='300px' alt='LOTTO MAX'/></NavLink>
        </>
    )
}
