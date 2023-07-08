import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник", state: false },
      { id: 2, name: "Смартфон", state: false },
      { id: 3, name: "Ноутбук", state: false },
      { id: 4, name: "Телевізор", state: false },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._device = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 20000,
        rating: 5,
        img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
        type: "Смартфон",
      },
      {
        id: 2,
        name: "Iphone 11 pro",
        price: 20000,
        rating: 5,
        img: "https://hotline.ua/img/tx/243/2436967445.jpg",
        type: "Смартфон",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 20000,
        rating: 5,
        img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
        type: "Смартфон",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 20000,
        rating: 5,
        img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
        type: "Смартфон",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 20000,
        rating: 5,
        img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
        type: "Смартфон",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._device = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._device;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
