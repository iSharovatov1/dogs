import React, {
  useEffect,
  useRef,
  useState,
  memo,
  ReactElement,
} from 'react';

import { useSelector } from 'react-redux';

import { Modal, Box } from '@mui/material';
import { IStore } from '../../interfaces';

interface IShowCollageProps {
  isOpen: false,
  handelClose: () => void,
}

function ShowCollage({ isOpen, handelClose }: IShowCollageProps): ReactElement {
  const [row, setRow] = useState(1);
  const { images, isLoading, error } = useSelector((state: IStore) => state);
  const ref = useRef(null);
  const sqr = Math.round(Math.sqrt(images.length));
  const height = (ref.current as any)?.offsetHeight / sqr ?? 1;
  const width = (ref.current as any)?.offsetWidth / Math.round(images.length / sqr) ?? 1;

  useEffect(() => {
    setRow(Math.round(images.length / Math.round(Math.sqrt(images.length))));
  }, [images]);

  if (error) {
    return (
      <Modal>
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
        { isLoading && <div>Loading</div> }
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
            images.map((item: String) => (
              <img
                src={item}
                height={height}
                width={width}
                alt="dog"
                key={item}
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
