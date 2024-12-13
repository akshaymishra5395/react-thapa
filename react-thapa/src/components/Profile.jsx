export const Profile = () => {
  return (
    <div>
      <ProfileCard
        name="Bob"
        age={25}
        greeeting={
          <div>
            <strong>Hello Bob,keep up the good work</strong>
          </div>
        }
      >
        <p>Hobbies:gaming, Cooking</p>
        <button>conatct</button>
      </ProfileCard>

      <ProfileCard
        name="Bob2"
        age={28}
        greeeting={
          <div>
            <strong>Hello Bob,keep up the good work</strong>
          </div>
        }
      >
        <p>Hobbies:gaming, Cooking</p>
        <button>conatct</button>
      </ProfileCard>
    </div>
  );
};

function ProfileCard({name,age,greeting,children}) {
    // const {name,age,greeting,children} = props
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    );

}
