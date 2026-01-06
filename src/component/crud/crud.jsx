import "./crud.css";
import Swal from "sweetalert2";

function Crud({isloading,posts,error,deletedata}) {
  function deletealert(){
   Swal.fire({
  icon: "success",
  title: "Deleted!",
  text: "The post has been deleted successfully.",
  confirmButtonColor: "#4f46e5",
});

  }
 

  return (
    <div className="crud">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
  {isloading ? (
    <tr>
      <td colSpan="4" style={{ textAlign: "center" }}>
        Loading...
      </td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan="4" style={{ textAlign: "center", color: "red" }}>
        {error}
      </td>
    </tr>
  ) : posts  && posts.length > 0 ? (
    posts.map((e,index) => (
      <tr key={e.id}>
        <td>{index+1}</td>
        <td>{e.title}</td>
        <td>{e.description}</td>
        <td className="actions">
<button
  className="delete"
  onClick={() => {
    deletedata(e.id);
    deletealert();
  }}
>
  Delete Post
</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" style={{ textAlign: "center" }}>
       <i class="fa-solid fa-eye-slash"></i> No data avialable now
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
}

export default Crud;
