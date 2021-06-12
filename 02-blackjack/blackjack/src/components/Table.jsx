import React, {useState} from 'react';
import Interface from './Interface';

function Table() {

    const [tableState, setTableState] = useState({
                                                     computerHand: ['00', '00'],
                                                     playerHand: ['00', '00'],
                                                     message: 'Press \'Deal\' to start the game',
                                                     playing: false
                                                 });

    const deal = () => {
    };

    const hit = () => {
    };

    const stand = () => {
    };

    const countScore = (hand) => {
    };

    return (
        <div>
            {/*<Hand cards={tableState.computerHand} />*/}
            <Interface
                message={tableState.message}
                deal={tableState.deal}
                // hit={/* TODO */}
                // stand={/* TODO */}
                // computerScore={/* TODO */}
                // playerScore={/* TODO */}
            />
            {/*<Hand cards={tableState.playerHand} />*/}
        </div>
    );
}

export default Table;
