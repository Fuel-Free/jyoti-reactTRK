import Table from 'react-bootstrap/Table';
import { useGetuserQuery,useDeteleDataMutation} from '../Slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { editData } from '../Slices/userSlice';


function Users() {
    const [deteleData] = useDeteleDataMutation();
    const dispatch = useDispatch()
    const { data, error, isLoading, isSuccess } = useGetuserQuery();

          if (isLoading)  console.log("loadin");
          if (error)console.log("error");
   const handleDelete = async(id)=>{

      const user= await deteleData(id);
      if(user){
        alert("deleted");
      }
   }  
   
   const handleEdit = async(data)=>{
  
    const user = dispatch(editData(data))
   }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
      {data?data.map((item)=>{
    return( <tr key={item._id}>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.last}</td>
      <td>{item.email}</td>
      <td><button onClick={()=>handleEdit(item)}>Edit</button></td>
      <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
    </tr>)
      }):<p>error</p>}
       
      </tbody>
    </Table>
  );
}

export default Users;