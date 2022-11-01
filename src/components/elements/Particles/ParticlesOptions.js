import bg from '../../resources/Particles-gitara-bg.jpg'
const options = {
	"background": {
		"color": "#212121",
		"url": '../../resources/Particles-gitara-bg.jpg'
	},
	"fpsLimit": 40,
	"interactivity": {
		"detectsOn": "canvas",
		"events": {
			"onhover": {
				"mode": "repulse",
				"enable": true
			},
			"onClick": {
				"enable": true,
				"mode": "push"
			}

		}
	},
	"particles": {
		"color": {
			"value": "#0167FF"
		},
		"number": {
			"density": {
				"enable": true,
				"area": 1080
			},
			"limit": 0,
			"value": 50
		},
		"opacity": {
			"animation": {
				"enable": true,
				"minimumValue": 0.5,
				"speed": 1,
				"sync": false
			},
			"random": {
				"enable": true,
				"minimumValue": 0.1
			},
			"value": 1
		},
		"shape": {
			"type": "circle"

		},
		"size": {
			"value": 5
		},
		"move": {
			"enable": true,
			"direction": "none",
			"speed": 3
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#3485ff",
			"opacity": 0.3393495537158777,
			"width": 3
		}

	}
}
export default options;