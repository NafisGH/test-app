import "../styles/root.css";
import { handleGetCorrectDate } from "../utils/helper.js";
import { cards } from "../utils/constants";

import PopupCreateCard from "../scripts/PopupCreateCard";
import Card from "../scripts/Card";
import PaginationPanel from "../scripts/PaginationPanel";

const buttonCreateNewCard = document.querySelector(".btn-create-new-card");
const listCards = document.querySelector(".list-card");

export const cardsFromServer = [
  {
    author: "Bob S.",
    dislikes: 0,
    id: "1",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    author: "Jack S.",
    dislikes: 0,
    id: "2",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "3",
    likes: 0,
    title: "Car003",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "4",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "5",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "6",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    author: "Jack S.",
    dislikes: 0,
    id: "7",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "8",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Ali M.",
    dislikes: 0,
    id: "9",
    likes: 0,
    title: "Car011",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Ali M.",
    dislikes: 0,
    id: "10",
    likes: 0,
    title: "Car009",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "11",
    likes: 0,
    title: "Car003",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "12",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    author: "Jack S.",
    dislikes: 0,
    id: "13",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Ali M.",
    dislikes: 0,
    id: "14",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "15",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Ali M.",
    dislikes: 0,
    id: "16",
    likes: 0,
    title: "Car011",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "17",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "18",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    author: "Jack S.",
    dislikes: 0,
    id: "19",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "20",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "21",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "22",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "23",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "24",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Ali M.",
    dislikes: 0,
    id: "25",
    likes: 0,
    title: "Car011",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "26",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    author: "Jack S.",
    dislikes: 0,
    id: "27",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "28",
    likes: 0,
    title: "Car003",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "29",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "30",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "31",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "32",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "33",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "34",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "35",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "36",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "37",
    likes: 0,
    title: "Car003",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Box G.",
    dislikes: 0,
    id: "38",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "39",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "40",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "41",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    author: "Jack S.",
    dislikes: 0,
    id: "42",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "43",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "44",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "45",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "46",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "47",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Box G.",
    dislikes: 0,
    id: "48",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "49",
    likes: 0,
    title: "Car003",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "50",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "51",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "52",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "53",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "54",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "55",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Box G.",
    dislikes: 0,
    id: "56",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "57",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "58",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "59",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "60",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "61",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "62",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "63",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "64",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "65",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "66",
    likes: 0,
    title: "Car004",
    url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "67",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Jack S.",
    dislikes: 0,
    id: "68",
    likes: 0,
    title: "Car002",
    url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "69",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Fox G.",
    dislikes: 0,
    id: "70",
    likes: 0,
    title: "Car010",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    author: "Bob S.",
    dislikes: 0,
    id: "71",
    likes: 0,
    title: "Nature",
    url: "https://images.unsplash.com/photo-1679073374781-7719a5a88f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

// Эта функция Будет получать данные карточки пришедшей от серева, в данном случае от массива выше cards
const showCardFromServer = () => {
  const [date, resDate] = handleGetCorrectDate();
  let paginationPanel = new PaginationPanel(cards);
  cardsFromServer.forEach((card) => {
    const newCard = new Card({ date, resDate, ...card, updatePages: paginationPanel.updatePages, });
    cards.push(newCard);
    // listCards.append(newCard.elemNewCard.elCard);
  });
  paginationPanel.updatePages(cards);
};

showCardFromServer();

const popupCreateCard = new PopupCreateCard("modal-create-card");
buttonCreateNewCard.addEventListener("click", () => {
  popupCreateCard.openPopup();
});

let valueInputSearch = "";

const inputSearch = document.querySelector("#form-search-input");
const btnSearch = document.querySelector(".btn-search");

inputSearch.addEventListener("input", (event) => {
  valueInputSearch = event.target.value;
});

const searchCards = (elFilteredElCard) => {
  const listCards = document.querySelector(".list-card");
  if (!listCards.querySelector(`li.card[id="${elFilteredElCard.id}"]`)) {
    listCards.append(elFilteredElCard.elemNewCard.elCard); // Добавляем в разметку Li, карточку объект
  }
};

const searchOrderCards = (elFilteredElCard, index) => {
  const currentElListCardsInDom = document.querySelectorAll(".card");

  if (index >= currentElListCardsInDom.length) {
    return listCards.append(elFilteredElCard.elemNewCard.elCard);
  }

  const currentElCardOrder = parseInt(
    currentElListCardsInDom[index].dataset.order
  ); // текущий порядок в браузере в разметке

  if (elFilteredElCard.order < currentElCardOrder) {
    return listCards.insertBefore(
      elFilteredElCard.elemNewCard.elCard,
      currentElListCardsInDom[index]
    );
  }
  if (elFilteredElCard.order > currentElCardOrder) {
    return searchOrderCards(elFilteredElCard, index + 1);
  }
};

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();

  // Регулярное выражение, которое будем использовать для поиска
  const regexp = new RegExp(valueInputSearch, "i");

  const filteredIdCards = []; // тут будут лежать id карточек, которые нужно показать
  const filteredElCards = []; // тут будут лежать карточеки, которые нужно показать

  cards.forEach((elCrad) => {
    if (regexp.test(elCrad.title)) {
      filteredIdCards.push(elCrad.id);
      filteredElCards.push(elCrad);
    }
  });

  // Находим карточки, которые в данный момент показываются на странице
  let currentElListCards = listCards.querySelectorAll(".card");

  currentElListCards.forEach((currentElCard) => {
    if (!filteredIdCards.includes(currentElCard.id)) {
      currentElCard.remove();
    }
  });

  let index = 0;

  filteredElCards.forEach((elFilteredElCard) => {
    // searchCards(elFilteredElCard)

    searchOrderCards(elFilteredElCard, index);

    index = 0;
  });
});

// mainFuncPagination(cards);
 

