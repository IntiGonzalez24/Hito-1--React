import React, { useContext, useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/UserContext';

const Profile = () => {
 
  const { getProfile, logout } = useContext(userContext); 
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, [getProfile]);

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <>
    <div className='container vh-100'>
    <div className="container-sm justify-content-center border border-black mt-3">
    
    <div className="card-body">
      <h3 className="card-title">Perfil de Usuario</h3>
      <p className="card-text"><strong>Email:</strong>{profile.email}</p>
      <a href="#" className="btn btn-primary mb-2" onClick={logout}>Cerrar Sesion</a>
    </div>
  </div>
  </div>
  </>
  );
}

export default Profile
