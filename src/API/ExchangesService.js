import axios from "axios";

export default class ExchangesService{

    // Method gets exchanges rates from free API
    static async getExchanges(){
        const response = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=f013b359cc342fab99879e9d2daaa713&format=1')


        const euroValue = response.data.rates.RUB;
        const dollarValue = (1/response.data.rates.USD)*response.data.rates.RUB;

        return {
            exchanges: response.data,
            date: response.data.date,
            euroValue: euroValue.toFixed(2).toString(),
            dollarValue: dollarValue.toFixed(2).toString()
        }
    }
}