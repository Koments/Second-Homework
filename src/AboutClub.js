import "./App.css";

function Achievements({stars, wins}){
  return(
    <div>
      <p>Stars: {stars}</p>
      <p>Wins: {wins}</p>
    </div>
  )
}
function Сomposition({composition}){
  return(
    <div className="players">
      <p>№1:{composition[0]}</p>
      <p>№2:{composition[1]}</p>
      <p>№3:{composition[2]}</p>
      <p>№4:{composition[3]}</p>
    </div>
  )
}
function AboutClub({ clubsName, country, symbol, goal, alt, aboutClubClass, stars, wins,composition }) {
 
  return (
    <>
    <div className={aboutClubClass}>
      <div>
        <p>Name of Club: {clubsName}</p>
        <p>Country from: {country}</p>
        <p className="goals">Goals: {goal}</p>
      </div>
      <img src={symbol} alt={alt} />
      <Achievements stars={stars} wins={wins}/>
      <Сomposition composition={composition}/>
    </div>
    </>
  );
}

export default AboutClub;
