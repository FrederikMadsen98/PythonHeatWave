const baseUrl = "https://heatwaveprojekt.azurewebsites.net/api/temp";
const ApiUrl = "http://api.weatherapi.com/v1/current.json";
const ApiKey = "29501236f4854c099e1104709240405";

Vue.createApp({
    data() {
        return {
            TempMeasurements: [],
            error: "",
        }
    },
    created() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            try {
                const response = await axios.get(baseUrl);
                this.TempMeasurements = response.data;
            } catch (error) {
                this.error = error.message;
            }
        },
        async getLocalTemperature() {
            try {
                const response = await axios.get(openWeatherMapApiUrl);
                this.localTemperature = response.data.main.temp;
            } catch (error) {
                this.error = error.message;
            }
        },
        async getLocalTemperature() {
            try {
                const response = await axios.get(ApiUrl);
                this.localTemperature = response.data.main.temp;
            } catch (error) {
                this.error = error.message;
            }
        }
    }
}).mount('#app');