import { AppBar, Box, Toolbar, Typography } from "@material-ui/core"
import {createElement} from 'react';
import  '../FilterForm'

const PageContentHeader = ({leftIcon, title, headerBgColor, rightContent, ...props}) => {
  return (
    <Box>
      <AppBar
        position="relative"
        color={headerBgColor || 'secondary'}
        elevation={0}
        square={false}
        style={{
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottom: '1px solid #e1e1e1',
          padding: '0 20px'
        }}
      >
        <Toolbar disableGutters> 
          {leftIcon && createElement(leftIcon, {
            style:{width: 25, height:'100%', marginRight:10}
          })}
          <Typography variant="h5"> {title} </Typography>
          <div style={{marginLeft: 'auto'}}>
            {rightContent && createElement(rightContent, {})}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default PageContentHeader;