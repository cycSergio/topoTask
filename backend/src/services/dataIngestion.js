import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
//import pdfParse from 'pdf-parse';
import pdfParse from 'pdf-parse/lib/pdf-parse';

import officeParser from 'officeparser';
import { promisify } from 'util';

const dataDir = path.join(process.cwd(), '..', 'data');

export default class DataIngestion {
    static readCSV(fileName = 'dataset2.csv') {
        const filePath = path.join(dataDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const parsed = Papa.parse(fileContent, { header: true });
        return parsed.data;
    }

    static readJSON(fileName = 'dataset1.json') {
        const filePath = path.join(dataDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    }

    static async readPDF(fileName = 'dataset3.pdf') {
        try {
            const filePath = path.join(process.cwd(), 'data', fileName);

            if (!fs.existsSync(filePath)) {
                throw new Error(`File not found: ${filePath}`);
            }

            const fileBuffer = fs.readFileSync(filePath);
            const data = await pdfParse(fileBuffer);
            return data.text;
        } catch (error) {
            console.error("Error reading PDF:", error.message);
            return "Error: Unable to read PDF file.";
        }
    }

    static async readPPTX(fileName = 'dataset4.pptx') {
        const filePath = path.join(dataDir, fileName);
        // try {
        //     const parseOfficeAsync = promisify(officeParser.parseOffice.bind(officeParser));
        //     const data = await parseOfficeAsync(filePath);
        //     if (data && typeof data === 'object' && data.text) {
        //         return data.text;
        //     } else {
        //         return String(data);
        //     }
        // } catch (err) {
        //     console.error('Error reading PPT:', err);
        //     return "无法解析 PPT 文件";
        // }
        return "TOFIX";
    }
}
