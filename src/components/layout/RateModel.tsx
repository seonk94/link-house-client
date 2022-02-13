import React, { useCallback, useState } from 'react';
import {
  Modal, Rate, Row,
} from 'antd';

interface Props {
  show: boolean;
  handleClose: (grade?: number) => void;
}
const RateModal = ({ show, handleClose } : Props) => {
  const [grade, setGrade] = useState(0);

  const handleGradeChange = useCallback((value: number) => {
    setGrade(value);
  }, []);

  return (
    <>
      <Modal title="평점 남기기" visible={show} onOk={() => handleClose(grade)} onCancel={() => handleClose()}>
        <Row justify="center">

          <Rate value={grade} onChange={handleGradeChange} />
        </Row>
      </Modal>
    </>
  );
};
export default RateModal;
