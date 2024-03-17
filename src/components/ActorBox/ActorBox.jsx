import React from 'react'
import style from "./assets/css/style.module.css"

const ActorBox = ({data}) => {

  return (
    <div className={style.wrap}>
        <img className={style.actor_img_null} src="data:image/svg+xml;base64,PHN2ZyBpZD0iZ2x5cGhpY29ucy1iYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiPgogIDxwYXRoIGZpbGw9IiNiNWI1YjUiIGlkPSJ1c2VyIiBkPSJNMjcsMjQuMjM2NjlWMjdhMSwxLDAsMCwxLTEsMUg1YTEsMSwwLDAsMS0xLTFWMjQuMjM2NjlhMS41NzgwNiwxLjU3ODA2LDAsMCwxLC45MzExNS0xLjM2NDYyTDEwLjA2NzIsMjAuMTY3QTUuMDIzNzksNS4wMjM3OSwwLDAsMCwxNC41NTI3MywyM2gxLjg5NDU0YTUuMDIzMzYsNS4wMjMzNiwwLDAsMCw0LjQ4NTM1LTIuODMzMTNsNS4xMzYyMywyLjcwNTJBMS41NzgwNiwxLjU3ODA2LDAsMCwxLDI3LDI0LjIzNjY5Wk05LjY0NDc4LDE0LjEyNTczYTIuOTkxNDMsMi45OTE0MywwLDAsMCwxLjMxMDczLDEuNDYybC42NjU4MywzLjA1MTc2QTIuOTk5OTQsMi45OTk5NCwwLDAsMCwxNC41NTIzNywyMWgxLjg5NTI2YTIuOTk5OTQsMi45OTk5NCwwLDAsMCwyLjkzMS0yLjM2MDQ3bC42NjU4My0zLjA1MTc2YTIuOTkxMTUsMi45OTExNSwwLDAsMCwxLjMxMDczLTEuNDYybC4yOC0uNzUxNDZBMS4yNzQ5LDEuMjc0OSwwLDAsMCwyMSwxMS42Mjk4OFY5YzAtMy0yLTUtNS41LTVTMTAsNiwxMCw5djIuNjI5ODhhMS4yNzQ5LDEuMjc0OSwwLDAsMC0uNjM1MTksMS43NDQzOVoiLz4KPC9zdmc+Cg==" alt="" />
        {data.profile_path&&<img className={style.actor_img} src={`https://image.tmdb.org/t/p/original${data.profile_path}`} alt="" />}
        <div className={style.content}>
            <div className={style.name}>{data.name}</div>
            <div className={style.character}>{data.character}</div>
        </div>
    </div>
  )
}

export default ActorBox