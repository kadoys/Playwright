class APIUtils
{
    constructor(apiContext, loginPayLoad)
    {
        this.apiContext= apiContext;
        this.loginPayLoad = loginPayload;

    }




    async getToken()
{
         const loginResponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
             data:this.loginPayload
             } )
             expect(loginResponse.ok()).toBeTruthy();
            const loginResponseJson = await loginResponse.json(); 
            token =loginResponseJson.token;
            console.log(token)
             return token;
}
async createOrder(orderPayLoad)
{
    let response ={};
    response.token = await this.getToken();
    const orderResponse = this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order/",
        {

           data: orderPayload,
           headers: {
                    'Authorization' :response.token,
                    'Content-Type'  : 'application/json'
           },

       })
       
       const orderResponseJson =await orderResponse.json();
       console.log(orderResponseJson);
      const orderId = orderResponseJson.orders[0]
       response.OrderId = orderId;
       
       return response;

}


}
module.exports = {APIUtils};