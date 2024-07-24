import { mkConfig, generateCsv, download } from "export-to-csv";

function exportToCsv() {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)([{
        name: "Rouky",
        date: "2023-09-01",
        percentage: 0.4,
        quoted: '"Pickles"',
      },
      {
        name: "Keiko",
        date: "2023-09-01",
        percentage: 0.9,
        quoted: '"Cactus"',
      },]);
    console.log(csv);
    return true;
};

export { exportToCsv };