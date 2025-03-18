const UserProfile = (props) => {
    return(
        <div>
            <h2 style={{ color:'blue', border:'1px solid gray', margin:'10px',backgroundColor:"rgb(22, 129, 120)"}}>Name: {props.name}</h2>
            <p style={{fontWeight:'bold'}}>Age: {props.age}</p>
            <p style ={{border:'1px solid grey'}}>Bio: {props.bio}</p>
        </div>
    );
};
export default UserProfile;