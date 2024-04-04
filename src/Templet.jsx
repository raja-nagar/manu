const Templet =({Image,name,chenal,time})=>{
    return(
        <>
            <div style={{border:'1px solid black', width:300,
            textAlign:'center', borderRadius:15}}>
                <img height="300" width="300" style={{borderRadius:10
                }} src={
                    Image}/>
                <h1>{name}</h1>
                <h2>{chenal}</h2>
                <h3>{time}</h3>
            </div>
        </>
    )
}
export default Templet;