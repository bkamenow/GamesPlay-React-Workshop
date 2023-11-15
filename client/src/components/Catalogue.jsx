import { Link } from "react-router-dom";

export default function Catalogue() {
    return (
        <section id='catalog-page'>
            <h1>All Games</h1>
            <div className='allGames'>
                <div className='allGames-info'>
                    <img src='./images/avatar-1.jpg' />
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <Link to='/game-details/id' className='details-button'>
                        Details
                    </Link>
                </div>
            </div>
            <div className='allGames'>
                <div className='allGames-info'>
                    <img src='./images/avatar-1.jpg' />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/game-details/id' className='details-button'>
                        Details
                    </Link>
                </div>
            </div>
            <div className='allGames'>
                <div className='allGames-info'>
                    <img src='./images/avatar-1.jpg' />
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <Link to='/game-details/id' className='details-button'>
                        Details
                    </Link>
                </div>
            </div>

            <h3 className='no-articles'>No articles yet</h3>
        </section>
    );
}
