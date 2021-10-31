var Delta = Quill.import('delta');

var quill = new Quill('#editor', {
    modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6,  false] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline','strike'],
          ['blockquote', 'code-block'],
          ['image', 'link'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['clean']
        ]
      },
    theme: 'snow',
    placeholder: 'Write down your game here...'
  });

var change = new Delta();
quill.on('text-change', function(delta) {
    change = change.compose(delta);
});

// Save periodically
setInterval(function() {
    if (change.length() > 0) {
        console.log('Saving changes', change);
    /* 
    Send partial changes
    $.post('/your-endpoint', { 
    partial: JSON.stringify(change) 
    });
    
    Send entire document
    $.post('/your-endpoint', { 
    doc: JSON.stringify(quill.getContents())
    });
    */
    change = new Delta();
    }   
}, 5*1000);

// Check for unsaved data
window.onbeforeunload = function() {
    if (change.length() > 0) {
        return 'There are unsaved changes. Are you sure you want to leave?';
    }
}


//quill.on('text-change', function(delta, source) {
//	updateHtmlOutput()
//})
//
//// When the convert button is clicked, update output
//$('#btn-convert').on('click', () => { updateHtmlOutput() })
//
//// Return the HTML content of the editor
//function getQuillHtml() { return quill.root.innerHTML; }
//
//// Highlight code output
//function updateHighlight() { hljs.highlightBlock( document.querySelector('#output-html') ) }
//
//
//function updateHtmlOutput()
//{
//	let html = getQuillHtml();
//    console.log ( html );
//    document.getElementById('output-html').innerText = html;
//    updateHighlight();
//}
//updateHtmlOutput()