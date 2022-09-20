import React from "react";
import { Grid, Button, TextField, Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import ViewPort from "../../components/ViewPort/ViewPort";
import EntryTab from "../SingleEntryPage/EntryTab";
import { FormLabel } from "@material-ui/core";
// import { NavLink } from "react-router-dom";

const MultipleEntriesPage = () => {
  const data = [
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
    {
      sn: "1",
      beneficiaryAccount: "0937645728",
      beneficiaryNameOrCorporateName: "Uche",
      payerBank: "GTB",
      payerNameOrCorporateName: "Uchechukwu",
      currencyCode: "364893",
      transferAmount: "1000000000",
      vat: "2999",
      charge: "2000",
      transferNumber: "38902",
      recipientCountryCode: 608368,
    },
  ];
  const columns = [
    {
      name: "sn",
      label: "S/N",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "beneficiaryAccount",
      label: "Benef. Acct ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "beneficiaryNameOrCorporateName",
      label: "Benef. Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "payerBank",
      label: "Payer Acc.",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "payerNameOrCorporateName",
      label: "Payer Acc. Name",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "currencyCode",
      label: "Currency Code",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "transferAmount",
      label: "Transfer Amount",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "vat",
      label: "VAT",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "charge",
      label: "Charge",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "transferNumber",
      label: "Transfer Number",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "recipientCountryCode",
      label: "Recipient Country code",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];
  return (
    <ViewPort>
    <Box>
      <Grid container spacing={1} >
        <Grid item xs={12} sm={12} md={12} sx={{ color: "#01175C" }}>
        <EntryTab />
          <h4>MULTIPLE ENTRY MODULE </h4>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <FormLabel>File Upload</FormLabel> <br />
          <TextField
            name="fileUpload"
            // label="File Upload"
            type="file"
            sx={{ width: "250px" }}
            inputProps={{
              accept: ".rcp",
              //   paddingLeft: "20px"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <FormLabel>File Number</FormLabel> <br />
          <TextField name="fileNumber" type="number" sx={{ width: "150px" }} />
        </Grid>
        <Grid xs={12} sm={12} md={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              textAlign: "center",
              padding: ".5rem, .7rem",
              background: "#FF8102",
              color: "white",
              width: "190px",
              borderRadius: "30px",
              marginBottom: "1rem",
              "&:hover": {
                bgcolor: "white",
                color: "#FF8102",
              },
            }}
          >
            Upload File
          </Button>
        </Grid>
        {data && (
          <>
            <Grid item xs={12} sm={12} md={12}>
              <MUIDataTable
                data={data}
                columns={columns}
                // options={options}
              />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={12}
              sx={{ textAlign: "right", marginTop: "2rem" }}
            >
              <Button
                variant="contained"
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  padding: ".7rem",
                  background: "#FF8102",
                  color: "white",
                  width: "170px",
                  borderRadius: "30px",
                  marginBottom: "1rem",
                  "&:hover": {
                    bgcolor: "white",
                    color: "#FF8102",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
    </ViewPort>
  );
};

export default MultipleEntriesPage;
