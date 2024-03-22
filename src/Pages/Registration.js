import React, { useState } from "react";
import Table from "./Table";
import Tablef from "./Tablef";
const Registration = () => {
  const [formFields, setFormFields] = useState({
    DLNumber: "",
    DateOfBirth: "",
    DriverName: "",
    FatherName: "",
    MobileNumber: "",
    HouseMobileNumber: "",
    LicenceIssueDate: "",
    DLValidity: "",
    IssuedByRTO: "",
    LicenseType: "",
    LicenceIssueDate: "",
    LicenceIssueDateError: "",
    Village: "",
    Tahseel: "",
    PostOffice: "",
    PoliceStation: "",
    District: "",
    State: "",
    NeighbourName: "",
    NeighbourMobileNumber: "",
    NearRailwayStation: "",
    NearBusStand: "",
    EarlierEmployerName: "",
    EarlierEmployeeNumber: "",
    GuarantorName: "",
    GuarantorContactNumber: "",
    AadharCard: "",
    AadharName: "",
    AddressAadhar: "",
    DLUpload: "",
    DriverCurrentPhotoWithAadharcard: "",
    AccountNumber: "",
    AccountHolderName: "",
    IFSCCode: "",
    BankName: "",
    BankBranch: "",
    DLNumberError: "",
    DateOfBirthError: "",
    DriverNameError: "",
    FatherNameError: "",
    MobileNumberError: "",
    HouseMobileNumberError: "",
    LicenceIssueDateError: "",
    DLValidityError: "",
    IssuedByRTOError: "",
    LicenseTypeError: "",
    VillageError: "",
    TahseelError: "",
    PostOfficeError: "",
    PoliceStationError: "",
    DistrictError: "",
    StateError: "",
    NeighbourNameError: "",
    NeighbourMobileNumberError: "",
    NearRailwayStationError: "",
    NearBusStandError: "",
    EarlierEmployerNameError: "",
    EarlierEmployeeNumberError: "",
    GuarantorNameError: "",
    GuarantorContactNumberError: "",
    AadharCardError: "",
    AadharNameError: "",
    AddressaAadharError: "",
    DLUploadError: "",
    DriverCurrentPhotoWithAadharcardError: "",
    AccountNumberError: "",
    AccountHolderNameError: "",
    IFSCCodeError: "",
    BankNameError: "",
    BankBranchError: "",
  });
  const handleOnchange = (prop, value) => {
    if (prop == "DLNumber") {
      setFormFields((prev) => ({
        ...prev,
        DLNumber: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DLNumberError: "DLNumber is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        DLNumberError: "",
      }));
    }
    if (prop === "DateOfBirth") {
      setFormFields((prev) => ({
        ...prev,
        DateOfBirth: value,
      }));

      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DateOfBirthError: "Date of Birth is required",
        }));
      } else {
        // Calculate age based on the entered date of birth
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        // Check if the user is at least 26 years old
        if (age < 26) {
          setFormFields((prev) => ({
            ...prev,
            DateOfBirthError: "User must be at least 26 years old.",
          }));
        } else {
          // Reset error message if age requirement is met
          setFormFields((prev) => ({
            ...prev,
            DateOfBirthError: "",
          }));
        }
      }
    }

    if (prop == "DriverName") {
      setFormFields((prev) => ({
        ...prev,
        DriverName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DriverNameError: "DriverName is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        DriverNameError: "",
      }));
    }
    if (prop == "FatherName") {
      setFormFields((prev) => ({
        ...prev,
        FatherName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          FatherNameError: "FatherName is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        FatherNameError: "",
      }));
    }
    if (prop === "MobileNumber") {
      const strippedValue = value.replace(/\D/g, ""); // Remove all non-digit characters
      const limitedValue = strippedValue.slice(0, 10); // Limit to 10 digits

      setFormFields((prev) => ({
        ...prev,
        MobileNumber: limitedValue,
      }));

      if (!limitedValue) {
        setFormFields((prev) => ({
          ...prev,
          MobileNumberError: "Mobile Number is required",
        }));
      } else if (limitedValue.length < 10) {
        setFormFields((prev) => ({
          ...prev,
          MobileNumberError: "Mobile Number must be 10 digits",
        }));
      } else if (
        limitedValue.startsWith("0") ||
        limitedValue.startsWith("1") ||
        limitedValue.startsWith("2") ||
        limitedValue.startsWith("3") ||
        limitedValue.startsWith("4")
      ) {
        setFormFields((prev) => ({
          ...prev,
          MobileNumberError: "Please enter a valid Phone Number",
        }));
      } else if (limitedValue.includes("-") || limitedValue.includes("+")) {
        setFormFields((prev) => ({
          ...prev,
          MobileNumberError: "Mobile Number cannot contain '-' or '+'",
        }));
      } else {
        setFormFields((prev) => ({
          ...prev,
          MobileNumberError: "",
        }));
      }
    }

    if (prop === "HouseMobileNumber") {
      const strippedValue = value.replace(/\D/g, "");
      const limitedValue = strippedValue.slice(0, 10);

      // Update the state with the limited value
      setFormFields((prev) => ({
        ...prev,
        HouseMobileNumber: limitedValue,
      }));

      if (!limitedValue) {
        setFormFields((prev) => ({
          ...prev,
          HouseMobileNumberError: "HouseMobileNumber Number is required",
        }));
      } else if (
        limitedValue.startsWith("0") ||
        limitedValue.startsWith("1") ||
        limitedValue.startsWith("2") ||
        limitedValue.startsWith("3") ||
        limitedValue.startsWith("4")
      ) {
        setFormFields((prev) => ({
          ...prev,
          HouseMobileNumberError: "Please enter a valid Phone Number",
        }));
      } else if (limitedValue.length < 10) {
        setFormFields((prev) => ({
          ...prev,
          HouseMobileNumberError: "HouseMobileNumber  must be 10 digits",
        }));
      } else {
        setFormFields((prev) => ({
          ...prev,
          HouseMobileNumberError: "",
        }));
      }
    }
    if (prop == "LicenceIssueDate") {
      setFormFields((prev) => ({
        ...prev,
        LicenceIssueDate: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          LicenceIssueDateError: "LicenceIssueDate is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        LicenceIssueDateError: "",
      }));
    }
    if (prop == "DLValidity") {
      setFormFields((prev) => ({
        ...prev,
        DLValidity: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DLValidityError: "DLValidity is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        DLValidityError: "",
      }));
    }
    if (prop == "IssuedByRTO") {
      setFormFields((prev) => ({
        ...prev,
        IssuedByRTO: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          IssuedByRTOError: "IssuedByRTO is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        IssuedByRTOError: "",
      }));
    }
    if (prop == "LicenseType") {
      setFormFields((prev) => ({
        ...prev,
        LicenseType: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          LicenseTypeError: "LicenseType is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        LicenseTypeError: "",
      }));
    }
    if (prop == "Village") {
      setFormFields((prev) => ({
        ...prev,
        Village: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          VillageError: "Village is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        VillageError: "",
      }));
    }
    if (prop == "Tahseel") {
      setFormFields((prev) => ({
        ...prev,
        Tahseel: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          TahseelError: "Tahseel is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        TahseelError: "",
      }));
    }
    if (prop == "PostOffice") {
      setFormFields((prev) => ({
        ...prev,
        PostOffice: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          PostOfficeError: "PostOffice is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        PostOfficeError: "",
      }));
    }
    if (prop == "PoliceStation") {
      setFormFields((prev) => ({
        ...prev,
        PoliceStation: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          PoliceStationError: "PoliceStation is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        PoliceStationError: "",
      }));
    }
    if (prop == "District") {
      setFormFields((prev) => ({
        ...prev,
        District: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DistrictError: "District is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        DistrictError: "",
      }));
    }
    if (prop == "State") {
      setFormFields((prev) => ({
        ...prev,
        State: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          StateError: "State is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        StateError: "",
      }));
    }
    if (prop == "NeighbourName") {
      setFormFields((prev) => ({
        ...prev,
        NeighbourName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          NeighbourNameError: "NeighbourName is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        NeighbourNameError: "",
      }));
    }
    if (prop === "NeighbourMobileNumber") {
      const strippedValue = value.replace(/\D/g, "");
      const limitedValue = strippedValue.slice(0, 10);

      // Update the state with the limited value
      setFormFields((prev) => ({
        ...prev,
        NeighbourMobileNumber: limitedValue,
      }));

      if (!limitedValue) {
        setFormFields((prev) => ({
          ...prev,
          NeighbourMobileNumberError: "Neighbour Mobile Number is required",
        }));
      } else if (
        limitedValue.startsWith("0") ||
        limitedValue.startsWith("1") ||
        limitedValue.startsWith("2") ||
        limitedValue.startsWith("3") ||
        limitedValue.startsWith("4")
      ) {
        setFormFields((prev) => ({
          ...prev,
          NeighbourMobileNumberError: "Please enter a valid Phone Number",
        }));
      } else if (limitedValue.length < 10) {
        setFormFields((prev) => ({
          ...prev,
          NeighbourMobileNumberError:
            "Neighbour Mobile Number Number must be 10 digits",
        }));
      } else {
        setFormFields((prev) => ({
          ...prev,
          NeighbourMobileNumberError: "",
        }));
      }
    }
    if (prop == "NearRailwayStation") {
      setFormFields((prev) => ({
        ...prev,
        NearRailwayStation: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          NearRailwayStationError: "Near Railway Station is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        NearRailwayStationError: "",
      }));
    }

    if (prop == "NearBusStand") {
      setFormFields((prev) => ({
        ...prev,
        NearBusStand: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          NearBusStandError: "NearBusStand is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        NearBusStandError: "",
      }));
    }
    if (prop == "EarlierEmployerName") {
      setFormFields((prev) => ({
        ...prev,
        EarlierEmployerName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          EarlierEmployerNameError: "Earlier Employer Name is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        EarlierEmployerNameError: "",
      }));
    }
    if (prop === "EarlierEmployeeNumber") {
      const strippedValue = value.replace(/\D/g, "");
      const limitedValue = strippedValue.slice(0, 10);

      // Update the state with the limited value
      setFormFields((prev) => ({
        ...prev,
        EarlierEmployeeNumber: limitedValue,
      }));

      if (!limitedValue) {
        setFormFields((prev) => ({
          ...prev,
          EarlierEmployeeNumberError: "Earlier Employee Number is required",
        }));
      } else if (
        limitedValue.startsWith("0") ||
        limitedValue.startsWith("1") ||
        limitedValue.startsWith("2") ||
        limitedValue.startsWith("3") ||
        limitedValue.startsWith("4")
      ) {
        setFormFields((prev) => ({
          ...prev,
          EarlierEmployeeNumberError: "Please enter a valid Phone Number",
        }));
      } else if (limitedValue.length < 10) {
        setFormFields((prev) => ({
          ...prev,
          EarlierEmployeeNumberError:
            "Earlier Employee Number must be 10 digits",
        }));
      } else {
        setFormFields((prev) => ({
          ...prev,
          EarlierEmployeeNumberError: "",
        }));
      }
    }
    if (prop == "GuarantorName") {
      setFormFields((prev) => ({
        ...prev,
        GuarantorName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          GuarantorNameError: "Guarantor Name is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        GuarantorNameError: "",
      }));
    }
    if (prop === "AadharCard") {
      setFormFields((prev) => ({
        ...prev,
        AadharCard: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          AadharCardError: "Aadhar Card is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        AadharCardError: "",
      }));
    }
    if (prop === "AadharName") {
      setFormFields((prev) => ({
        ...prev,
        AadharName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          AadharNameError: "AadharName is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        AadharNameError: "",
      }));
    }
    if (prop === "AddressAadhar") {
      setFormFields((prev) => ({
        ...prev,
        AddressAadhar: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          AddressAadharError: "Address Aadhar is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        AddressAadharError: "",
      }));
    }
    if (prop === "GuarantorContactNumber") {
      const strippedValue = value.replace(/\D/g, "");
      const limitedValue = strippedValue.slice(0, 10);
      setFormFields((prev) => ({
        ...prev,
        GuarantorContactNumber: limitedValue,
      }));

      if (!limitedValue) {
        setFormFields((prev) => ({
          ...prev,
          GuarantorContactNumberError: "Guarantor Contact Number is required",
        }));
      } else if (
        limitedValue.startsWith("0") ||
        limitedValue.startsWith("1") ||
        limitedValue.startsWith("2") ||
        limitedValue.startsWith("3") ||
        limitedValue.startsWith("4")
      ) {
        setFormFields((prev) => ({
          ...prev,
          GuarantorContactNumberError: "Please enter a valid Phone Number",
        }));
      } else if (limitedValue.length < 10) {
        setFormFields((prev) => ({
          ...prev,
          GuarantorContactNumberError:
            "Guarantor Contact Number Number must be 10 digits",
        }));
      } else {
        setFormFields((prev) => ({
          ...prev,
          GuarantorContactNumberError: "",
        }));
      }
    }
    if (prop == "DLUpload") {
      setFormFields((prev) => ({
        ...prev,
        DLUpload: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DLUploadError: "DLUpload is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        DLUploadError: "",
      }));
    }
    if (prop == "DriverCurrentPhotoWithAadharcard") {
      setFormFields((prev) => ({
        ...prev,
        DriverCurrentPhotoWithAadharcard: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          DriverCurrentPhotoWithAadharcardError:
            "DriverCurrentPhotoWithAadharcard is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        DriverCurrentPhotoWithAadharcardError: "",
      }));
    }
    if (prop === "AccountNumber") {
      // Remove non-numeric characters from the input value
      const strippedValue = value.replace(/\D/g, "");
      // Limit the length of the value to 14 characters
      const limitedValue = strippedValue.slice(0, 14);

      // Check if the limitedValue is empty
      if (!limitedValue) {
        setFormFields((prev) => ({
          ...prev,
          AccountNumber: "",
          AccountNumberError: "Account number is required",
        }));
      } else if (limitedValue.length < 14) {
        setFormFields((prev) => ({
          ...prev,
          AccountNumber: limitedValue,
          AccountNumberError: "Account number must be 14 digits",
        }));
      } else {
        // Update the state with the limited value
        setFormFields((prev) => ({
          ...prev,
          AccountNumber: limitedValue,
          AccountNumberError: "",
        }));
      }
    }

    if (prop == "AccountHolderName") {
      setFormFields((prev) => ({
        ...prev,
        AccountHolderName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          AccountHolderNameError: "AccountHolderName is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        AccountHolderNameError: "",
      }));
    }
    if (prop == "IFSCCode") {
      if (value.length > 11) {
        return;
      }
      setFormFields((prev) => ({
        ...prev,
        IFSCCode: value,
      }));
      const regexPattern = /^[A-Z]{4}0[A-Z0-9]{6}$/;
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          IFSCCodeError: "IFSC code is required",
        }));
      } else if (!regexPattern.test(value)) {
        setFormFields((prev) => ({
          ...prev,
          IFSCCodeError: "Please enter a valid IFSC code",
        }));
      } else {
        setFormFields((prev) => ({
          ...prev,
          IFSCCode: value,
          IFSCCodeError: "",
        }));
      }
    }
    if (prop == "BankName") {
      setFormFields((prev) => ({
        ...prev,
        BankName: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          BankNameError: "BankName is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        BankNameError: "",
      }));
    }
    if (prop == "BankBranch") {
      setFormFields((prev) => ({
        ...prev,
        BankBranch: value,
      }));
      if (!value) {
        setFormFields((prev) => ({
          ...prev,
          BankBranchError: "BankBranch is required",
        }));
      }
      setFormFields((prev) => ({
        ...prev,
        BankBranchError: "",
      }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let Error = false;
    if (!formFields.DLNumber) {
      setFormFields((prev) => ({
        ...prev,
        DLNumberError: " DL Number is required",
      }));
      Error = true;
    }
    if (!formFields.DateOfBirth) {
      setFormFields((prev) => ({
        ...prev,
        DateOfBirthError: " Date Of Birth is required",
      }));
      Error = true;
    }
    if (!formFields.DriverName) {
      setFormFields((prev) => ({
        ...prev,
        DriverNameError: "Driver Name is required",
      }));
      Error = true;
    }
    if (!formFields.FatherName) {
      setFormFields((prev) => ({
        ...prev,
        FatherNameError: "Father Name is required",
      }));
      Error = true;
    }
    if (!formFields.MobileNumber) {
      setFormFields((prev) => ({
        ...prev,
        MobileNumberError: "Mobile Number is required",
      }));
      Error = true;
    }
    if (!formFields.HouseMobileNumber) {
      setFormFields((prev) => ({
        ...prev,
        HouseMobileNumberError: "House Mobile Number is required",
      }));
      Error = true;
    }
    if (!formFields.LicenceIssueDate) {
      setFormFields((prev) => ({
        ...prev,
        LicenceIssueDateError: "Licence Issue Date is required",
      }));
      Error = true;
    }

    if (!formFields.DLValidity) {
      setFormFields((prev) => ({
        ...prev,
        DLValidityError: "DL Validity is required",
      }));
      Error = true;
    }
    if (!formFields.IssuedByRTO) {
      setFormFields((prev) => ({
        ...prev,
        IssuedByRTOError: "Issued By RTO is required",
      }));
      Error = true;
    }
    if (!formFields.LicenseType) {
      setFormFields((prev) => ({
        ...prev,
        LicenseTypeError: "License Type is required",
      }));
      Error = true;
    }

    if (!formFields.Village) {
      setFormFields((prev) => ({
        ...prev,
        VillageError: "Village is required",
      }));
      Error = true;
    }
    if (!formFields.Tahseel) {
      setFormFields((prev) => ({
        ...prev,
        TahseelError: "Tahseel is required",
      }));
      Error = true;
    }
    if (!formFields.PostOffice) {
      setFormFields((prev) => ({
        ...prev,
        PostOfficeError: "Post Office is required",
      }));
      Error = true;
    }
    if (!formFields.PoliceStation) {
      setFormFields((prev) => ({
        ...prev,
        PoliceStationError: "Police Station is required",
      }));
      Error = true;
    }
    if (!formFields.District) {
      setFormFields((prev) => ({
        ...prev,
        DistrictError: "District is required",
      }));
      Error = true;
    }
    if (!formFields.State) {
      setFormFields((prev) => ({
        ...prev,
        StateError: "State is required",
      }));
      Error = true;
    }

    if (!formFields.NeighbourName) {
      setFormFields((prev) => ({
        ...prev,
        NeighbourNameError: "Neighbour Name is required",
      }));
      Error = true;
    }
    if (!formFields.NeighbourMobileNumber) {
      setFormFields((prev) => ({
        ...prev,
        NeighbourMobileNumberError: "Neighbour Mobile Number is required",
      }));
      Error = true;
    }
    if (!formFields.NearRailwayStation) {
      setFormFields((prev) => ({
        ...prev,
        NearRailwayStationError: "Near Railway Station is required",
      }));
      Error = true;
    }
    if (!formFields.NearBusStand) {
      setFormFields((prev) => ({
        ...prev,
        NearBusStandError: "Near Bus Stand is required",
      }));
      Error = true;
    }

    if (!formFields.EarlierEmployerName) {
      setFormFields((prev) => ({
        ...prev,
        EarlierEmployerNameError: "Earlier Employer Name is required",
      }));
      Error = true;
    }
    if (!formFields.EarlierEmployeeNumber) {
      setFormFields((prev) => ({
        ...prev,
        EarlierEmployeeNumberError: "Earlier Employee Number is required",
      }));
      Error = true;
    }
    if (!formFields.GuarantorContactNumber) {
      setFormFields((prev) => ({
        ...prev,
        GuarantorContactNumberError: "Guarantor Contact Number is required",
      }));
      Error = true;
    }
    if (!formFields.GuarantorName) {
      setFormFields((prev) => ({
        ...prev,
        GuarantorNameError: "Guarantor Name is required",
      }));
      Error = true;
    }
    if (!formFields.AadharCard) {
      setFormFields((prev) => ({
        ...prev,
        AadharCardError: "Aadhar Card is required",
      }));
      Error = true;
    }
    if (!formFields.AadharName) {
      setFormFields((prev) => ({
        ...prev,
        AadharNameError: "Aadhar Name is required",
      }));
      Error = true;
    }
    if (!formFields.AddressAadhar) {
      setFormFields((prev) => ({
        ...prev,
        AddressAadharError: "Address Aadhar is required",
      }));
      Error = true;
    }
    if (!formFields.DLUpload) {
      setFormFields((prev) => ({
        ...prev,
        DLUploadError: "DL Upload is required",
      }));
      Error = true;
    }
    if (!formFields.DriverCurrentPhotoWithAadharcard) {
      setFormFields((prev) => ({
        ...prev,
        DriverCurrentPhotoWithAadharcardError:
          "Driver Current Photo With Aadharcard is required",
      }));
      Error = true;
    }
    if (!formFields.AccountNumber) {
      setFormFields((prev) => ({
        ...prev,
        AccountNumberError: "Account Number is required",
      }));
      Error = true;
    }
    if (!formFields.AccountHolderName) {
      setFormFields((prev) => ({
        ...prev,
        AccountHolderNameError: "Account Holder Name is required",
      }));
      Error = true;
    }
    if (!formFields.IFSCCode) {
      setFormFields((prev) => ({
        ...prev,
        IFSCCodeError: "IFSC Code is required",
      }));
      Error = true;
    }
    if (!formFields.BankName) {
      setFormFields((prev) => ({
        ...prev,
        BankNameError: "Bank Name is required",
      }));
      Error = true;
    }
    if (!formFields.BankBranch) {
      setFormFields((prev) => ({
        ...prev,
        BankBranchError: "Bank Branch is required",
      }));
      Error = true;
    }
    if (!Error) {
      alert("Form submitted successfully.");
      console.log("Form Data:", formFields); // Log the form data
      // window.location.reload();
    } else {
      alert("Form has errors. Please correct them.");
    }
  };

  const getData = () => {};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card bg-light p-4 mt-3">
                <h2 className="text-primary fw-bold">Driver Registration</h2>

                <h5 className="title">Driver Details</h5>
                <div className="row">
                  <div className="input-field col-sm-4 col-12">
                    <label>
                      D/L Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter D/L Number"
                      value={formFields.DLNumber}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("DLNumber", event.target.value)
                      }
                      min="0"
                    />
                    {formFields.DLNumberError && (
                      <span style={{ color: "red" }}>
                        {formFields.DLNumberError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Date Of Birth<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="date"
                      className="regPgDate"
                      placeholder="Enter Date Of Birth"
                      value={formFields.DateOfBirth}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("DateOfBirth", event.target.value)
                      }
                    />
                    {formFields.DateOfBirthError && (
                      <span style={{ color: "red" }}>
                        {formFields.DateOfBirthError}
                      </span>
                    )}
                  </div>
                  <div className="col-md-3" style={{ marginTop: "25px" }}>
                    <button
                      className="btn-submit btn btn-primary w-20"
                      style={{
                        borderRadius: "10px",
                        padding: "10px",
                        alignItems: "center",
                        height: "40px",
                      }}
                    >
                      Get Details &rarr;
                    </button>
                  </div>

                  <div className="input-field col-sm-4">
                    <label>
                      Driver Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Driver Name"
                      value={formFields.DriverName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("DriverName", event.target.value)
                      }
                    />
                    {formFields.DriverNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.DriverNameError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Father Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Father Name"
                      value={formFields.FatherName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("FatherName", event.target.value)
                      }
                    />
                    {formFields.FatherNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.FatherNameError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Mobile Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      id="txtmobilenumber"
                      placeholder="Your Mobile Number.."
                      className="custom-input"
                      value={formFields.MobileNumber}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("MobileNumber", event.target.value)
                      }
                      min="0"
                    />
                    {formFields.MobileNumberError && (
                      <span style={{ color: "red" }}>
                        {formFields.MobileNumberError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      House Mobile Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      id="txthousemobilenumber"
                      placeholder="Your House Mobile Number.."
                      className="custom-input"
                      value={formFields.HouseMobileNumber}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("HouseMobileNumber", event.target.value)
                      }
                      min="0"
                    />
                    {formFields.HouseMobileNumberError && (
                      <span style={{ color: "red" }}>
                        {formFields.HouseMobileNumberError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Licence Issue Date<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="date"
                      className="regPgDate"
                      placeholder="Enter Licence Issue Date"
                      value={formFields.LicenceIssueDate}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("LicenceIssueDate", event.target.value)
                      }
                    />
                    {formFields.LicenceIssueDateError && (
                      <span style={{ color: "red" }}>
                        {formFields.LicenceIssueDateError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      D/L Validity<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter D/L Validity"
                      value={formFields.DLValidity}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("DLValidity", event.target.value)
                      }
                    />
                    {formFields.DLValidityError && (
                      <span style={{ color: "red" }}>
                        {formFields.DLValidityError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Issued By RTO<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Issued By RTO"
                      value={formFields.IssuedByRTO}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("IssuedByRTO", event.target.value)
                      }
                    />
                    {formFields.IssuedByRTOError && (
                      <span style={{ color: "red" }}>
                        {formFields.IssuedByRTOError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      License Type<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter License Type"
                      className="custom-input"
                      value={formFields.LicenseType}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("LicenseType", event.target.value)
                      }
                    />
                    {formFields.LicenseTypeError && (
                      <span style={{ color: "red" }}>
                        {formFields.LicenseTypeError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Village<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Village"
                      value={formFields.Village}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("Village", event.target.value)
                      }
                    />
                    {formFields.VillageError && (
                      <span style={{ color: "red" }}>
                        {formFields.VillageError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Tahseel<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Tahseel"
                      className="custom-input"
                      value={formFields.Tahseel}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("Tahseel", event.target.value)
                      }
                    />
                    {formFields.TahseelError && (
                      <span style={{ color: "red" }}>
                        {formFields.TahseelError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Post Office<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Post Office "
                      value={formFields.PostOffice}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("PostOffice", event.target.value)
                      }
                    />
                    {formFields.PostOfficeError && (
                      <span style={{ color: "red" }}>
                        {formFields.PostOfficeError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Police Station<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Police Station"
                      className="custom-input"
                      value={formFields.PoliceStation}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("PoliceStation", event.target.value)
                      }
                    />
                    {formFields.PoliceStationError && (
                      <span style={{ color: "red" }}>
                        {formFields.PoliceStationError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      District<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter District"
                      className="custom-input"
                      value={formFields.District}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("District", event.target.value)
                      }
                    />
                    {formFields.DistrictError && (
                      <span style={{ color: "red" }}>
                        {formFields.DistrictError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      State<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="custom-input"
                      value={formFields.State}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("State", event.target.value)
                      }
                    />
                    {formFields.StateError && (
                      <span style={{ color: "red" }}>
                        {formFields.StateError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Neighbour Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Neighbour Name"
                      className="custom-input"
                      value={formFields.NeighbourName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("NeighbourName", event.target.value)
                      }
                    />
                    {formFields.NeighbourNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.NeighbourNameError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Neighbour Mobile Number
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      id="txtneighbourmobilenumber"
                      className="custom-input"
                      placeholder="Your Neighbour Mobile Number.."
                      value={formFields.NeighbourMobileNumber}
                      autoComplete="off"
                      min="0"
                      onChange={(event) =>
                        handleOnchange(
                          "NeighbourMobileNumber",
                          event.target.value
                        )
                      }
                    />
                    {formFields.NeighbourMobileNumberError && (
                      <span style={{ color: "red" }}>
                        {formFields.NeighbourMobileNumberError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Near Railway Station
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Near Railway Station"
                      value={formFields.NearRailwayStation}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("NearRailwayStation", event.target.value)
                      }
                    />
                    {formFields.NearRailwayStationError && (
                      <span style={{ color: "red" }}>
                        {formFields.NearRailwayStationError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Near Bus Stand<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Near Bus Stand"
                      className="custom-input"
                      value={formFields.NearBusStand}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("NearBusStand", event.target.value)
                      }
                    />
                    {formFields.NearBusStandError && (
                      <span style={{ color: "red" }}>
                        {formFields.NearBusStandError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Earlier Employer Name
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Enter Earlier Employer Name"
                      value={formFields.EarlierEmployerName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange(
                          "EarlierEmployerName",
                          event.target.value
                        )
                      }
                    />
                    {formFields.EarlierEmployerNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.EarlierEmployerNameError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      {" "}
                      Earlier Employer Number
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      id="txtcontactnumber"
                      className="custom-input"
                      placeholder="Earlier Employee Mobile Number.."
                      value={formFields.EarlierEmployeeNumber}
                      autoComplete="off"
                      min="0"
                      onChange={(event) =>
                        handleOnchange(
                          "EarlierEmployeeNumber",
                          event.target.value
                        )
                      }
                    />
                    {formFields.EarlierEmployeeNumberError && (
                      <span style={{ color: "red" }}>
                        {formFields.EarlierEmployeeNumberError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Guarantor Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Guarantor Name"
                      className="custom-input"
                      value={formFields.GuarantorName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("GuarantorName", event.target.value)
                      }
                    />
                    {formFields.GuarantorNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.GuarantorNameError}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="input-field col-sm-4"
                  style={{ marginBottom: "20px" }}
                >
                  <label>
                    Guarantor Contact Number
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    id="txtguarantorcontactnumber"
                    className="custom-input"
                    placeholder="Your Mobile Number.."
                    value={formFields.GuarantorContactNumber}
                    autoComplete="off"
                    min="0"
                    onChange={(event) =>
                      handleOnchange(
                        "GuarantorContactNumber",
                        event.target.value
                      )
                    }
                  />
                  {formFields.GuarantorContactNumberError && (
                    <span style={{ color: "red" }}>
                      {formFields.GuarantorContactNumberError}
                    </span>
                  )}
                </div>

                <h5>Aadhaar verification</h5>

                <div className="row">
                  <div
                    className="input-field col-sm-4"
                    style={{ marginBottom: "20px" }}
                  >
                    <label>
                      Aadhar Card Number
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Aadhar Card Number"
                      className="custom-input"
                      value={formFields.AadharCard}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("AadharCard", event.target.value)
                      }
                    />
                    {formFields.AadharCardError && (
                      <span style={{ color: "red" }}>
                        {formFields.AadharCardError}
                      </span>
                    )}
                  </div>

                  <div className="col-md-3" style={{ marginTop: "25px" }}>
                    <button
                      className="btn-submit btn btn-primary w-20"
                      style={{
                        borderRadius: "10px",
                        padding: "10px",
                        alignItems: "center",
                        height: "40px",
                      }}
                    >
                      Aadhar verification &rarr;
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="input-field col-sm-4"
                    style={{ marginBottom: "20px" }}
                  >
                    <label>
                      Name On Aadhar<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name On Aadhar Card"
                      className="custom-input"
                      value={formFields.AadharName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("AadharName", event.target.value)
                      }
                    />
                    {formFields.AadharNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.AadharNameError}
                      </span>
                    )}
                  </div>

                  <div
                    className="input-field col-sm-4"
                    style={{ marginBottom: "20px" }}
                  >
                    <label>
                      Address On Aadhar<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Address On Aadhar card"
                      className="custom-input"
                      value={formFields.AddressAadhar}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("AddressAadhar", event.target.value)
                      }
                    />
                    {formFields.AddressAadharError && (
                      <span style={{ color: "red" }}>
                        {formFields.AddressAadharError}
                      </span>
                    )}
                  </div>
                </div>

                <br />
                <h5 className="title">For File Upload</h5>
                <div className="row">
                  <div className="input-field col-sm-4">
                    <label>
                      D/L Upload<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      placeholder="test"
                      className="regPgDate"
                      value={formFields.DLUpload}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("DLUpload", event.target.value)
                      }
                    />
                    {formFields.DLUploadError && (
                      <span style={{ color: "red" }}>
                        {formFields.DLUploadError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label style={{ textWrap: "nowrap" }}>
                      Driver Current Photo With Aadharcard
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      placeholder=""
                      className="regPgDate"
                      value={formFields.DriverCurrentPhotoWithAadharcard}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange(
                          "DriverCurrentPhotoWithAadharcard",
                          event.target.value
                        )
                      }
                    />
                    {formFields.DriverCurrentPhotoWithAadharcardError && (
                      <span style={{ color: "red" }}>
                        {formFields.DriverCurrentPhotoWithAadharcardError}
                      </span>
                    )}
                  </div>
                </div>
                <br></br>
                <h5 className="title">RTGS Details</h5>
                <div className="row">
                  <div className="input-field col-sm-4">
                    <label>
                      Account Number<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Account Number"
                      className="custom-input"
                      value={formFields.AccountNumber}
                      autoComplete="off"
                      min="0"
                      onChange={(event) =>
                        handleOnchange("AccountNumber", event.target.value)
                      }
                    />
                    {formFields.AccountNumberError && (
                      <span style={{ color: "red" }}>
                        {formFields.AccountNumberError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Account Holder Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Account Holder Name"
                      className="custom-input"
                      value={formFields.AccountHolderName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("AccountHolderName", event.target.value)
                      }
                    />
                    {formFields.AccountHolderNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.AccountHolderNameError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      IFSC Code<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter IFSC Code"
                      className="custom-input"
                      value={formFields.IFSCCode}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("IFSCCode", event.target.value)
                      }
                    />
                    {formFields.IFSCCodeError && (
                      <span style={{ color: "red" }}>
                        {formFields.IFSCCodeError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Bank Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Bank Name"
                      className="custom-input"
                      value={formFields.BankName}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("BankName", event.target.value)
                      }
                    />
                    {formFields.BankNameError && (
                      <span style={{ color: "red" }}>
                        {formFields.BankNameError}
                      </span>
                    )}
                  </div>
                  <div className="input-field col-sm-4">
                    <label>
                      Bank Branch<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Bank Branch"
                      className="custom-input"
                      value={formFields.BankBranch}
                      autoComplete="off"
                      onChange={(event) =>
                        handleOnchange("BankBranch", event.target.value)
                      }
                    />
                    {formFields.BankBranchError && (
                      <span style={{ color: "red" }}>
                        {formFields.BankBranchError}
                      </span>
                    )}
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="card bg-light mt-2 p-3">
            <h5 className="">Driver Trip Details</h5>
            <Table />
            <h5 className="">Driver Pendency Details</h5>
            <Tablef />

            <div className="col-md-3" style={{ marginTop: "25px" }}>
              <button
                className="btn-submit btn btn-primary w-40"
                style={{ borderRadius: "10px", padding: "10px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
