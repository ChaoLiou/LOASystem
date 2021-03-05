const headers = require("./headers/employee");
const {
  initSheet,
  init,
  initCell,
  mergeCells,
  initRow,
} = require("./util/xlsx-populate");
const { totalsToString } = require("./util/leave-type");
const { sumUpTotalsList } = require("./util/general");
const { align } = require("./styles/const");
const { setTextAlign } = require("./util/style");

module.exports = {
  produce,
};

function produce(workbook, employee, { year, sheetName }) {
  const sheet = initSheet(workbook, sheetName);

  drawRow(sheet, "A", "D", "", 1, `英孚森資訊 ${year} 年員工假卡`);
  drawRow(
    sheet,
    "A",
    "C",
    "D",
    2,
    `單位: ${employee.dept}`,
    `到職日期: ${formatDate(employee.arrivedDate)}`
  );
  drawRow(
    sheet,
    "A",
    "C",
    "D",
    3,
    `員工編號: ${employee.employeeID}`,
    `員工姓名: ${employee.name} ${employee.username}`
  );

  const rowIndexUsed = 4;
  headers.forEach(({ area, styles, width, height, title, name }) => {
    const { cell } = init(sheet, name, rowIndexUsed + 1, {
      area,
      styles,
      width,
      height,
    });
    const cellValue = title;
    cell.value(cellValue);
  });
  const filteredRecords = filter(employee.records, year);
  filteredRecords.forEach((record, index) => {
    headers.forEach(({ area, styles, width, height, dataKey, name }) => {
      const rowNumber = index + rowIndexUsed + 2;
      const { cell } = init(sheet, name, rowNumber, {
        area,
        styles,
        width,
        height,
      });
      if (dataKey === "appliedDate") {
        cell.value(formatDate(record[dataKey]));
      } else if (dataKey === "dates") {
        const dateStrings = record[dataKey].map((date) => formatDate(date));
        cell.value(dateStrings.join("\n"));
      } else if (dataKey === "totals") {
        cell.value(
          totalsToString(sumUpTotalsList([record[dataKey]]), record.leaveType)
        );
      } else if (dataKey === "signings") {
        cell.value(
          record[dataKey]
            .map(
              (signing) =>
                `${signing.name} - ${formatDateTime(signing.signedDate)}`
            )
            .join("\n")
        );
      }
    });
  });
  filteredRecords.forEach((record, index) => {
    headers.forEach(({ area, styles, width, height, dataKey, title, name }) => {
      const rowNumber = index + rowIndexUsed + 2;
      if (dataKey === "dates") {
        const { row } = init(sheet, name, rowNumber, {
          area,
          styles,
          width,
          height,
        });
        const dateStrings = record[dataKey].map((date) => formatDate(date));
        if (dateStrings.length > 2) {
          row.height(dateStrings.length * 20);
        }
      }
    });
  });
  return workbook;
}

function filter(records, year) {
  return records
    .filter(
      (record) =>
        haveSignersOfRecordAllSigned(record) && !isRecordSignedReject(record)
    )
    .filter((record) =>
      record.dates.some((date) => new Date(date).getFullYear() === year)
    );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatDateTime(datetime) {
  const dateObj = new Date(datetime);
  const fyear = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const fmonth = padLeft(month, 2, 0);
  const date = dateObj.getDate();
  const fdate = padLeft(date, 2, 0);
  const hour = dateObj.getHours() + 8;
  const fhour = padLeft(hour, 2, 0);
  const minute = dateObj.getMinutes();
  const fminute = padLeft(minute, 2, 0);
  return `${fyear}/${fmonth}/${fdate}, ${fhour}:${fminute}`;
}

function padLeft(target, length, character) {
  target = target.toString();
  return target.length > length
    ? target
    : Array.from({ length: length - target.length }, () => character).join("") +
        target;
}

function haveSignersOfRecordAllSigned(record) {
  return record.signers.every((signer) =>
    record.signings.some((signing) => signing.id === signer.id)
  );
}

function isRecordSignedReject(record) {
  return record.signings.some((signing) => !signing.pass);
}

function drawRow(
  sheet,
  fromColumn1,
  toColumn1,
  fromColumn2,
  rowNumber,
  content1,
  content2
) {
  const row = initRow(sheet, rowNumber);
  row.height(20);
  const fromCell1 = initCell(sheet, fromColumn1, rowNumber);
  const toCell1 = initCell(sheet, toColumn1, rowNumber);
  mergeCells(fromCell1, toCell1);
  fromCell1.value(content1);
  setTextAlign(fromCell1, align.direction.vertical, align.center);
  setTextAlign(fromCell1, align.direction.horizontal, align.center);
  fromCell1.style("fontSize", 14);

  if (fromColumn2) {
    const fromCell2 = initCell(sheet, fromColumn2, rowNumber);
    fromCell2.value(content2);
    setTextAlign(fromCell2, align.direction.vertical, align.center);
    setTextAlign(fromCell2, align.direction.horizontal, align.center);
    fromCell2.style("fontSize", 14);
  }
}
