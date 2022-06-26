import React from 'react';

function Bubble() {
    return (
        <>
            <div className='block__wrapper'>
                <div className='block block_bubble'>1</div>
                <div className='block block_bubble'>2</div>
                <div className='block block_bubble'>3</div>
                <div className='block block_bubble'>4</div>
                <div className='block block_bubble'>5</div>
            </div>
            <button type='button' className='button button__bubble'>Start</button>
        </>
    )
}

export default Bubble;