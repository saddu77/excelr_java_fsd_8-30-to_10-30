function NumberList(props){
    const numbers = props.numbers;
    const listitems = numbers.map((number) =>
     <li> { number } </li>
    );
 return(
    <>
        <ul>{listitems}</ul>
    </>
 )
}

export default NumberList