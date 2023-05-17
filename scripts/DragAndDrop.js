export default class DragAndDrop {
  constructor() {
    this.dropArea = document.querySelector(".drop-area");
    this.inputFile =  this.dropArea.querySelector("#file");
    this.btnUploadFile =  document.querySelector(".label-upload-file");
    this.iconDownload =  this.dropArea.querySelector(".drop-area-img");
    this.file = null;
    this.srcImg = "";

    this.init();
  }

  init() {
    this.dropArea.addEventListener("dragover", this.handleDragOver);
    this.dropArea.addEventListener("dragenter", this.handleDragEnter);
    this.dropArea.addEventListener("dragleave", this.handleDragLeave);
    this.dropArea.addEventListener("drop", this.handleDrop);

    this.btnUploadFile.addEventListener("click", this.handleClickBtnUploadFile);
    this.inputFile.addEventListener("change", this.handleChangeInputFile);
  }

  // Функции для работы с Drag & Drop

  // 1. Событие dragover - срабатывает когда мы находимся НАД элементом сброса
  handleDragOver = (e) => {
    this.preventDefaults(e);
    this.highlight();
  };
  // 2. Событие dragenter - срабатывает когда мы пересекли поле сброса и далее
  // будем находиться над ним
  handleDragEnter = (e) => {
    this.preventDefaults(e);
    this.highlight();
  };
  // 3. Событие dragleave - срабатывает когда мы пересекли поле сброса и далее
  // будем находится уже не над ним (Проще говоря: покинули поле сброса)
  handleDragLeave = (e) => {
    this.preventDefaults(e);
    this.unhighlight();
  };
  // 4. Событие drop - срабатыват когда мы сбрасываем файл в полсе сброса
  handleDrop = (e) => {
    this.preventDefaults(e);
    let dt = e.dataTransfer;
    let files = dt.files[0];
    this.unhighlight();
    this.changeBtnOnReset();
    this.previewFile(files);
  };

  // 1. Запускается когда поле инпута менятеся. Т.е, если в поле сброса ничего
  // не было изначально (null) и мы сбросили картинку, тогда инпут уже содержит
  // (объект с данными сброшенного файлы), то в этот момент запускается эта
  // функция и наоборот
  handleChangeInputFile = (e) => {
    this.file = e.target.files[0];
    if (this.file) {
      this.changeBtnOnReset();
      this.previewFile(this.file);
    }
  };

  // 2. Запускается когда мы нажимаем на кнопку Upload (загрузить файл)
  handleClickBtnUploadFile = (e) => {
    this.preventDefaults(e);
    this.inputFile.click();
  };

  // 3. Запускается когда мы нажимаем на кнопку Clear (отчистить поле от файла)
  handleClickBtnClearInput = (e) => {
    this.preventDefaults(e);
    // const elementImage = document.querySelector(".image");
    // if (elementImage) {
    //   document
    //     .querySelector(".drop-area")
    //     .replaceChild(this.iconDownload, elementImage);
    //   this.file = null;
    //   this.changeBtnOnUpload();
    // }
    this.preventDefaults(e);
    if (this.imageDownload) {
      this.clear()
    }
  };

  // 1. Превращает кнопку загрузки (Upload) в кнопу сброса (Reset)
  changeBtnOnReset() {
    this.btnUploadFile.removeEventListener("click", this.handleClickBtnUploadFile);
    this.btnUploadFile.textContent = "Reset";
    this.btnUploadFile.addEventListener("click", this.handleClickBtnClearInput);
  }

  // 2. Превращает кнопку сброса (Reset) в кнопу загрузки (Upload)
  changeBtnOnUpload() {
    this.btnUploadFile.addEventListener("click", this.handleClickBtnClearInput);
    this.btnUploadFile.textContent = "Upload";
    this.btnUploadFile.addEventListener("click", this.handleClickBtnUploadFile);
  }

  // 3. Добавляет полю сброса класс highlight
  highlight = () => this.dropArea.classList.add("highlight");

  // 4. Удаляет у поля сброса класс highlight
  unhighlight = () => this.dropArea.classList.remove("highlight");

  // 5. Добавляем предпоказ загружаемого файлы
  async previewFile(file) {
    // const srcImg = await new Promise((resolve) => {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = function () {
    //     let img = document.createElement("img");
    //     img.className = "image";
    //     img.src = reader.result;
    //     document
    //       .querySelector(".drop-area")
    //       .replaceChild(img, document.querySelector(".drop-area-img"));
    //     resolve(reader.result);
    //   };
    // });
    // this.srcImg = srcImg;
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.showImageInDOM(reader.result)
    };
  }

  preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  clear = () => {
    if(this.dropArea.querySelector(".image") !== null) {
      this.replaceChildInDropArea(this.iconDownload, this.imageDownload)
    }
    this.file = null;
    this.srcImg = "";
    this.changeBtnOnUpload();
  }

  showImageInDOM = (src) => {
    let elImg = document.createElement("img");
    elImg.className = "image";
    elImg.src = src;
    this.srcImg = src;
    this.imageDownload = elImg;
    this.replaceChildInDropArea(this.imageDownload, this.iconDownload)
  }

  replaceChildInDropArea = (newChild, oldСhild) => this.dropArea.replaceChild(newChild, oldСhild);
}
