import React from 'react';
import { Box, Typography } from '@mui/material';

function StylingTips() {
    const tips = [
        'Pair a statement piece with neutral items.',
        'Mix textures for an interesting look.',
        'Accessorize to elevate a simple outfit.',
        'Layer for added depth in your outfit.',
        'Consider proportions when styling.',
        'Experiment with colors to find what suits you.',
        'Invest in quality basics.',
        'Tailor your clothes for a perfect fit.',
        'Use belts to define your waist.',
        'Incorporate patterns to add visual interest.'
    ];

    // Randomly shuffle tips array and pick the first five
    const randomTips = tips.sort(() => 0.5 - Math.random()).slice(0, 5);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{
                    fontWeight: 'bold', 
                    marginBottom: '20px',
                    textAlign: 'center',
                    marginTop: '-20px' // Adjust this to align with other headings
                }}
            >
                Styling Tips for Today
            </Typography>
            {randomTips.map((tip, index) => (
                <Typography key={index} variant="h6" sx={{ marginBottom: '10px' }}>
                    {tip}
                </Typography>
            ))}
        </Box>
    );
}

export default StylingTips;
