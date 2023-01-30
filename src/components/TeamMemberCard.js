const TeamMemberCard = ({employees,handleEmployeeCardClick,selectedTeam}) => {
    return ( 
            <div key={employees.id} id={employees.id} className={(employees.teamName===selectedTeam?'card m2 standout':'card m-2')} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
              <img src={`https://raw.githubusercontent.com/GavinLonDigital/TeamMemberAllocationApp/main/src/images/${employees.gender}Profile.jpg`} alt={employees.gender} className="card-img-top" />
                <div className="card-body">
                 <h5 className='card-title'>Full Name: {employees.fullName}</h5>
                   <p className='card-text'><b>Designation:</b>{employees.designation}</p>
          </div>
          </div>
          )
}
 
export default TeamMemberCard;