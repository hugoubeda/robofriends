import Card from './Card.js';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        // if (true) {
        //     throw new Error('Nooooo!');
        // }
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                username={robots[i].username}
                email={robots[i].email}
            />
        );
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;