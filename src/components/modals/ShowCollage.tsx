import React, {
  useEffect,
  useRef,
  useState,
  memo,
  ReactElement,
  useLayoutEffect,
} from 'react';

import { useSelector } from 'react-redux';

import { Box, Modal } from '@mui/material';
import { IStore } from '../../interfaces';
import { Loader } from '../Loader';

interface IShowCollageProps {
  isOpen: boolean,
  handelClose: () => void,
}

function ShowCollage({ isOpen, handelClose }: IShowCollageProps): ReactElement {
  const [row, setRow] = useState(1);
  const { images, isLoading, error } = useSelector((state: IStore) => state);
  const ref = useRef(null);
  const sqr = Math.round(Math.sqrt(images.length));
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);

  useEffect(() => {
    setRow(Math.round(images.length / Math.round(Math.sqrt(images.length))));
  }, [images]);

  useLayoutEffect(() => {
    setHeight((ref.current as any)?.offsetHeight / sqr ?? 1);
    setWidth((ref.current as any)?.offsetWidth / Math.round(images.length / sqr) ?? 1);
  });

  if (error) {
    return (
      <Modal open={isOpen}>
        <Box
          ref={ref}
          sx={{
            position: 'absolute',
            width: window.innerWidth * 0.7,
            height: window.innerHeight * 0.7,
            background: 'white',
            top: window.innerWidth * 0.15,
            left: window.innerWidth * 0.15,
          }}
        >
          Error
        </Box>
      </Modal>
    );
  }  

  return (
    <Modal
      open={isOpen}
      onClose={handelClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        { isLoading && <Loader /> }
        { !isLoading && (
        <Box
          ref={ref}
          sx={{
            position: 'absolute',
            width: window.innerWidth * 0.7,
            height: window.innerHeight * 0.7,
            background: 'white',
            top: window.innerWidth * 0.15,
            left: window.innerWidth * 0.15,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${row}, 1fr)` }}>
            {
            images.map((item: string, index: number) => (
              <img
                src={item.toString()}
                height={height}
                width={width}
                alt="dog"
                key={index}
              />
            ))
          }
          </div>
        </Box>
        )}
      </>
    </Modal>
  );
}

export default memo(ShowCollage);
