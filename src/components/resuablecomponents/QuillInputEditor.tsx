import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

interface QuillInputEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];
const modules = {
  toolbar:toolbarOptions
};
const QuillInputEditor: React.FC<QuillInputEditorProps> = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState<string>(value);

  const handleChange = (html: string) => {
    setEditorHtml(html);
    onChange(html); // Pass the updated HTML back to the parent component
  };

  return (
    <div>
     
      <ReactQuill
        theme="snow" // Specify theme
        value={editorHtml}
        modules={modules}
        onChange={handleChange}
      />
    </div>
  );
};

export default QuillInputEditor;
