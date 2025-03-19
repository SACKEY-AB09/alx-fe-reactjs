const UserProfile = (props) => {
    return(
        <div style={{ border:'1px solid gray', padding:'10px', margin:'10px',backgroundColor:"rgb(22, 129, 120)"}} >
            <h2 style={{color:'blue'}}>Name: {props.name}</h2>
            <p> Age:<span style={{fontWeight:'bold'}}>{props.age} </span></p>
            <p style ={{border:'1px solid grey'}}>Bio: {props.bio}</p>
        </div>
    );
};
export default UserProfile;