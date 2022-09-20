import React from "react";
import { Grid } from "@mui/material";
import MUIDataTable from "mui-datatables";
import ViewPort from "../../components/ViewPort/ViewPort";

const data = [
  {
    sn: "",
    beneficiaryAccount: "",
    beneficiaryName: "",
    payerBank: "",
    payerName: "",
    currencyCode: "",
    transferAmount: "",
    transferNumber: "",
    recipientCountryCode: "",
    remittentCountryCode: "",
    direction: "",
    status: "",
    clearingCode: "",
    instrumentCode: "",
    transferNature: "",
    transactionReason: "",
    appliedPresentationDate: "",
    settlementDate: "",
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
    name: "beneficiaryName",
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
    name: "payerName",
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
  {
    name: "remittentCountryCode",
    label: "Remittent Country code",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "direction",
    label: "Direction",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "status",
    label: "Transaction Status",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "clearingCode",
    label: "Clearing Code",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "instrumentCode",
    label: "Instrument Code",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "transferNature",
    label: "Nature of Cheque",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "transactionReason",
    label: "Transaction Reason",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "appliedPresentationDate",
    label: "Presetation Date",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "settlementDate",
    label: "Settlement Date",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const MasterList = () => {
  return (
    <ViewPort>
      <Grid
        container
        spacing={1}
        sx={{ paddingLeft: "40px", color: "#01175C", fontSize: "12px" }}
      >
        <h4>Master List</h4>
      </Grid>
      <Grid container spacing={1} sx={{ padding: "1.5rem", marginTop: "40px" }}>
        <Grid item xs={12} sm={12} md={12}>
          <MUIDataTable data={data} columns={columns} />
        </Grid>
      </Grid>
    </ViewPort>
  );
};

export default MasterList;
