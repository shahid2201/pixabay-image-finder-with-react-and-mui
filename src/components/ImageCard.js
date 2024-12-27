import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, cols) {
  return {
    src: `${image}?w=${size * cols}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function ImageCard({ imageData }) {
  return (
    <ImageList
      sx={{
        width: 'calc(100vw - 32px)', // Full width minus padding
        height: 'calc(100vh - 32px)', // Full height minus padding
        padding: '16px', // Padding on all sides
        boxSizing: 'border-box', // Include padding in the element's total width and height
      }}
      variant="quilted"
      cols={4}
      rowHeight="auto"
    >
      {imageData.map((image, index) => (
        <ImageListItem key={index} cols={image.cols || 1} rows={image.rows || 1}>
          <img
            {...srcset(image.webformatURL, 121, image.cols || 1)}
            alt={image.tags}
            loading="lazy"
            style={{ width: '100%', height: 'auto' }} // Ensure images maintain aspect ratio
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
