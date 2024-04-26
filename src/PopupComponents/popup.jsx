import "./popup.css"
function Popup({ togglePopup, popup }) {
   
    return (
        <div className="popup">
            <h1>hello im popup</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam nulla optio, corporis, laboriosam excepturi quo dolor ab porro nam sint fuga quaerat hic necessitatibus! Nisi porro minus vero dicta suscipit corrupti soluta, vel ex quo odit maiores dolore placeat eveniet, quas fuga eligendi voluptates aut beatae fugiat dolores ratione. Corrupti expedita commodi, quaerat dolor aut incidunt explicabo quis quibusdam ab animi dolorem quod adipisci odit nihil sequi assumenda officia porro. Laborum corrupti facilis aliquam suscipit, saepe nam aliquid dolorem quae est! Aspernatur accusantium distinctio eaque magni qui vitae est cumque. At doloribus unde nostrum voluptatum praesentium ullam! Vel fugit distinctio facilis porro? Illum, voluptatum adipisci totam consectetur aliquid magnam perspiciatis ullam rerum temporibus sed quisquam cum repellendus quo eaque, minus animi officiis? Est, fugit ipsum! Id, vel a eum odit minus, excepturi corporis quisquam molestiae enim cum repellat deleniti magnam non iste ad dolorum laudantium natus voluptatum. Sit eos atque officia nihil eum numquam cumque laboriosam quis repudiandae illum, recusandae veritatis eaque, repellendus, laborum dolore blanditiis odio. Officiis quibusdam a unde nisi delectus labore aliquid culpa, cupiditate tempore nostrum sapiente nemo praesentium aliquam impedit harum quam eveniet facilis enim ipsam id molestias dicta deserunt! Quae reiciendis molestias, voluptates molestiae incidunt nisi soluta eum nostrum dolorum aperiam! Dolores porro cumque provident modi maxime ut quam incidunt! Quia sint dolores quisquam voluptate. Ut sapiente quo debitis modi voluptatibus numquam cum dicta quibusdam ducimus nulla ab neque minus, nemo saepe repellendus est dolorem voluptate. Ratione explicabo minus alias. Sunt aspernatur sequi itaque.</p>
            <button onClick={togglePopup}>close</button>
        </div>
    )
}

export { Popup }