export const Practice =()=>{
    const student=[5];
    return (
    <>
    {/* <p>{student.length === 0 && "No student"}</p> */}
    <p>{ !student.length && "No student"}</p>
    <p>Number of student : {student.length}</p>
    </>
    );
}