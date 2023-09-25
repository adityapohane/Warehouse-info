import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { editWarehouseDataAsync } from './productSlice';
import { useDispatch } from 'react-redux';
const EditData = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const data = location.state.data;
  const [editedData, setEditedData] = useState({ ...data });
  const navigate = useNavigate();
      // console.log(data);
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
      };

      
  const handleEdit = () => {
    dispatch(editWarehouseDataAsync({ id: editedData.id, updatedData: editedData }));

  };
  
    return (
      <div id="editdiv">
        <h1>Edit Component</h1>
        <br />
        <table
          style={{
            backgroundColor: "whitesmoke",
            width: "800px",
            height: "500px",
            padding: "20px",
          }}
        >
          <tbody>
            <tr className="edittr">
              <td>
                {" "}
                <label htmlFor="">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>

              <td>
                <label htmlFor="">Code:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="code"
                  value={editedData.code}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>
            </tr>
            <tr className="edittr">
              <td>
                {" "}
                <label htmlFor="">Id:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="id"
                  value={editedData.id}
                  onChange={handleInputChange}
                  className="editinput"
                />{" "}
              </td>

              <td>
                {" "}
                <label htmlFor="">City:</label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="city"
                  value={editedData.city}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>
            </tr>
            <tr className="edittr">
              <td>
                <label htmlFor="">space_available:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="space_available"
                  value={editedData.space_available}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>

              <td>
                {" "}
                <label htmlFor="">type:</label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="type"
                  value={editedData.type}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>
            </tr>
            <tr className="edittr">
              <td>
                {" "}
                <label htmlFor="">cluster:</label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="cluster"
                  value={editedData.cluster}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>

              <td>
                {" "}
                <label htmlFor="">: </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="is_registered"
                  value={editedData.is_registered}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label htmlFor="">is_live: </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="is_live"
                  value={editedData.is_live}
                  onChange={handleInputChange}
                  className="editinput"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <button
                  onClick={handleEdit}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    marginLeft: "5%",
                    width: "100px",
                    background: "black",
                    color: "white",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={()=>navigate(-1)}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    marginLeft: "5%",
                    width: "100px",
                    background: "black",
                    color: "white",
                  }}
                >
                 Table
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
export default EditData