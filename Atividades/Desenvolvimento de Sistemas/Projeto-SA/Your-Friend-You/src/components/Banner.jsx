export default function Banner(){
    return(
        <section className="container-banner">
        <ul className="slider">

        <li>
          <input type="radio" id="slide1" name="slide" checked></input>
          <label for="slide1"></label>
          <img src="1.png" />
        </li>

        <li>
          <input type="radio" id="slide2" name="slide"></input>
          <label for="slide2"></label>
          <img src="6.jpg" />
        </li>

        <li>
          <input type="radio" id="slide3" name="slide"></input>
          <label for="slide3"></label>
          <img src="23.jpg" />
        </li>

        </ul>
        </section>
    )
}