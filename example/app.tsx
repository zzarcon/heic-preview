import * as React from 'react';
import {useState} from 'react'
import {GHCorner} from 'react-gh-corner';
import {StylishInput} from 'react-stylish-input';
import AttachmentIcon from '@atlaskit/icon/glyph/attachment';
import Button from '@atlaskit/button';
import {AppWrapper, GlobalStyles} from './styled';
import {heicPreviewer} from '../src';

const repoUrl = 'https://github.com/zzarcon/heic-preview';


const App = () => {
  const [preview, setPreview] = useState<Blob | undefined>(undefined);
  const onChange = async (event: any) => {
    const firstFile = event.target.files[0];
    const newPreview = await heicPreviewer(firstFile);

    setPreview(newPreview);
  }
  const img = preview ? <img src={URL.createObjectURL(preview)} /> : null;

  return (
    <AppWrapper>
      <GlobalStyles />
      <GHCorner openInNewTab href={repoUrl} />
      <StylishInput onChange={onChange}>
        <Button appearance="primary" iconBefore={<AttachmentIcon label="clip" />} >
          Pick file
        </Button>
      </StylishInput>
      {img}
    </AppWrapper>
  )
}

export default App