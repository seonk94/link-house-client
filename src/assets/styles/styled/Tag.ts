import { Tag } from 'antd';
import styled from 'styled-components';

type TagType = 'category' | 'info';
interface ITag {
  type: TagType;
}

export const MyTag = styled(Tag)<ITag>`
  border-radius: 6px;
  background: ${(props) => (props.type === 'category' ? 'rgb(16, 142, 233)' : '#fafafa')};
  color: ${(props) => (props.type === 'category' ? 'white' : 'black')};
`;
