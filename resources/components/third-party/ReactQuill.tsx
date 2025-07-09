import { forwardRef, useState } from 'react';

// third party
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface Props {
  defaultText?: string;
  onChange?: (value: string) => void;
}

// ==============================|| EDITOR - QUILL ||============================== //

const ReactQuillDemo = forwardRef<ReactQuill, Props>(({ defaultText, onChange }: Props, ref) => {
  const [text, setText] = useState(defaultText || '');

  const handleChange = (value: string) => {
    setText(value);
    onChange && onChange(value);
  };
  return (
    <ReactQuill
      modules={{
        toolbar: {
          container: [
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video', 'formula'],
            ['image', 'code']
          ]
        }
      }}
      value={text}
      ref={ref}
      onChange={handleChange}
    />
  );
});

export default ReactQuillDemo;
