User APIs

| Routers                       | Verbs  | Progress | Is Private | Description                                       |
| :---------------------------- | :----- | :------- | :--------- | :------------------------------------------------ |
| /v1/user                      | GET    | Done     | Yes        | Get user info                                     |
| /v1/user                      | POST   | Done     | No         | Create a user                                     |
| /v1/user/login                | POST   | Done     | No         | Verify user authentication and JWT                |
| /v1/user/reset-password       | POST   | Done     | No         | Verify email and email pin to restet the password |
| /v1/user/reset-password       | PATCH  | Not yet  | No         | Replace with new password                         |
| /v1/user/logout               | DELETE | Not yet  | Yes        | Delete user accessJWT                             |


Event APIs

| Routers                    | Verbs | Progress | Is Private | Description                  |
| :------------------------- | :---- | :------- | :--------- | :--------------------------- |
| /v1/event                  | POST  | Not yet  | No         | Create a event               |
| /v1/event/{id}             | GET   | Not yet  | No         | Get pending information      |
| /v1/event/{id}             | PUT   | Not yet  | No         | Update event details         |
| /v1/event/close-event/{id} | POST  | Not yet  | No         | Update event status to close |            

Token API resources

| Routers    | Verbs | Progress | Is Private | Description            |
| :--------- | :---- | :------- | :--------- | :--------------------- |
| /v1/tokens | GET   | Done     | No         | GET a fress access JWT |



