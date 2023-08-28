const Content = () =>{
    
    return(
        <div className="Content">


            <img  className="Content__wallpaper" src="https://w-dog.ru/wallpapers/16/10/441143085002137/devushka-plachet-slezy-vzglyad-sverxu-dlinnye-volosy-poezd.jpg"></img>


            <div className="Profile">
                <img  className="Content__logo" src="https://petreader.net/wp-content/uploads/2022/01/9-1-5-768x512.jpg"></img>
                <div className="Profile__info">
                    <p className="Profile__info__description">Egor Borisov</p>
                    <p className="Profile__info__description">Russia</p>
                    <p className="Profile__info__description">19 y.o</p>
                </div>
            </div>


            <div className="createrPosts">
                <p className="createrPosts__text">Create new post</p>
                <div className="createrPosts__block">
                    <input className="createrPosts__input"></input>
                    <button className="createrPosts__button">Send</button>
                </div>
            </div>

            <div className="Posts">
                <div className="Post">
                    <img className="Post__image" src="https://kartinkin.net/uploads/posts/2021-07/1625685812_49-kartinkin-com-p-anime-tyanka-na-oboi-anime-krasivo-49.jpg"></img>
                    <p className="Post__discription">First girl</p>
                </div>

                <div className="Post">
                    <img className="Post__image" src="https://i.artfile.ru/1920x1200_1092785_[www.ArtFile.ru].jpg"></img>
                    <p className="Post__discription">Funny girl</p>
                </div>

                <div className="Post">
                    <img className="Post__image" src="https://gas-kvas.com/uploads/posts/2023-01/1673303307_gas-kvas-com-p-risunki-devushek-anime-seksi-6.jpg"></img>
                    <p className="Post__discription">Pretty girl</p>
                </div>

                <div className="Post">
                    <img className="Post__image" src="https://fikiwiki.com/uploads/posts/2022-02/1644986115_22-fikiwiki-com-p-kartinki-krasivikh-anime-devushek-29.jpg"></img>
                    <p className="Post__discription">Red girl</p>
                </div>

                <div className="Post">
                    <img className="Post__image" src="https://i.artfile.ru/2074x1458_853971_%5Bwww.ArtFile.ru%5D.jpg"></img>
                    <p className="Post__discription">Dark girl</p>
                </div>

                <div className="Post">
                    <img className="Post__image" src="https://avatars.dzeninfra.ru/get-zen_doc/9367095/pub_641ab8e13e634336127a6120_641ab90de7927f02c1528b26/scale_1200"></img>
                    <p className="Post__discription">Last girl</p>
                </div>

            </div>
        </div>
    )
}
export default Content;