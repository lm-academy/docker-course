const express = require('express');
const mongoose = require('mongoose');
const { Notebook } = require('./models');

const notebookRouter = express.Router();

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Notebook not found.' });
  }

  next();
};

notebookRouter.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: "'name' field is required." });
    }

    if (description !== undefined && typeof description !== 'string') {
      return res.status(400).json({ error: "'description' field must be a string." });
    }

    const notebook = new Notebook({ name, description });
    await notebook.save();
    res.status(201).json({ data: notebook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.get('/', async (req, res) => {
  try {
    const notebooks = await Notebook.find();
    return res.status(200).json({ data: notebooks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.get('/:id', validateId, async (req, res) => {
  try {
    const notebook = await Notebook.findById(req.params.id);

    if (!notebook) {
      return res.status(404).json({ error: 'Notebook not found.' });
    }

    return res.status(200).json({ data: notebook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.put('/:id', validateId, async (req, res) => {
  try {
    const { name, description } = req.body;

    const notebook = await Notebook.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );

    if (!notebook) {
      return res.status(404).json({ error: 'Notebook not found.' });
    }

    return res.json({ data: notebook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.delete('/:id', validateId, async (req, res) => {
  try {
    const notebook = await Notebook.findByIdAndDelete(req.params.id);

    if (!notebook) {
      return res.status(404).json({ error: 'Notebook not found.' });
    }

    return res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  notebookRouter,
};
