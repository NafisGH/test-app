export default class DragAndDrop {
    constructor() {
        this.inputFile = document.querySelector('#file');
        this.dropArea = document.querySelector('.drop-area');

        this.init()
    }
    init() {
        this.dropArea.addEventListener('dragover', (e) => {
            this.preventDeaults(e);
            this.highlight();
        })

        this.dropArea.addEventListener('dragenter', (e) => {
            this.preventDeaults(e);
            this.highlight();
        })

        this.dropArea.addEventListener('drop', (e) => {
            this.preventDeaults(e);
            this.unhighlight();
            this.handleDrop(e);
        })

        this.dropArea.addEventListener('dragenter', (e) => {
            this.preventDeaults(e)
            this.unhighlight();
        })
    }

    highlight() {
        console.log(this.dropArea)
        this.dropArea.classList.add('highlight');
    }

    unhighlight() {
        console.log(this.dropArea)
        this.dropArea.classList.remove('highlight');
    }

    handleDrop(e) {
        let dt = e.dataTransfer
        let files = dt.files
        this.previewFile(files)
    }

    uploadFile(file) {
        let url = 'YOUR URL HERE';
        let formData = new FormData();
        formData.append('file', file);
    }

    previewFile(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            let img = document.createElement('img')
            img.src = reader.result;
            document.querySelector('.drop-area').replaceChild(img, documentq.querySelector('.drop-area-img'))
        }
    }

    preventDeaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

}

