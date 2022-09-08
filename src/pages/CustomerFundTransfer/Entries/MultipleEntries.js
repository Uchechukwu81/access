// import React, { useState } from 'react';
// import { Grid, Button } from '@mui/material';
// import MUIDataTable from 'mui-datatables';
// import ControlledTextField from '../../../components/ControlledComponents/ControlledTextField';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import dayjs from 'dayjs';
// import { useSnackbar } from 'notistack';
// import { getErrorResponse } from '../../../helpers/getErrorResponse';
// import { useLoader, useDisclosure, useGlobalErrorModal } from '../../../hooks';
// import { fundTransferUpload, fundTransferSave } from '../../../api';
// import TableAction from '../../../components/TableAction';
// // import ViewModal from '../../../components/Modals/ViewModalFtr';
// // import { DIRECTION, TRANSFER_NATURE } from '../../../helpers/mappings';
// // import currencyCodes from '../../../helpers/currency-codes.json';
// // import SuccessModal from '../../../components/Modals/SuccessModal';
// // import { generateNumericId } from '../../../helpers/generateId';
// // import CurrencyFormat from '../../../components/CurrencyFormat';
// // import EditModalAch from '../../../components/Modals/EditModalAch';

// const MultipleEntries = () => {
//   const displayError = useGlobalErrorModal();
//   const columns = [
//     {
//       name: 'sn',
//       label: 'S/N',
//       options: {
//         filter: true,
//         sort: true,
//         customBodyRender: (value, meta) => {
//           return meta.rowIndex + 1;
//         }
//       }
//     },
//     {
//       name: 'beneficiaryaccount',
//       label: 'Benef. Acct ',
//       options: {
//         filter: true,
//         sort: true
//       }
//     },
//     {
//       name: 'beneficiarynameorcorporatename',
//       label: 'Benef. Name',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'payerbban',
//       label: 'Payer Acc.',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'payernameorcorporatename',
//       label: 'Payer Acc. Name',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'currencycode',
//       label: 'Currency Code',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => {
//           const c = currencyCodes.find((item) => item.NumericCode === Number(value));
//           return c && c['AlphabeticCode'] ? c['AlphabeticCode'] : value;
//         }
//       }
//     },
//     {
//       name: 'transferamount',
//       label: 'Transfer Amount',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => <CurrencyFormat value={Number(value)} displayType="text" />
//       }
//     },
//     {
//       name: 'vat',
//       label: 'VAT',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => <CurrencyFormat value={Number(value)} displayType="text" />
//       }
//     },
//     {
//       name: 'charge',
//       label: 'Charge',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => <CurrencyFormat value={Number(value)} displayType="text" />
//       }
//     },
//     {
//       name: 'transfernumber',
//       label: 'Transfer Number',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'recipientcountrycode',
//       label: 'Recipient Country code',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'remittentcountrycode',
//       label: 'Remittent Country code',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'direction',
//       label: 'Direction',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => DIRECTION[value] || value
//       }
//     },
//     {
//       name: 'clearingcode',
//       label: 'Clearing Code',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'instrumentcode',
//       label: 'Instrument Code',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'transfernature',
//       label: 'Nature of Cheque',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => TRANSFER_NATURE[value] || value
//       }
//     },
//     {
//       name: 'transactionreason',
//       label: 'Transaction Reason',
//       options: {
//         filter: true,
//         sort: false
//       }
//     },
//     {
//       name: 'appliedpresentationdate',
//       label: 'Presetation Date',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => dayjs(value).format('DD-MM-YYYY')
//       }
//     },
//     {
//       name: 'settlementdate',
//       label: 'Settlement Date',
//       options: {
//         filter: true,
//         sort: false,
//         customBodyRender: (value) => dayjs(value).format('DD-MM-YYYY')
//       }
//     },
//     {
//       name: 'Action',
//       options: {
//         filter: false,
//         sort: false,
//         empty: true,
//         customBodyRenderLite: (dataIndex) => {
//           return <TableAction onView={() => onView(dataIndex)} onEdit={() => onEdit(dataIndex)} />;
//         }
//       }
//     }
//   ];
//   const options = {
//     filterType: 'checkbox',
//     selectableRows: 'none'
//   };
//   const validationSchema = yup.object({
//     fileUpload: yup.string().required('Select a file to upload')
//   });

//   const [data, setData] = useState(null);
//   const [modalDetails, setModalDetails] = useState(null);
//   const { displayLoader, hideLoader } = useLoader();
//   const { enqueueSnackbar } = useSnackbar();
//   const { onOpen: onOpenEdit, onClose: onCloseEdit, isOpen: isOpenEdit } = useDisclosure();
//   const { onOpen: onOpenView, onClose: onCloseView, isOpen: isOpenView } = useDisclosure();
//   const { onOpen: onOpenSuccess, onClose: onCloseSuccess, isOpen: isOpenSuccess } = useDisclosure();

//   const onSubmit = async (values) => {
//     try {
//       const splitFileName = values.fileUpload.name.split('-');
//       if (splitFileName.length !== 8 || splitFileName[5] !== '10') {
//         displayError('Invalid filename format');
//         return;
//       }
//       displayLoader();
//       const { data } = await fundTransferUpload(values.fileUpload);
//       const batchno = `ACH${generateNumericId(33)}`;
//       // const batchno = generateAlphanumericId(36)
//       const uploadeD_BY = 'username';
//       const status = 'U';
//       setData({
//         ...data,
//         summary: {
//           ...data.summary,
//           batchno,
//           uploadeD_BY,
//           status
//         },
//         details: data.details.map((item) => ({
//           ...item,
//           batchno,
//           refno: generateNumericId(24),
//           vat: 5,
//           charge: 10,
//           status,
//           uploadeD_BY
//         }))
//       });
//     } catch (err) {
//       displayError(getErrorResponse(err));
//     } finally {
//       hideLoader();
//     }
//   };

//   const onSave = async () => {
//     try {
//       displayLoader();
//       const uploaD_DATE = new Date().toISOString();
//       const payload = {
//         summary: {
//           ...data.summary,
//           uploaD_DATE
//         },
//         details: data.details.map((item) => ({
//           ...item,
//           uploaD_DATE
//         }))
//       };
//       const res = await fundTransferSave(payload);
//       if (res.data.status) {
//         onOpenSuccess();
//       } else {
//         throw new Error('Failed to save transaction');
//       }
//     } catch (err) {
//       displayError(getErrorResponse(err));
//     } finally {
//       hideLoader();
//     }
//   };

//   const onView = (index) => {
//     setModalDetails({
//       details: data.details[index],
//       index
//     });
//     onOpenView();
//   };

//   const onEdit = (index) => {
//     setModalDetails({
//       details: data.details[index],
//       index
//     });
//     onOpenEdit();
//   };

//   const formik = useFormik({
//     initialValues: {
//       fileUpload: ''
//     },
//     validationSchema,
//     onSubmit
//   });

//   return (
//     <>
//       <Grid container spacing={1}>
//         <Grid item xs={12} sm={12} md={12}>
//           <h4>MULTIPLE ENTRY MODULE </h4>
//         </Grid>
//         <Grid item xs={12} sm={12} md={12}>
//           <ControlledTextField
//             name="fileUpload"
//             label="File Upload"
//             formik={formik}
//             type="file"
//             sx={{ width: '250px' }}
//             inputProps={{
//               accept: '.rcp'
//             }}
//           />
//         </Grid>
//         <Grid xs={12} sm={12} md={12} sx={{ textAlign: 'center' }}>
//           <Button
//             variant="contained"
//             sx={{
//               alignItems: 'center',
//               textAlign: 'center',
//               padding: '.7rem',
//               background: '#FF8102',
//               color: 'white',
//               width: '150px',
//               borderRadius: '30px',
//               marginBottom: '1rem',
//               '&:hover': {
//                 bgcolor: '#FF8102',
//                 color: 'white'
//               }
//             }}
//             onClick={formik.handleSubmit}
//           >
//             Upload File
//           </Button>
//         </Grid>
//         {data && (
//           <>
//             <Grid item xs={12} sm={12} md={12}>
//               <MUIDataTable data={data.details} columns={columns} options={options} />
//             </Grid>
//             <Grid xs={12} sm={12} md={12} sx={{ textAlign: 'right', marginTop: '2rem' }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   alignItems: 'center',
//                   textAlign: 'center',
//                   padding: '.7rem',
//                   background: '#FF8102',
//                   color: 'white',
//                   width: '150px',
//                   borderRadius: '30px',
//                   marginBottom: '1rem',
//                   '&:hover': {
//                     bgcolor: '#FF8102',
//                     color: 'white'
//                   }
//                 }}
//                 onClick={onSave}
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </>
//         )}
//       </Grid>

//       {modalDetails && (
//         <ViewModal
//           title="Customer Fund Transfer"
//           onClose={onCloseView}
//           open={isOpenView}
//           detailsData={modalDetails}
//           actionOnClose={() => setModalDetails(null)}
//         />
//       )}
//       {modalDetails && (
//         <EditModalAch
//           title="Customer Fund Transfer"
//           onClose={onCloseEdit}
//           open={isOpenEdit}
//           detailsData={modalDetails}
//           actionOnClose={() => setModalDetails(null)}
//           setData={setData}
//         />
//       )}

//       <SuccessModal
//         onClose={onCloseSuccess}
//         open={isOpenSuccess}
//         header={'Customer Fund Transfer'}
//         message={'Transaction Successful'}
//         actionOnClose={() => {
//           setData(null);
//           formik.handleReset();
//         }}
//       />
//     </>
//   );
// };

// export default MultipleEntries;
