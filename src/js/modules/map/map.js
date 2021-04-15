const mapContainer = document.querySelector(".map-container")
const spinner = mapContainer.querySelector(".loader")
let check_if_load = 0

function init () {
    const myMapTemp = new ymaps.Map("map-yandex", {
        center: [59.938951, 30.315635],
        zoom: 7,
        controls: ["zoomControl", "fullscreenControl"]
    })

    const myPlacemarkTemp = new ymaps.Placemark([59.938951, 30.315635], {
        balloonContent: "Здесь может быть ваш адрес"
    }, {
        iconLayout: "default#imageWithContent",
        iconImageHref: "../../../img/map/map-marker.png",
        iconImageSize: [31, 43]
    })

    myMapTemp.geoObjects.add(myPlacemarkTemp)

    const layer = myMapTemp.layers.get(0).get(0)
    
    waitForTilesLoad(layer).then(function (result) {
        spinner.classList.remove("is-active")
        console.log(result)
    })
}

function waitForTilesLoad (layer) {
    return new ymaps.vow.Promise((resolve, reject) => {
        const tc = getTileContainer(layer)
        let readyAll = true
        

        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false
            }
        })

        if (!readyAll) {
            resolve("map loaded")
        }
    })
}

function getTileContainer(layer) {
    for (let k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
                    return layer[k]
                }
        }
    }

    return null
}

function loadScript(url, callback) {
    const script = document.createElement("script")

    if (script.readyState) {
        script.addEventListener('readystatechange', () => {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null
                callback()
            }
        })
    } else {
        script.addEventListener("load", () => callback())
    }

    script.src = url
    document.querySelector("head").append(script)
}

function ymap () {
    mapContainer.addEventListener("click", () => {
        if (check_if_load === 0) {
            check_if_load = 1

            spinner.classList.add("is-active")

            loadScript("https://api-maps.yandex.ru/2.1/?apikey=5dc03896-ed83-44fc-9844-aa04ebfa0c14&lang=ru_RU&amp;loadByRequire=1", () => {
                ymaps.load(init)
            })
        }
    })
}

ymap()