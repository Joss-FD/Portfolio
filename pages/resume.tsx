import Header from 'components/header';
import { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {
    
    render() {
        function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent") as NodeListOf<HTMLDivElement>;
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
            style.display = "inline-block";
            style.fontFamily = "Arial, sans-serif";
            style.transform = "";

            setTimeout(() => {
                let t = layer.querySelectorAll('span')
                
                t.forEach(span => {
                    console.log('ss');
                    
                    span.style.transform = "";
                    span.style.fontFamily = "Arial, sans-serif";
                    span.style.whiteSpace = "";
                })
                
            }, 150);
        });

      }
        return (
            <div>
                <Header title="Resume" ></Header>
                <Document file="./static/files/resume.pdf"
                    onLoadError={console.error}>
              <Page height={1400} pageNumber={1} onLoadSuccess={removeTextLayerOffset}/>
              </Document>
            </div>
        )
    };
}

export default Resume;