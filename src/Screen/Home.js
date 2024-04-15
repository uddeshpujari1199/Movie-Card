import React from 'react'
import Movie from '../Component/Movie'

function Home() {
    const moviesData=[(
        {
            imgaurl:'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg',
            title:'chotemiya',
            subtitle:'WTF',
            Time:120,
            typeOf:'Action'
        },
        {
            imgaurl:'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg',
            title:'chotemiya',
            subtitle:'WTF',
            Time:120,
            typeOf:'Action'
        }
    )]
  return (
    <div>
        <Movie imgUrl="https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg" title='Bade Miyan Chote Miyan' subtitle='2024/Chote Miya' duration='164 min ' type='Action' description="Elite soldiers team up to recover a stolen weapon from a masked madman who wants to destroy India." />
        <Movie imgUrl="https://m.media-amazon.com/images/M/MV5BNGZhMzc0YjYtYzgxMS00NzIwLThkNzktMzFjNjQ3MjMyZGJiXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg" title='Kung Fu Panda 4' subtitle='2025/Pada Pada' duration='120 min ' type='Comedy/Adventure' description="Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress" />

    </div>
  )
}

export default Home