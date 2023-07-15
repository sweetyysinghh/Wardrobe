import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";


//import {FileSaver} from "file-saver";



// class DialogFormWithFormik extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
      // open: false,
//       firstName: '',
//       lastName: '',
//       email:'',
//       contact:'',
//       address1:'',
//       address2:'',
//       compartment_No:'',
//       Clothing_Type:'',
//       Clothing_Color:'',
//       Clothing_Brand:'',
//       Accessories_Type:'',
//       Accessories_Color:'',
//       Seasonality:''
//     }
//   }
// }



const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    // const text = JSON.stringify(values);
    // const blob = new Blob([text], { type: "application/json" });
    // const fileName = "array.json";
    // FileSaver.saveAs(blob, fileName, {
    //   defaultPath:"./form"
    // });
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="mail"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              /> */}



              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.firstName && !!errors.email}
                helperText={touched.firstName && errors.email}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
              name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              
    <TextField
                fullWidth
                variant="filled"
                type="text"
                label="No_Compartments"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Compartment_No}
                name="No_Compartments"
                error={!!touched.No_Compartments && !!errors.No_Compartments}
                helperText={touched.No_Compartments && errors.No_Compartments}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clothing_Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Clothing_Type}
                name="Clothing_Type"
                error={!!touched. Clothing_Type && !!errors. Clothing_Type}
                helperText={touched. Clothing_Type && errors.Clothing_Type}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clothing_Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Clothing_Color}
                name="Clothing_Color"
                error={!!touched. Clothing_Color && !!errors. Clothing_}Clothing_Color
                helperText={touched. Clothing_Color && errors. Clothing_Color}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clothing_Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Clothing_Brand}
                name="Clothing_Brand"
                error={!!touched. Clothing_Brand && !!errors. Clothing_Brand}
                helperText={touched. Clothing_Brand && errors. Clothing_Brand}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Accessories_Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Accessories_Type}
                name="Accessories_Type"
                error={!!touched. Accessories_Type && !!errors. Accessories_Type}
                helperText={touched.Accessories_Type && errors.Accessories_Type}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Accessories_Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Accessories_Color}
                name="Accessories_Color"
                error={!!touched. Accessories_Color && !!errors. Accessories_Color}
                helperText={touched.Accessories_Color && errors.Accessories_Color}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Seasonality"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Seasonality}
                name="Seasonality"
                error={!!touched.Seasonality && !!errors.Seasonality}
                helperText={touched.Seasonality && errors.Seasonality }
                sx={{ gridColumn: "span 4" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  //email: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
  No_Compartments: yup.string().required("required"),
  Clothing_Type: yup.string().required("required"),
  Clothing_Color: yup.string().required("required"),
  Clothing_Brand: yup.string().required("required"),
  Accessories_Type: yup.string().required("required"),
  Accessories_Color: yup.string().required("required"),
  Seasonality: yup.string().required("required"),

});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
  No_Compartments:"",
  Clothing_Type:"",
  Clothing_Color: "",
  Clothing_Brand: "",
  Accessories_Type: "",
  Accessories_Color: "",
  Seasonality:"",
};

export default Form;

              