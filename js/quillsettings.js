var quill = new Quill('#editor', {
    modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6,  false] }],
          ['bold', 'italic', 'underline','strike'],
          ['image', 'code-block'],
          ['link'],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['clean']
        ]
      },
    theme: 'snow',
    placeholder: 'Write down your game here...'
  });