import Image from 'next/image'

import styles from '../styles/About.module.css'

function about() {
  return (
    <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex in fugit nulla eius, odit non, libero velit rem nesciunt iusto vel eos porro laboriosam? Architecto voluptas earum provident placeat.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit odit laborum, rerum assumenda unde, eos praesentium esse odio quas at est sunt reprehenderit ea porro. Qui ipsam distinctio quam maiores.
        </p>
        <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
    </div>
  )
}

export default about