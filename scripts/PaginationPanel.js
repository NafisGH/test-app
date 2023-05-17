const listCards = document.querySelector(".list-card");

export default class PaginationPanel {
  constructor(cards) {
    this.panelPaginationListCards = document.querySelector(
      ".panel-pagination-list-cards"
    );
    this.cards = cards;
    this.btnPrev = this.panelPaginationListCards.querySelector(".btn-prev");
    this.btnNext = this.panelPaginationListCards.querySelector(".btn-next");
    this.elemUl = this.panelPaginationListCards.querySelector(".ul");
    this.numberCards = this.cards.length;
    this.maxPages = Math.ceil(this.numberCards / 10);
    this.visibleCards = [];
    this.currentPage = 1;
    this.init(this.cards);
  }

  handleShowPages = () => {
    // Показывает страницу если их меньше 5
    if (this.maxPages < 5) {
      return Array.from({ length: this.maxPages }).map((_, index) => index + 1);
    }
    const lastPages = this.maxPages - this.currentPage;
    // Не дает перейти в право на несуществующие страницы
    if (lastPages < 3) {
      return Array.from({ length: 5 }).map(
        (_, index) => this.maxPages - 4 + index
      );
    }
    // Не дает отрицательные страницы
    if (this.currentPage < 3) {
      return Array.from({ length: 5 }).map((_, index) => index + 1);
    }
    // переключение активная страница по центру
    return Array.from({ length: 5 }).map(
      (_, index) => this.currentPage + index - 2
    );
  }; // всегда дает на выходе массив страниц [1,2,3 ...]

  handleShowCards = () => {
    listCards.innerHTML = "";
    const startIndex = (this.currentPage - 1) * 10;
    const finishIndex = (this.currentPage - 1) * 10 + 10;
    this.visibleCards = this.cards.slice(startIndex, finishIndex);
    this.visibleCards.forEach((card) => {
      listCards.append(card.elemNewCard.elCard);
    });
  };

  handleClickNextButton = () => {
    if (this.maxPages - this.currentPage < 6) {
      this.currentPage = this.maxPages;
    } else {
      this.currentPage += 5;
    }
    this.elemUl.innerHTML = "";
    this.pages = this.handleShowPages();
    this.showMarkkup();
    this.handleShowCards();
  };

  handleClickPrevButton = () => {
    if (this.currentPage < 6) {
      this.currentPage = 1;
    } else {
      this.currentPage -= 5;
    }
    this.elemUl.innerHTML = "";
    this.pages = this.handleShowPages();
    this.showMarkkup();
    this.handleShowCards();
  };

  init = () => {
    this.numberCards = this.cards.length;
    this.maxPages = Math.ceil(this.numberCards / 10);
    this.btnPrev.addEventListener("click", this.handleClickPrevButton);
    this.btnNext.addEventListener("click", this.handleClickNextButton);

    if (this.maxPages === 0) {
      this.panelPaginationListCards.style.display = "none";
      return listCards.innerHTML = "";
    }

    if (this.currentPage > this.maxPages) {
      this.currentPage = this.maxPages;
    }

    this.panelPaginationListCards.style.display = "flex";
    // this.currentPage = 1;
    this.pages = this.handleShowPages();
    this.showMarkkup();
    this.handleShowCards();
  };

  showMarkkup = () => {
    this.pages.forEach((page) => {
      const elNewItem = this.createElPage(page);
      this.elemUl.append(elNewItem);
    });
  };

  createElPage = (value) => {
    const itemLiPage = document.createElement("li");
    if (this.currentPage === value) {
      itemLiPage.classList.add("active");
    }
    itemLiPage.innerHTML = value;
    itemLiPage.addEventListener("click", (event) => {
      event.preventDefault();
      this.currentPage = value;
      this.elemUl.innerHTML = "";
      this.pages = this.handleShowPages();
      this.showMarkkup();
      this.handleShowCards();
    });
    return itemLiPage;
  };

  updatePages = (cards) => {
    this.elemUl.innerHTML = "";
    this.cards = cards;
    this.init();
  };
}
