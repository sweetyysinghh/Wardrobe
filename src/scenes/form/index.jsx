import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Details saved successfully");
    resetForm(); // Reset the form fields
  };

  return (
    <Box m="20px">
      <Header title="MANAGE WARDROBE" subtitle="Add New Wardrobe Details" />

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
                type="date"
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 4" }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="No Compartments"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.No_Compartments}
                name="No_Compartments"
                error={!!touched.No_Compartments && !!errors.No_Compartments}
                helperText={touched.No_Compartments && errors.No_Compartments}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clothing Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Clothing_Type}
                name="Clothing_Type"
                error={!!touched.Clothing_Type && !!errors.Clothing_Type}
                helperText={touched.Clothing_Type && errors.Clothing_Type}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clothing Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Clothing_Color}
                name="Clothing_Color"
                error={!!touched.Clothing_Color && !!errors.Clothing_Color}
                helperText={touched.Clothing_Color && errors.Clothing_Color}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Clothing Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Clothing_Brand}
                name="Clothing_Brand"
                error={!!touched.Clothing_Brand && !!errors.Clothing_Brand}
                helperText={touched.Clothing_Brand && errors.Clothing_Brand}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Accessories Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Accessories_Type}
                name="Accessories_Type"
                error={!!touched.Accessories_Type && !!errors.Accessories_Type}
                helperText={touched.Accessories_Type && errors.Accessories_Type}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Accessories Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Accessories_Color}
                name="Accessories_Color"
                error={!!touched.Accessories_Color && !!errors.Accessories_Color}
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
                helperText={touched.Seasonality && errors.Seasonality}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save Details
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  date: yup.date().required("required"),
  No_Compartments: yup.string().required("required"),
  Clothing_Type: yup.string().required("required"),
  Clothing_Color: yup.string().required("required"),
  Clothing_Brand: yup.string().required("required"),
  Accessories_Type: yup.string().required("required"),
  Accessories_Color: yup.string().required("required"),
  Seasonality: yup.string().required("required"),
});

const initialValues = {
  date: "",
  No_Compartments: "",
  Clothing_Type: "",
  Clothing_Color: "",
  Clothing_Brand: "",
  Accessories_Type: "",
  Accessories_Color: "",
  Seasonality: "",
};

export default Form;
