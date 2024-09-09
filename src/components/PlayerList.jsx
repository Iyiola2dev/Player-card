import React from 'react'
import players from '../../player'
import Player from './Player'

const PlayerList = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-center'>
            {
                players.map((player)=>(
                    <Player key={player.id} {...player}/>
                ))
            }
        </div>
    </div>
  )
}

export default PlayerList