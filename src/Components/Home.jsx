import React from 'react'
import vg from '../images/2.webp'



const Home = () => {
  return (
    <>
        <div className="home" id='home'>
            <main className='home-main'>
<h1>Heading</h1>
            </main>
        </div>

        <div className="home2" >
<img src={vg} alt="Graphics" />

<div className='home2-right'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam inventore, adipisci laboriosam qui reiciendis mollitia cum soluta atque saepe dignissimos, facilis laudantium quas optio consequatur placeat magnam voluptatem officiis asperiores fugit.</p>
</div>

        </div>

        <div className="about-Container" id='about'>
        <div className="about-content">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus in maxime incidunt, minus hic culpa qui quis sapiente expedita, voluptas quas cupiditate vero, fugit tenetur quo nihil ducimus soluta amet dicta libero nisi quae adipisci laudantium. Praesentium modi eos quod aspernatur consectetur alias, quo mollitia. Fugiat recusandae nihil voluptatem.</p>
        </div>
        </div>


<div className="srvices" id='srvices'>
  <div>
    <h1>Srvices</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, consectetur quibusdam. Nulla corrupti nobis consequuntur.</p>
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos inventore illo dolore fugit corporis possimus sequi. Iure quae consectetur modi nam? Atque, fugit voluptate?</p>
  </div>
</div>
        
    </>
  )
}

export default Home