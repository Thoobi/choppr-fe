import axios from "axios";

export class ShortenUrlService {
  static BASE_URL = process.env.NEXT_PUBLIC_CHOPPR_BASE_URL as string;

  static async shortenUrl(payload: { longUrl: string; userId?: string | null }) {
    try {
      const { longUrl, userId } = payload;
      const response = await axios.post(`${this.BASE_URL}/longurl`, 
        {longUrl, ...( userId && {userId})}
      );
      return response.data;
    } catch (error) {
      console.error("Error shortening URL:", error);
      throw error;
    }
  }

  static async getUserUrls(){
    try {
      const response = await axios.get(`${this.BASE_URL}/get-user-url/${localStorage.getItem("userid")}`);
      return response.data;
    } catch (error) {
      console.error("Error getting user URLs:", error);
      throw error;
    }
  }
}
