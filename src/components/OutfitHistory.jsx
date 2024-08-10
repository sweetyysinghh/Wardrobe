import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

function OutfitHistory() {
    const [history, setHistory] = useState([]);

    const addOutfit = () => {
        const date = prompt('Enter the date (YYYY-MM-DD):');
        const description = prompt('Describe the outfit:');
        setHistory([...history, { date, description }]);
    };

    return (
        <Box>
            <Typography 
                variant="h4" 
                sx={{ fontWeight: 'bold', marginBottom: '20px' }}
            >
                Outfit History
            </Typography>
            <Button 
                onClick={addOutfit}
                variant="contained"
                sx={{
                    fontSize: '18px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF', // Primary blue color
                    color: '#fff',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: '#0056b3', // Darker shade for hover effect
                    },
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    textTransform: 'none', // Keeps text case as is
                }}
            >
                Add Outfit
            </Button>
            <ul style={{ marginTop: '20px' }}>
                {history.map((entry, index) => (
                    <li key={index}>
                        <Typography variant="body1">
                            {entry.date}: {entry.description}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default OutfitHistory;
