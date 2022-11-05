import React from "react";
import Teammember from "./Teammember";

function Team() {


    const info = [

        {
            id: 1,
            img: '/image/pele.jpg',
            name: 'Pele',
            age: 75,
            team: 'Brazil',
            club: 'Santos',
            worldcup: [`1958 1962 1970`],
        },

        {
            id: 2,
            img: '/image/maradona.jpg',
            name: 'Maradona',
            age: 65,
            team: 'Argentina',
            club: 'Napoli',
            worldcup: 1986,
        },

        {
            id: 3,
            img: '/image/zidane.jpg',
            name: 'Zidane',
            age: 55,
            team: 'France',
            club: 'Real Madrid',
            worldcup: 1998,
        },

        {
            id: 4,
            img: '/image/11.jpeg',
            name: 'Ronaldo',
            age: 38,
            team: 'Portugal',
            club: 'Manchster United',

        },

        {
            id: 5,
            img: '/image/messi.jpg',
            name: 'Messi',
            age: 36,
            team: 'Argentina',
            club: 'Paris Saint Germain',

        },

        {
            id: 6,
            img: '/image/salah.jpg',
            name: 'Salah',
            age: 30,
            team: 'Egypt',
            club: 'Liverpool',

        },
    ]

    const players = info.map(player =>
        <Teammember
            key={player.id}
            img={player.img}
            name={player.name}
            age={player.age}
            team={player.team}
            club={player.club}
            worldcup={player.worldcup}
        />
    );

    return (
        <div className="row">
            {players}
        </div>
    )
}

export default Team;