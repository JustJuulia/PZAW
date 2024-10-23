function Details_com(props){
return(
    <>
          <h1> {props.title} </h1>
          <img src={props.img}></img>
          <h3>{props.body}</h3>
    </>
)
}
export default Details_com;