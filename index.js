var element = document.getElementById('element-to-print');

var opt = {
  // margin: [50, 50, 50, 50],
  filename: 'myfile.pdf',
  html2canvas: { scale: 4 },
  pagebreak: {
    mode: 'avoid-all',
  },
  jsPDF: {
    unit: 'px',
    format: 'a4',
    orientation: 'p',
    hotfixes: ['px_scaling'],
  },
};
html2pdf().set(opt).from(element).save();
