import React, { useState } from 'react';
import { Button, Typography, TextField, Box } from '@mui/material';

function BudgetTracking() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', cost: '' });

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem({ name: '', cost: '' });
    };

    return (
        <Box>
            <Typography 
                variant="h4" 
                sx={{ fontWeight: 'bold', marginBottom: '20px' }}
            >
                Budget Tracking
            </Typography>
            <Box 
                component="form" 
                sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
                noValidate
            >
                <TextField
                    label="Item Name"
                    variant="outlined"
                    value={newItem.name}
                    onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                    fullWidth
                />
                <TextField
                    label="Cost"
                    variant="outlined"
                    type="number"
                    value={newItem.cost}
                    onChange={e => setNewItem({ ...newItem, cost: e.target.value })}
                    fullWidth
                />
            </Box>
            <Button 
                onClick={addItem}
                variant="contained"
                sx={{
                    fontSize: '18px',
                    padding: '10px 20px',
                    backgroundColor: '#28a745', // Primary green color
                    color: '#fff',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#218838', // Darker shade for hover effect
                    },
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    textTransform: 'none', // Keeps text case as is
                }}
            >
                Add Item
            </Button>
            <ul style={{ marginTop: '20px' }}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Typography variant="body1">
                            {item.name}: ${item.cost}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default BudgetTracking;
