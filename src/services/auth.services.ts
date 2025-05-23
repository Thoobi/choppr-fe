import axios from "axios";

export class AuthServices {
    static BASE_URL = process.env.NEXT_PUBLIC_CHOPPR_BASE_URL as string;

    static async RegisterUser(payload: {name: string, email: string, walletAddress: string | undefined}) {
        try {
            const response = await axios.post(`${this.BASE_URL}/user/register`, 
              payload
            );
            console.log(response.data);
            
            return response.data;
          } catch (error) {
            console.error("Error registering user:", error);
            throw error;
          }
    }
}