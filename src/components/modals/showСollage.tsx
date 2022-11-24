import { Modal, Box, Typography, Grid } from '@mui/material'
import { iteratorSymbol } from 'immer/dist/internal';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import '../../index.css'

const ShowСollage = ({ isOpen, handelClose }: any) => {
  const ref = useRef<any>(null);

  const {
    images,
  } = useSelector((state: any) => state);
  const [row, setRow] = useState(1)

  useEffect(() => {
    setRow(Math.round(images.length / Math.round(Math.sqrt(images.length))))
  }, [images])

  const sqr = Math.round(Math.sqrt(images.length))
  // console.log(sqr);
  
  // const row = (images.length / sqr) && 1
  console.log((ref.current as any)?.offsetHeight ?? 1);
  const height = (ref.current as any)?.offsetHeight / sqr ?? 1
  const width = (ref.current as any)?.offsetWidth / Math.round(images.length/sqr) ?? 1
  
  return (
  <Modal
    open={isOpen}
    onClose={handelClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box 
      ref={ref}
      sx={{position: 'absolute', width: 400, height: 400, background: 'white', top: 200, left: 200}}
    >

      <div style={{display: 'grid', gridTemplateColumns: `repeat(${row}, 1fr)`}}>
        {images.map((col: any) => 
        // <div>
          <img
            src={col}
            className='image'
            height={height}
            width={width}
          />
        // </div>
        )}
      </div>


      {/* <Grid container spacing={1}>
        {images.map((row: any) =>
          <Grid container item xs={12} spacing={3}>
            <img src={row} className='image' height={100} widht={100}/>
          </Grid>
        )}

  </Grid> */}


{/* </Grid> */}
      {/* <div>
        {images.map((col: any) => 
        <div>
          {col.map((row: any) =>
            <img src={row} className='image'/>
            )
          }
        </div>)}
      </div> */}

      {/* <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography> */}
    </Box>
  </Modal>  )
}

export default ShowСollage;