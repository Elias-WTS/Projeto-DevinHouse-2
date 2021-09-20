import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { PageContentHeader } from '../../components';


const ContentWrapper = ({header, children, ...props}) => {
  return (
    <>
      <main>
        <Box maxWidth='800px' mx='auto'>
          <Paper>
            <PageContentHeader
              headerBgColor={header && header.bgColor}
              leftIcon={header && header.leftIcon}
              title={header && header.title}
              rightContent={header && header.rightContent}
            />
            <Box mt={2} paddingBottom={5}>
              { children }
            </Box>
          </Paper>
        </Box>
      </main>
    </>
  );
}

export default ContentWrapper;