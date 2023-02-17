<template>
    <div
        id="mapBlock"
        class="shadow map-detail"
        :class="{ 'map-full': mapFull }"
        style="width: 100%"
        >
        <div
            v-if="isMobile"
            :style="{ top: mapSearchPanelOpen ? '60px' : '12px' }"
            class="map-detail__full"
            @click="onMupFull"
            >
            <svg
                v-if="!mapFull"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M3.21914 8.11543C3.30894 8.03176 3.4277 7.98621 3.55042 7.98837C3.67314 7.99054 3.79022 8.04025 3.87701 8.12704C3.9638 8.21382 4.01351 8.33091 4.01567 8.45363C4.01784 8.57634 3.97229 8.69511 3.88862 8.7849L1.93388 10.739H3.31641C3.43087 10.739 3.54146 10.7805 3.62773 10.8557C3.714 10.9309 3.7701 11.0349 3.78567 11.1483L3.79009 11.2127C3.79009 11.3383 3.74018 11.4588 3.65135 11.5476C3.56252 11.6365 3.44203 11.6864 3.31641 11.6864H0.79009C0.664462 11.6864 0.543978 11.6365 0.455145 11.5476C0.366312 11.4588 0.316406 11.3383 0.316406 11.2127V8.68638C0.316406 8.56075 0.366312 8.44026 0.455145 8.35143C0.543978 8.2626 0.664462 8.21269 0.79009 8.21269C0.915719 8.21269 1.0362 8.2626 1.12504 8.35143C1.21387 8.44026 1.26377 8.56075 1.26377 8.68638V10.0695L3.21914 8.11543ZM8.68798 11.6864C8.56236 11.6864 8.44187 11.6365 8.35304 11.5476C8.26421 11.4588 8.2143 11.3383 8.2143 11.2127C8.2143 11.0871 8.26421 10.9666 8.35304 10.8777C8.44187 10.7889 8.56236 10.739 8.68798 10.739H10.0686L8.11641 8.7849C8.03618 8.7047 7.98741 8.59837 7.97895 8.48525C7.97049 8.37213 8.0029 8.25973 8.0703 8.16848L8.11641 8.11543C8.20522 8.02672 8.32562 7.9769 8.45114 7.9769C8.57667 7.9769 8.69706 8.02672 8.78588 8.11543L10.7406 10.0708V8.68638C10.7406 8.57191 10.7821 8.46132 10.8573 8.37505C10.9325 8.28879 11.0365 8.23268 11.1499 8.21711L11.2143 8.21269C11.3399 8.21269 11.4604 8.2626 11.5492 8.35143C11.6381 8.44026 11.688 8.56075 11.688 8.68638V11.2127C11.688 11.3383 11.6381 11.4588 11.5492 11.5476C11.4604 11.6365 11.3399 11.6864 11.2143 11.6864H8.68798ZM3.31641 0.31543C3.44203 0.31543 3.56252 0.365335 3.65135 0.454169C3.74018 0.543002 3.79009 0.663485 3.79009 0.789114C3.79009 0.914743 3.74018 1.03523 3.65135 1.12406C3.56252 1.21289 3.44203 1.2628 3.31641 1.2628H1.93514L3.88862 3.21753C3.96874 3.29782 4.0174 3.40419 4.02575 3.51731C4.03409 3.63043 4.00157 3.74278 3.93409 3.83396L3.88798 3.88764C3.79917 3.97635 3.67878 4.02617 3.55325 4.02617C3.42772 4.02617 3.30733 3.97635 3.21851 3.88764L1.26377 1.93038V3.31543C1.26377 3.4299 1.22232 3.54049 1.14708 3.62675C1.07184 3.71302 0.967914 3.76913 0.854511 3.78469L0.79009 3.78911C0.664462 3.78911 0.543978 3.73921 0.455145 3.65037C0.366312 3.56154 0.316406 3.44106 0.316406 3.31543V0.789114C0.316406 0.663485 0.366312 0.543002 0.455145 0.454169C0.543978 0.365335 0.664462 0.31543 0.79009 0.31543H3.31641ZM11.2143 0.31543C11.3399 0.31543 11.4604 0.365335 11.5492 0.454169C11.6381 0.543002 11.688 0.663485 11.688 0.789114V3.31543C11.688 3.44106 11.6381 3.56154 11.5492 3.65037C11.4604 3.73921 11.3399 3.78911 11.2143 3.78911C11.0887 3.78911 10.9682 3.73921 10.8794 3.65037C10.7905 3.56154 10.7406 3.44106 10.7406 3.31543V1.93164L8.78588 3.88701C8.70568 3.96723 8.59935 4.01601 8.48623 4.02447C8.37311 4.03293 8.2607 4.00051 8.16946 3.93311L8.11641 3.88701C8.0277 3.79819 7.97788 3.6778 7.97788 3.55227C7.97788 3.42674 8.0277 3.30635 8.11641 3.21753L10.0692 1.2628H8.68798C8.57352 1.26279 8.46293 1.22134 8.37666 1.1461C8.29039 1.07087 8.23429 0.966937 8.21872 0.853535L8.2143 0.789114C8.2143 0.663485 8.26421 0.543002 8.35304 0.454169C8.44187 0.365335 8.56236 0.31543 8.68798 0.31543H11.2143Z"
                    fill="#232930"
                    />
            </svg>

            <span v-else>Назад</span>
        </div>

        <div class="map-detail__actions">
            <AppButton
                :class="{ '_is-active': showInfrostructure }"
                :secondary="true"
                @click="toggleInfrostructure"
                >
                Инфаструктура
            </AppButton>
            <AppButton
                :class="{ _disabled: panoramaButton }"
                :secondary="true"
                @click="showPanoramaNew"
                >
                Панорама
            </AppButton>
        </div>
        <MapDetailListNew
            v-if="showInfrostructure"
            :key="mapListKey"
            :list="list"
            class="map-detail__info"
            @map-set="search"
            />
        <MapDetailListNewMobile @map-set="search" />
        <div
            id="panoramaBlock"
            ref="panoramaRef"
            class="map-detail panorama"
            />
    </div>
</template>

<script>
import icons from "@/assets/images/icons.js"
import { loadYmap } from "vue-yandex-maps"
import settings from "@/functions/yandex.js"
/* eslint-disable*/
export default {
    props: {
        cardPoint: {
            type: Array,
            default: [55.051205, 60.077164]
        },
        cardPointHint: {
            type: String,
            default: 'hint'
        },
        cardPointBalloon: {
            type: String,
            default: 'balloon'
        }
    },
    data() {
        return {
            isMobile: false,
            iPoints: {
                Банки: [],
                "Детские сады": [],
                Школы: [],
                Аптеки: [],
                Поликлиники: [],
                Магазины: [],
                "Кафе и рестораны": []
            },
            estateCardKey: 0,
            mapListKey: 0,
            list: [
                {
                    id: "rub",
                    width: "9",
                    height: "12",
                    checked: false,
                    icon: "islands#darkOrangeClusterIcons",
                    text: "Банки"
                },
                {
                    id: "kindegarden",
                    width: "15",
                    height: "13",
                    checked: false,
                    icon: "islands#nightClusterIcons",
                    text: "Детские сады"
                },
                {
                    id: "school",
                    width: "16",
                    height: "12",
                    checked: false,
                    icon: "islands#greenClusterIcons",
                    text: "Школы"
                },
                {
                    id: "med",
                    width: "10",
                    height: "10",
                    checked: false,
                    icon: "islands#pinkClusterIcons",
                    text: "Аптеки"
                },
                {
                    id: "pol",
                    width: "16",
                    height: "16",
                    checked: false,
                    icon: "islands#blackClusterIcons",
                    text: "Поликлиники"
                },
                {
                    id: "shop",
                    width: "14",
                    height: "14",
                    checked: false,
                    icon: "islands#oliveClusterIcons",
                    text: "Магазины"
                },
                {
                    id: "cafe",
                    width: "12",
                    height: "10",
                    checked: false,
                    icon: "islands#brownClusterIcons",
                    text: "Кафе и рестораны"
                }
            ],
            map: null,
            mapFull: false,
            mapSearchPanelOpen: false,
            panorama: null,
            panoramaIsShow: false,
            panoramaButton: true,
            mapIsShow: false,
            showInfrostructure: false,
            showObjects: false,
            points: [],
            curCard: null,
            cards: [],
            mapSettings: {
                zoom: 12,
                searchArea: 0.002419647273327996,
                apikey: "72564acb-bc6a-4780-84f0-443b2c4a6963"
            }
        }
    },
    async mounted() {
        await loadYmap({ ...settings, debug: true })
        ymaps.ready(this.init)

        const mediaQuery = window.matchMedia("(max-width: 639px)")

        if (mediaQuery.matches) {
            this.isMobile = true
        }
    },
    beforeUnmount() {
        this.$root.map = null
        this.$root.search = null
        this.$root.panr = null
    },
    methods: {
        async init() {
            let zoom = new ymaps.control.ZoomControl()
            let searchControl = new ymaps.control.SearchControl({
                options: {
                    size: "small",
                    position: "none",
                    provider: "yandex#search",
                    noPopup: true
                }
            })
            this.$root.search = searchControl
            searchControl.events.add("click", this.clickOnSearch)
            let myMap = new ymaps.Map("mapBlock", {
                center: this.cardPoint,
                zoom: this.mapSettings.zoom,
                controls: [zoom, searchControl]
            })
            this.$root.map = myMap
            myMap.events.add("click", this.clickOnMap)
            this.mapIsShow = true
            this.searchPanorama()
            this.setCardPoint()

        },
        clearMap() {
            this.$root.map.geoObjects.removeAll()
            this.curCard = null
            this.showObjects = false
        },
        async search(query) {
            this.clearMap()
            this.mapListKey += 1
            this.curSearch = query
            let searchedIndex = this.list.findIndex((el) => el.text === query)
            this.list[searchedIndex].checked = !this.list[searchedIndex].checked
            if (this.iPoints[query].length === 0) {
                await this.$root.search.search(query).then(this.saveAndShowPointsInf)
            } else {
                this.showSavedPoints()
            }
        },
        saveAndShowPointsInf() {
            let resultsArray = this.$root.search.getResultsArray()
            this.iPoints[this.curSearch] = resultsArray.map((el) => {
                return {
                    coordinates: el.geometry._coordinates,
                    hintContent: el.properties._data.name,
                    type: this.curSearch
                }
            })
            this.$root.search.clear()
            this.showSavedPoints(this.curSearch)
        },
        showSavedPoints() {
            let showArr = []
            this.list.forEach((el) => {
                if (el.checked) {
                    showArr.push({
                        type: el.text,
                        arr: this.iPoints[el.text]
                    })
                }
            })
            let showArrWithPlaceMarks = showArr.map((showArrElement) => {
                return {
                    type: showArrElement.type,
                    arrPlacemarks: showArrElement.arr.map((es) => {
                        let squareLayout = ymaps.templateLayoutFactory.createClass(icons[es.type])
                        let myPlacemark = new ymaps.Placemark(
                            [es.coordinates[0], es.coordinates[1]],
                            {
                                hintContent: es.hintContent
                            },
                            {
                                iconLayout: squareLayout,
                                iconShape: {
                                    type: "Rectangle",
                                    coordinates: [
                                        [-15, -15],
                                        [15, 15]
                                    ]
                                }
                            }
                        )
                        return myPlacemark
                    })
                }
            })
            let clusterArr = []
            showArrWithPlaceMarks.forEach((showArrWithPlaceMarksEl) => {
                const addedClassForIconCluster = this.getClassForClusterIcon(showArrWithPlaceMarksEl.type)
                const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    `<div class="cluster ${addedClassForIconCluster}">{{ properties.geoObjects.length }}</div>`
                )
                const clusterIcons = [
                    {
                        size: [40, 40],
                        offset: [-20, -20]
                    },
                    {
                        size: [60, 60],
                        offset: [-30, -30],
                        shape: {
                            type: "Circle",
                            coordinates: [0, 0],
                            radius: 30
                        }
                    }
                ]
                const clusterNumbers = [100]
                const clusterer = new ymaps.Clusterer({
                    groupByCoordinates: false,
                    clusterDisableClickZoom: true,
                    clusterHideIconOnBalloonOpen: false,
                    geoObjectHideIconOnBalloonOpen: false,
                    clusterIconContentLayout: MyIconContentLayout,
                    clusterIcons: clusterIcons,
                    clusterNumbers: clusterNumbers,
                    minClusterSize: 3
                })
                clusterer.options.set({
                    hasBalloon: false,
                    hasHint: true,
                    hintContent: "hintContent va",
                    gridSize: 80,
                    clusterDisableClickZoom: true
                })
                clusterer.add(showArrWithPlaceMarksEl.arrPlacemarks)
                clusterer.events.add("click", this.clusterClick)
                clusterArr.push(clusterer)
            })
            this.$root.map.geoObjects.removeAll()
            this.setCardPoint()
            clusterArr.forEach((cluster) => {
                this.$root.map.geoObjects.add(cluster)
            })
        },
        onMupFull() {
            this.mapFull = !this.mapFull

            this.$root.map.container.fitToViewport()
        },
        clusterClick(e) {
            this.$root.map.setCenter(
                e._sourceEvent.originalEvent.originalEvent.originalEvent.target._data.geoObject.geometry._coordinates
            )
            this.$root.map.setZoom(15)
        },
        getClassForClusterIcon(type) {
            switch (type) {
                case "Банки":
                    return "cl-banks"
                case "Детские сады":
                    return "cl-kid-house"
                case "Школы":
                    return "cl-schools"
                case "Аптеки":
                    return "cl-drug-store"
                case "Поликлиники":
                    return "cl-polyclinic"
                case "Магазины":
                    return "cl-stores"
                case "Кафе и рестораны":
                    return "cl-cafe"
                default:
                    return ""
            }
        },
        toggleInfrostructure() {
            this.showInfrostructure = !this.showInfrostructure
            if (this.panoramaIsShow) {
                this.destroyPanorama()
            }
            this.showObjects = false
        },
        clear() {
            this.$root.search.clear()
        },
        des() {
            this.$root.panr.destroy()
            this.panoramaIsShow = false
        },
        set(pl) {
            this.$root.panr = pl
        },
        destroyPanorama() {
            this.$root.panr.destroy()
            this.panoramaIsShow = false
            this.$refs["panoramaRef"].style.zIndex = `0`
        },

        showPanoramaNew() {
            if (this.showInfrostructure) {
                this.showInfrostructure = false
            }
            this.curCard = null
            if (this.panoramaIsShow) {
                this.destroyPanorama()
            } else {
                let player = new ymaps.panorama.Player("panoramaBlock", this.$root.panoramaData[0], { direction: [256, 16] })
                player.events.add("destroy", this.destroyPanEvent)
                this.$root.panr = player
                this.panoramaIsShow = true
                this.$refs["panoramaRef"].style.zIndex = `2`
            }
        },
        destroyPanEvent() {
            this.panoramaIsShow = false
            this.$refs["panoramaRef"].style.zIndex = `0`
            this.setCardPoint()
        },
        setPanorama(panoramas) {
            if (panoramas.length > 0) {
                this.$root.panoramaData = panoramas
                this.panoramaButton = false
            } else {
                this.panoramaButton = true
            }
        },
        searchPanorama() {
            ymaps.panorama.locate([this.cardPoint[0], this.cardPoint[1]]).done(this.setPanorama, (error) => {
            })
        },
        setCardPoint() {
            let myPlacemark = new ymaps.Placemark(
                [this.cardPoint[0], this.cardPoint[1]],
                {
                    hintContent: this.cardPointHint,
                    balloonContent: this.cardPointBalloon
                },
                {
                    iconLayout: "default#image",
                    iconImageSize: [30, 40]
                }
            )
            this.$root.map.geoObjects.add(myPlacemark)
        },
        clickOnMap() {
            this.showInfrostructure = false
            this.curCard = null
        },
        showCardPoint() {
            const points = this.$root.search.getResultsArray()
            this.$root.search.clear()
            this.cardPoint = points[0].geometry._coordinates
            this.$root.map.geoObjects.removeAll()
            this.setCardPoint()
            this.searchPanorama()
        },
        clickOnSearch() {
            if (
                event.target.className === "ymaps-2-1-79-float-button-icon ymaps-2-1-79-float-button-icon_icon_magnifier" ||
                event.target.className === "ymaps-2-1-79-searchbox__fold-button-icon"
            ) {
                this.mapSearchPanelOpen = !this.mapSearchPanelOpen
            }
        }

    }
}
</script>

<style lang="scss">
.map-full {
    & .ymaps-2-1-79-map {
        width: 100% !important;
        height: 100% !important;
    }
}
</style>
<style lang="scss" scoped>
.map-detail {
    $that: &;
    z-index: 1;
    position: relative;
    height: 570px;
    min-height: 534px;
    overflow: hidden;
    box-sizing: border-box;

    @media (max-width: 1920px) {
        height: calc(570 / 1920 * 100vw);
    }

    @include laptop {
        min-height: 500px;
    }

    &.map-full {
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #ccc;
    }

    &__full {
        position: absolute;
        z-index: 10;
        right: 12px;
        top: 12px;

        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 24px;
        min-width: 24px;
        background: #ffffff;

        transition: top 0.5s ease;

        & span {
            font-weight: 500;
            font-size: 12px;
            line-height: 22px;
            text-transform: uppercase;
            color: #232930;

            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 9px 44px;
        }
    }

    &__estate-card {
        z-index: 9999;
        transition: opacity 0.25s ease-in-out;
        opacity: 1;
        /*  pointer-events: none;*/
        position: absolute;
        top: 0;
        right: 0;
        width: 336px;
        min-height: 482px;
        height: auto;

        &._is-showing {
            opacity: 1;
            pointer-events: all;
        }

        @include laptop {
            /*     top: 38px;*/
        }

        &--mobile {
            @include phone {
                width: 100%;
                top: auto;
                bottom: 0;
                transform: translate3d(0, 90%, 0);
                transition: opacity 0.25s 0.1s, transform 0.3s ease-out;

                &._is-showing {
                    transform: translate3d(0, 0, 0);
                }
            }
        }
    }

    .panorama::v-deep {
        box-sizing: border-box;
        z-index: 0;
        position: absolute;
        width: 100%;
        height: 570px;

        .ymaps-2-1-79-islets_round-button__icon {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &__actions {
        position: absolute;
        top: 40px;
        left: 38px;
        z-index: 10;
        display: flex;

        @include laptop {
            top: 50%;
            left: auto;
            right: 15px;
            transform: translateY(-50%);
            flex-direction: column;
        }

        @include tablet {
            display: none;
        }

        .button {
            @include laptop {
                height: auto;
                min-width: auto;
                padding-top: 15px;
                padding-bottom: 15px;
            }

            &:not(:last-child) {
                margin-right: 10px;

                @include laptop {
                    margin-right: 0;
                    margin-bottom: 10px;
                }
            }

            &:first-child {
                @include laptop {
                    display: none;
                }
            }
        }

        ._disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    &__info {
        position: absolute;
        top: calc(40px + 56px);
        left: 38px;
        bottom: 0;
        // height: calc(100% - 10px - 56px - 48px);
        margin-top: 10px;
        overflow: hidden;
    }

    &__info-mobile {
        position: absolute;
        bottom: 18px;
    }
}
</style>
