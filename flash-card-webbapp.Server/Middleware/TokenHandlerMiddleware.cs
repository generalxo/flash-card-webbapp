namespace flash_card_webbapp.Server.Middleware
{
    public class TokenHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        public TokenHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var token = context.Request.Cookies["token"];
            if (!string.IsNullOrEmpty(token))
            {
                context.Request.Headers.Authorization = "Bearer " + token;
            }
            await _next(context);
        }
    }
}
