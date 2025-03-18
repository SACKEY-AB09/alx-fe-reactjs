const UserProfile = (props) => {
    return(
        <div>
            <h2 style={{ border:'1px solid grey',  backgroundColor:'rgb(17, 107, 86)', padding:'20px', margin:'20px'}}>Name: {props.name}</h2>
            <p style={{color:'rgb(42, 192, 124)'}}>Age: {props.age}</p>
            <p style ={{border:'1px solid grey'}}>Bio: {props.bio}</p>
        </div>
    );
};
export default UserProfile;