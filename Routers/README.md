These are some templates that should be modified at the convenience of each project.

To make it work, we have to create a variable called `isAuthenticated`, that we will pass as props.

```
<PublicRoutes 
    exact path="/login" 
    isAuthenticated={true/false} 
    component={LoginScreen} 
/>

 <PrivateRoutes
    exact path="/" 
    isAuthenticated={true/false} 
    component={CalendarScreen} 
/>
```