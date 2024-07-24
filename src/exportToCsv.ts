import { mkConfig, generateCsv, download } from "export-to-csv";

function exportToCsv() {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)([]);
    console.log(csv);
    return true;
};

export { exportToCsv };