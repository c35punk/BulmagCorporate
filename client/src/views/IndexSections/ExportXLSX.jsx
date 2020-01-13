import React from "react";
import { Button } from "reactstrap";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportXLSX = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToXLSX = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { Repairs: ws }, SheetNames: ["Repairs"], SheetHeader: ["One"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button
      className="mt-4"
      color="default"
      type="submit"
      onClick={e => exportToXLSX(csvData, fileName)}
    >
      Export .xlsx
    </Button>
  );
};
