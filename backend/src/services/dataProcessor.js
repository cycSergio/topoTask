import _ from 'lodash';
import DataIngestion from './dataIngestion.js';

export default class DataProcessor {
  static cleanData(data) {
    if (Array.isArray(data)) {
      return data.map(entry => _.mapValues(entry, value => typeof value === 'string' ? value.trim() : value));
    }
    return data;
  }

  static async getUnifiedData() {
    const csvData = this.cleanData(DataIngestion.readCSV());
    const jsonData = this.cleanData(DataIngestion.readJSON());
    const pptxData = await DataIngestion.readPPTX();
    const pdfData = await DataIngestion.readPDF();

    return {
      csv: csvData,
      json: jsonData,
      pptx: pptxData,
      pdf: pdfData
    };
  }
}
