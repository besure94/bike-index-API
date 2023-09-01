export default class BikeSearch {
  static async getBike(city) {
    try {
      const response = await fetch(`https://bikeindex.org:443/api/v3/search?locations=${city}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}