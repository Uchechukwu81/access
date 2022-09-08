import React, { useMemo, useEffect } from "react";
import { Grid, Button, Box } from "@mui/material";
import ControlledSelect from "../../../components/ControlledComponents/ControlledSelect";
import ControlledTextField from "../../../components/ControlledComponents/ControlledTextField";
import { useFormik } from "formik";
import * as yup from "yup";
// import MUIDataTable from 'mui-datatables';
// import { useGlobals } from '../../../hooks';
// import { accountDetails } from '../../../api';
import { useSnackbar } from "notistack";
import ViewPort from "../../../components/ViewPort/ViewPort";

const SingleEntry = () => {
  const { instruments, banks, branches, transactionTypes, purposes } =
    useSnackbar();

  const validationSchema = yup.object({
    // phoneNumber: yup.number().min(9, 'Enter a number').required('Phone number is required'),
    // loanType: yup.string().required('Loan Duration is required'),
    date: yup.string().required("Date Is Required"),
    beneficiaryBank: yup.string().required("Select a bank"),
    instrumentType: yup.string().required("Instrument is required"),
    charges: yup.string().required("Fixed Charges"),
    purposeCode: yup.string().required("Select a purpose code"),
    branch: yup.string().required("Branch is Required"),
    transactionDetails: yup.string().required("Transaction Details is requred"),
    categoryPurpose: yup.string().required("Purpose Category is requred"),
    accountNo: yup.string().required("Beneficiary`s account number is requred"),
    name: yup.string().required("Beneficiary`s name is requred"),
    amount: yup.string().required(" Amount is requred"),
    transactionType: yup.string().required("Transaction typeis requred"),
    depAccntNo: yup.string().required("Depositor`s account no is requred"),
    depositorsName: yup.string().required("Depositor`s name is requred"),
    iD: yup.string().required("End-to-end ID"),
    instrument: yup.string().required("Local instrument is requred"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      instrumentType: "",
      beneficiaryBank: "",
      charges: "",
      purposeCode: "",
      branch: "",
      transactionDetails: "",
      categoryPurpose: "",
      accountNo: "",
      name: "",
      amount: "",
      transactionType: "",
      depAccntNo: "",
      depositorsName: "",
      iD: "",
      instrument: "",
      date: "",
      // fullName: '',
      // member: '',
      // securityBalance: ''
      // transactionAmount: 0,
    },
    validationSchema,
    onSubmit,
  });

  const instrumentOptions = useMemo(
    () =>
      instruments.map((option) => ({
        label: option.instrumentCode,
        value: option.instrumentCode,
      })),
    [instruments]
  );

  const bankOptions = useMemo(
    () =>
      banks.map((option) => ({
        label: option.bankName,
        value: option.bankCode,
      })),
    [banks]
  );

  const branchOptions = useMemo(
    () =>
      branches
        .filter((option) => option.bankCode === formik.values.beneficiaryBank)
        .map((option) => ({
          label: option.branchName,
          value: option.branchCode,
        })),
    [branches, formik.values.beneficiaryBank]
  );

  const transactionOptions = useMemo(
    () =>
      transactionTypes.map((option) => ({
        label: option.codeDescription,
        value: option.transactionCode,
      })),
    [transactionTypes]
  );

  const purposeOptions = useMemo(
    () =>
      purposes.map((option) => ({
        label: option.purposeDescription,
        value: option.purposeCode,
      })),
    [purposes]
  );

  useEffect(() => {
    if (formik.values.depAccntNo.trim()) {
      formik.values.depAccntNo
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
          enqueueSnackbar("Something Went Wrong", { variant: "error" });
        });
    }
  }, [formik.values.depAccntNo, enqueueSnackbar]);

  return (
    <ViewPort>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <h4>SINGLE ENTRY MODULE </h4>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="beneficiaryBank"
            label="Beneficiary's bank"
            formik={formik}
            type="text"
            options={bankOptions}
          >
            {/* <ControlledSelect */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="instrumentType"
            label="Instrument type"
            formik={formik}
            type="text"
            options={instrumentOptions}
          >
            {/* <ControlledSelect */}

            {/* />{" "} */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* <ControlledTextField name="charges" label="Fixed charges" formik={formik} type="text" /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="purposeCode"
            label="Purpose Code"
            formik={formik}
            type="text"
            options={purposeOptions}
          >
            {/* <ControlledSelect */}

            {/* /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="branch"
            label="Branch"
            formik={formik}
            type="text"
            options={branchOptions}
          >
            {/* <ControlledSelect */}

            {/* /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="amount"
            label="Amount"
            formik={formik}
            type="text"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="transactionDetails"
            label="Transaction details"
            formik={formik}
            type="text"
            options={transactionOptions}
          >
            {/* <ControlledSelect */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="categoryPurpose"
            label="Category purpose"
            formik={formik}
            type="text"
            options={[
              { value: "1234567890", label: "teacher" },
              { value: "0987654321", label: "lawyer" },
              { value: "5647382910", label: "Banker" },
            ]}
          >
            {/* <ControlledSelect */}

            {/* /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="accountNo"
            label="Beneficiary's account number"
            formik={formik}
            type="text"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="date"
            label="Date"
            formik={formik}
            type="date"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="date"
            label="Date"
            formik={formik}
            type="date"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="transactionType"
            label="Transaction type"
            formik={formik}
            type="text"
            options={transactionOptions}
          >
            {/* <ControlledSelect */}

            {/* /> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="depAccntNo"
            label="Depositor's account number"
            formik={formik}
            type="text"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className="inputs"
            name="depositorsName"
            label="Depositor's name"
            formik={formik}
            type="text"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="iD"
            label="End-to-end ID"
            formik={formik}
            type="text"
          >
            {/* <ControlledTextField */}

            {/* />{" "} */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            name="instrument"
            label="Local instrument"
            formik={formik}
            type="text"
            options={instrumentOptions}
          >
            {/* <ControlledSelect */}

            {/* /> */}
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
        <ControlledTextField name="loanAmount" label="Loan Amount" formik={formik} type="text" />{' '}
      </Grid>
     
      
      <Grid item xs={12} sm={6} md={3}>
        <ControlledTextField name="processFee" label="Processing Fee" formik={formik} type="text" />{' '}
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ControlledTextField name="coverageFee" label="Coverage Fee" formik={formik} type="text" />{' '}
      </Grid> */}
          <Grid xs={12} sm={12} md={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                alignItems: "center",
                textAlign: "center",
                padding: ".7rem",
                background: "#FF8102",
                color: "white",
                width: "150px",
                borderRadius: "30px",
                marginBottom: "1rem",

                "&:hover": {
                  bgcolor: "#FF8102",
                  color: "white",
                },
              }}
              onClick={formik.handleSubmit}
            >
              SAVE
            </Button>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12}>
        <MUIDataTable title={'Table'} data={data} columns={columns} options={options} />
      </Grid> */}
          {/* <Grid xs={12} sm={12} md={12} sx={{ textAlign: 'right', marginTop: '2rem' }}>
        <Button
          variant="contained"
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            padding: '.7rem',
            background: '#FF8102',
            color: 'white',
            width: '150px',
            borderRadius: '30px',
            marginBottom: '1rem',

            '&:hover': {
              bgcolor: '#FF8102',
              color: 'white'
            }
          }}
          onClick={formik.handleSubmit}
        >
          SUBMIT
        </Button>
      </Grid> */}
        </Grid>
      </Box>
    </ViewPort>
  );
};

export default SingleEntry;
// { useMemo, useState }
