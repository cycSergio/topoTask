import DataProcessor from '../services/dataProcessor.js';

export const getAllData = async (req, res) => {
  try {
    const data = await DataProcessor.getUnifiedData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDataByType = async (req, res) => {
  try {
    const { file_type } = req.params;
    const data = await DataProcessor.getUnifiedData();
    if (data[file_type]) {
      res.json({ [file_type]: data[file_type] });
    } else {
      res.status(404).json({ error: "Invalid file type" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
