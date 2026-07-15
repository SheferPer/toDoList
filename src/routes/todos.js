const express = require('express');
const store = require('../data/todoStore');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(store.getAll());
});

router.get('/:id', (req, res) => {
  const todo = store.getById(Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

router.post('/', (req, res) => {
  const { title, completed } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'title is required and must be a string' });
  }
  const todo = store.create({ title, completed });
  res.status(201).json(todo);
});

router.put('/:id', (req, res) => {
  const { title, completed } = req.body;
  if (title !== undefined && typeof title !== 'string') {
    return res.status(400).json({ error: 'title must be a string' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'completed must be a boolean' });
  }
  const changes = {};
  if (title !== undefined) changes.title = title;
  if (completed !== undefined) changes.completed = completed;

  const todo = store.update(Number(req.params.id), changes);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

router.delete('/:id', (req, res) => {
  const deleted = store.remove(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Todo not found' });
  res.status(204).send();
});

module.exports = router;
