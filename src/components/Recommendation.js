
 function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <=5

    return (isSpring?(
        <div>C'est le printemps, rempotez 🍃</div>
        ):(
            <div>Ce n'est pas le printemps, reposez-vous 🍂 </div>
        )
    );

}

export default Recommendation