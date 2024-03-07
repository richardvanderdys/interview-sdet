import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Case } from './interfaces';
import Link from 'next/link';

interface CaseCardProps {
  caseData: Case;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
  return (
    <Link
      href={`/case/${caseData.id}`}
      passHref
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Card
        sx={{
          cursor: 'pointer',
          margin: 1,
          backgroundColor: '#1976d2',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            alignContent: 'center',
            padding: '16px !important',
          }}
        >
          <Typography
            sx={{
              margin: 0,
              padding: 0,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              verticalAlign: 'bottom',
              color: 'white',
            }}
          >
            {caseData.patientName}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseCard;
