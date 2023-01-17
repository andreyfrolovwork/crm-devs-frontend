import {defineStore} from 'pinia'
/*
import {api} from 'boot/axios.js'
*/

const apartsStore = defineStore('index-page', {
  state: () => ({
    area: {
      min: 0,
      max: 1000,
    },
    areaRange: {
      min: 0,
      max: 100,
    },
    price: {
      min: 0,
      max: 25000000,
    },
    priceRange: {
      min: 0,
      max: 100,
    },
    floor: {
      min: 0,
      max: 10,
    },
    floorRange: {
      min: 0,
      max: 10,
    },
    aparts: [{
      "_id": "63c51d6f17baf635b57b07de",
      "section": 1,
      "rooms": 0,
      "area": 26.575,
      "price": 1911423,
      "floor": 1,
      "__v": 0
    },
      {
        "_id": "63c51d6f17baf635b57b07de",
        "section": 1,
        "rooms": 0,
        "area": 26.575,
        "price": 1911423,
        "floor": 1,
        "__v": 0
      }],
    page: 1,
    rowsPerPage: 10,
    columns: [
      {
        name: 'price',
        required: false,
        label: 'price',
        align: 'left',
        field: (row) => row.price,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: 'floor',
        required: false,
        label: 'floor',
        align: 'left',
        field: (row) => row.floor,
        format: (val) => `${val}`,
        sortable: true,
      },
    ],
  }),
  actions: {
    setArea(payload) {
      console.log('setArea', payload)
      this.area = payload
     /* this.load()*/
    },
    setPrice(payload) {
      console.log('setPrice', payload)
      this.price = payload
      /*this.load()*/
    },
    setFloor(payload) {
      console.log('setfloor', payload)
      this.floor = payload
      /*this.load()*/
    },
/*    async load() {
      try {
        const data = {
          rowsPerPage: this.rowsPerPage,
          page: this.page,
          area: this.area,
          price: this.price,
          floor: this.floor,
        }
        console.log('load with params', data)
        const aparts = await api.post('/aparts', data)
        console.log('result', aparts.data)
        this.aparts = aparts.data.rows
        this.areaRange = aparts.data.filters.areaRange
        this.priceRange = aparts.data.filters.priceRange
        this.floorRange = aparts.data.filters.floorRange
        return aparts.data.rows
      } catch (e) {
        debugger
      }
    },*/
  },
})

export default apartsStore
