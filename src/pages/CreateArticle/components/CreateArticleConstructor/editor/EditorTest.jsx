/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles.scss';

export const EditorTest = ({ setMainText, text }) => (
  <div className="editor-container">
    <div className="editor">
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(e, editor) => {
          const data = editor.getData();
          setMainText(data);
        }}
      />
    </div>
  </div>
);
