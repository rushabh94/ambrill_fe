import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Box,
} from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindDialog,
} from "material-ui-popup-state/hooks";
import AddEmployee from "./AddEmployee";
import { DataGrid } from "@mui/x-data-grid";
const EmpTable = () => {
  const openEmployeeModel = usePopupState({
    variant: "dialog",
  });
  const initialData = {
    name: "",
    status: "",
    dob: null,
    doj: null,
    skills: "",
    salary: "",
    address: "",
  };
  const [employeeData, setEmployeeData] = useState(initialData);

  const handleSubmit = () => {
    console.log(employeeData);
    setEmployeeData(initialData);
    openEmployeeModel.close();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Full Name", width: 160 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "dob",
      headerName: "Date of birth",
      width: 160,
    },
    {
      field: "doj",
      headerName: "Date of joining",
      width: 160,
    },
    { field: "skills", headerName: "Skills", width: 160 },
    { field: "salary", headerName: "Salary", width: 160 },
    { field: "address", headerName: "Address", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 2,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 3,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 4,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 5,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 6,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 7,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 8,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
    {
      id: 9,
      name: "dsada",
      status: "joined",
      dob: "1999-08-02",
      doj: "2024-03-09",
      skills: "sadasd",
      salary: "100000",
      address: "dasdsads",
    },
  ];

  return (
    <div className="m-2">
      <Box>
        <Button
          variant="contained"
          className="inline-flex font-semibold px-2 cursor-pointer py-[3px] items-center justify-center gap-1 border-none outline-none bg-secondary text-white font-sans rounded-md"
          {...bindTrigger(openEmployeeModel)}>
          Add Employee
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>

      <Dialog {...bindDialog(openEmployeeModel)} fullWidth>
        <div className="flex items-center justify-center"></div>
        <DialogTitle>Add Employee Details</DialogTitle>
        <DialogContent>
          <AddEmployee
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={() => openEmployeeModel.close()}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmpTable;
