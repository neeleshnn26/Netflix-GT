export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_ICON="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdKznA81pRoI9RUL72oW-Edjj23Ait0PtR6BtS4bz8n_Kb2LTK6e0qKRVZNiXu7Zxg8QmWDyJUC9mYDJqOhu8AN26dVXXN8.png?r=c1e"
export const BG_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const TMDB_IMG_URL="https://image.tmdb.org/t/p/w500"
  export const SUPPORTED_LANGUAGES=
  [
    {identifier:"english" ,name:"English"},
    {identifier:"hindi" ,name:"Hindi"},
    {identifier:"spanish" ,name:"Spanish"}
  ]

  export const GEMINI_KEY=process.env.REACT_APP_GEMINI_KEY