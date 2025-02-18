const UserProfile = (props) => {
    return (
      <div style={{ border: '2px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
        <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold' }}> {props.age}</span></p>
        <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;
  