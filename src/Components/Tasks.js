import React, { useState } from 'react'
<<<<<<< HEAD
import { Col, Container, Row, Table } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import { FaPen, FaTrash } from 'react-icons/fa';
import { DataTable } from 'primereact/datatable';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Column } from 'primereact/column';
import '../Styles/Tasks.css';



export const Tasks = () => {
  const projects=[
    {
      "id":"1",
      "projectName":"MPS",
      "clientName":"Lupika Guha",
      "mobile":"7979797979",
      "projectCategory":"E-Commerce Website",
      "timeAlloted":4,
      "deadline":"22/07/2025",
    },
    {
      "id":"2",
      "projectName":"CEC",
      "clientName":"Diksha Singh",
      "mobile":"4545454545",
      "projectCategory":"Expense Tracker",
      "timeAlloted":4,
      "deadline":"22/07/2025",
    },
    {
      "id":"3",
      "projectName":"GPA",
      "clientName":"Snehal Kumari",
      "mobile":"9898989898",
      "projectCategory":"Real Time Chat App",
      "timeAlloted":4,
      "deadline":"22/07/2025",
    },
    {
      "id":"4",
      "projectName":"Quora",
      "clientName":"Minu Kumari",
      "mobile":"6767676767",
      "projectCategory":"Social Media App",
      "timeAlloted":4,
      "deadline":"22/07/2025",
    },
  ]
  
    // const [project, setProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'id': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'projectName': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'clientName':  { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'mobile':  { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'projectCategory':  { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'timeAllotted':  { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'deadline':  { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    // const [loading, setLoading] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];
    

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }
//  const representatives = [
//         {name: "Amy Elsner", image: 'amyelsner.png'},
//         {name: "Anna Fali", image: 'annafali.png'},
//         {name: "Asiya Javayant", image: 'asiyajavayant.png'},
//         {name: "Bernardo Dominic", image: 'bernardodominic.png'},
//         {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
//         {name: "Ioni Bowcher", image: 'ionibowcher.png'},
//         {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
//         {name: "Onyama Limba", image: 'onyamalimba.png'},
//         {name: "Stephen Shaw", image: 'stephenshaw.png'},
//         {name: "XuXue Feng", image: 'xuxuefeng.png'}
//     ];


=======
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { SideNav } from "../Components/SideNav";
import Button from 'react-bootstrap/Button';
import InputMask from 'react-input-mask';
// import MaterialInput from '@material-ui/core/Input';

export const Tasks = () => {
  const [isLogin,setIsLogin]=useState(false);
  const [count,setCount]=useState(0);

  const changeLoginStatus=()=>{
    setIsLogin(true);
  }
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
>>>>>>> a12f1d08bc8f2e6fe2c71ea42b05ac64dd07ec63
  return (
    <>
      <Container fluid className="dash">
        <Row>
          <Col md={2}>
          <div className="sidenav"><SideNav></SideNav></div>
            
          </Col>
          <Col>
          <div className="manage1">
            <Row>
              <Col md={1}><Button variant="primary"> New</Button> </Col>
              <Col md={1}><Button variant="danger">Delete</Button></Col>
              <Col md={8}></Col>
              <Col md={1}><Button variant="success">Update</Button></Col>
              <Col md={1}><Button variant="info"> Export</Button></Col>
            </Row>
                                  
          </div>
          <div className="manage2">
            <h4>Manage Tasks</h4>
<<<<<<< HEAD
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project Name</th>
                  <th>Client Name</th>
                  <th>Mobile</th>
                  <th>Project Category</th>
                  <th>Time Allotted(in weeks)</th>
                  <th>Deadline</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                projects.map((project)=>(
                  <tr>
                    <td className='alignCenter'>{project.id}</td>
                    <td>{project.projectName}</td>
                    <td>{project.clientName}</td>
                    <td className='alignCenter'>{project.mobile}</td>
                    <td>{project.projectCategory}</td>
                    <td className='alignCenter'>{project.timeAlloted}</td>
                    <td className='alignCenter'>{project.deadline}</td>
                    <td><FaPen style={{color:"blue",marginLeft:"15px"}}/></td>
                    <td><FaTrash style={{color:"red",marginLeft:"20px"}}/></td>
                  </tr>
                ))
              }
              </tbody>
            </Table>
           </div>
           
        <div className="datatable-doc-demo">
            <h4>Prime React Table</h4>
                <DataTable value={projects} paginator className="p-datatable-customers"  rows={10} 
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}
                    dataKey="id" rowHover selection={selectedProject} onSelectionChange={e => setSelectedProject(e.value)}
                    filters={filters} responsiveLayout="scroll"  filterDisplay="menu"
                    globalFilterFields={['projectName', 'clientName', 'mobile', 'projectCategory', 'timeAllotted','deadline']} emptyMessage="No customers found."
                    >
                    <Column selectionMode="multiple" selectionAriaLabel="name" headerStyle={{ width: '3em' }}></Column>
                    <Column field="projectName" header="Project Name" sortable filterField="projectName" style={{ minWidth: '10rem' }}  filter filterPlaceholder="Search by Project Name" />
                    <Column field="clientName" header="Client Name" sortable filterField="clientName" style={{ minWidth: '10rem' }}  filter filterPlaceholder="Search by Client Name" />
                    <Column field="mobile" header="Mobile number" sortable filter filterPlaceholder="Search by mobile" style={{ minWidth: '10rem' }} />
                    <Column field="projectCategory" header="Project Category" sortable filter filterPlaceholder="Search by project category" style={{ minWidth: '10rem' }} />
                    <Column field="timeAlloted" header="Time Allotted" sortable filter filterPlaceholder="Search by time allotted" style={{ minWidth: '10rem' }} />
                    <Column field="deadline" header="Deadline" sortable filter filterPlaceholder="Search by deadline date" style={{ minWidth: '10rem' }} />
                    
                    {/* <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeFilterTemplate} /> */}
                    {/* <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate}
                        filter filterElement={dateFilterTemplate} /> */}
                    {/* <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} /> */}
                    {/* <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '10rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} /> */}
                    {/* <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '10rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} /> */}
                    {/* <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} /> */}
                </DataTable>
        </div>
=======
            <p>{isLogin?"Hii":"Hello"}</p>
            <Button onClick={changeLoginStatus}>Login</Button>
            <br></br>
            <p>Count = {count}</p>
            <Button onClick={increment}>Increment</Button>
            <br></br>
            <br></br>
            <Button onClick={decrement}>Decrement</Button>
            {/* <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikmobile"
                    >
                      <Form.Label>Mobile</Form.Label>
                      return <InputMask mask="+4\9 99 999 99" maskChar=" " />;
                    </Form.Group>
                    </Row>
                    </Form> */}

           </div>

>>>>>>> a12f1d08bc8f2e6fe2c71ea42b05ac64dd07ec63
          </Col>
        </Row>
      </Container>
    </>
  )
}
