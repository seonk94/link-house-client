import { Input, Modal, Rate, Row, Tag } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

interface Props {
  initTags: string[];
  show: boolean;
  handleClose: (obj?: { tags: string[]; deleteTags: string[]; registTags: string[] }) => void;
}
const TagModal = ({ initTags, show, handleClose }: Props) => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<string[]>([...initTags]);

  const registTags = useMemo(() => tags.filter((tag) => initTags.every((t) => t !== tag)), [tags, initTags]);
  const deleteTags = useMemo(() => initTags.filter((tag) => tags.every((t) => t !== tag)), [tags, initTags]);

  const handleConfirm = useCallback(() => {
    handleClose({ tags, deleteTags, registTags });
  }, [tags]);

  const handlePressEnter = useCallback(() => {
    if (tags.some((tag) => tag === input)) return;
    setTags([...tags, input]);
    setInput('');
  }, [tags, setTags, input, setInput]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    [input, setInput],
  );

  const handleCloseTag = (tag: string) => {
    setTags([...tags.filter((t) => t !== tag)]);
  };

  return (
    <>
      <Modal title="태그 설정" visible={show} onOk={handleConfirm} onCancel={() => handleClose()}>
        <Row>
          {tags.map((tag) => (
            <Tag key={tag} closable onClose={() => handleCloseTag(tag)}>
              {tag}
            </Tag>
          ))}
        </Row>
        <Row justify="center">
          <Input value={input} onInput={handleInput} onPressEnter={handlePressEnter} />
        </Row>
      </Modal>
    </>
  );
};
export default TagModal;
