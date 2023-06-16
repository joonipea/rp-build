import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const RichTextEditor = ({handleText}) => {

    const html = '<p>type something</p>';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const oldEditorState = EditorState.createWithContent(contentState);
    const [editorState, setEditorState] = useState(oldEditorState);



    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={editorState => {
            setEditorState(editorState);
            handleText(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        }}
        />
        <textarea
          id="editor"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
}

export default RichTextEditor;