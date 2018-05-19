// @flow
import React from 'react';
import Heading from '../../components/heading/Heading';
import Box from '../../components/box/Box';
import EducationItemEditable from './EducationItemEditable';
import EducationItemPreview from './EducationItemPreview';
import Editable from '../../components/editable/Editable';
import _find from 'lodash/find';

export type EducationItemProps = {
  id: number,
  university?: string,
  year?: string,
  description?: string,
};

export type EducationProps = {
  items: EducationItemProps[],
};

const EducationItem = (props: EducationItemProps) => {
  return (
    <Editable {...props}>
      {({ isEdited, ...restProps }) =>
        //prettier-ignore
        isEdited ?
          <EducationItemEditable {...restProps} /> :
          <EducationItemPreview {...restProps} />
      }
    </Editable>
  );
};

const Education = ({ data, section }: EducationProps) => {
  const items = _find(data, { name: section }).items;
  return (
    <Box>
      <Heading as="h2">Education</Heading>
      {//prettier-ignore
      items.length > 0 ?
        items.map(item => <EducationItem key={item.id} section={section} {...item}  />) :
        <div>EMPTY</div>}
    </Box>
  );
};

export default Education;
