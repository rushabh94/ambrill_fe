import React from "react";
import {
  TextField,
  FormControl,
  Box,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddEmployee = ({ employeeData, setEmployeeData }) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          name="name"
          label="Employee Name"
          value={employeeData.name}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, name: e.target.value })
          }
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Employee Status</InputLabel>
          <Select
            value={employeeData.status}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, status: e.target.value })
            }
            name="status"
            label="Employee Status">
            <MenuItem value={"Joined"}>Joined</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Reject"}>Rejected</MenuItem>
          </Select>
        </FormControl>
        <DatePicker
          className="flex-1"
          label="Date of Birth"
          maxDate={new Date()}
          value={employeeData.dob}
          onChange={(value) => {
            if (value) {
              const formattedDate = value.format("YYYY-MM-DD");
              setEmployeeData({ ...employeeData, dob: formattedDate });
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              // error={errors?.[`dependants.${index}.date_of_birth`]}
              // helperText={errors?.[`dependants.${index}.date_of_birth`]}
            />
          )}
        />
        <DatePicker
          className="flex-1"
          label="Joining Date"
          value={employeeData.doj}
          onChange={(value) => {
            if (value) {
              const formattedDate = value.format("YYYY-MM-DD");
              setEmployeeData({ ...employeeData, doj: formattedDate });
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              // error={errors?.[`dependants.${index}.date_of_birth`]}
              // helperText={errors?.[`dependants.${index}.date_of_birth`]}
            />
          )}
        />
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          name="skills"
          label="Skills"
          value={employeeData.skills}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, skills: e.target.value })
          }
        />
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          name="salary"
          label="Salary Details"
          value={employeeData.salary}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, salary: e.target.value })
          }
        />
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          name="address"
          label="Address"
          multiline
          maxRows={4}
          value={employeeData.address}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, address: e.target.value })
          }
        />
      </Box>
    </div>
  );
};

export default AddEmployee;
