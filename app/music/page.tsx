"use server"

import Link from "next/link";

export default async function MusicPage() {
    return <>
    <div className="max-w-xl md:mx-auto mx-3">
        <p className="text-justify">
            I make a little music here and there too. You can check my spotify out at <Link href="https://open.spotify.com/artist/102hiIhVoGV8C47Q30LIcs?si=QU2FdLjhQrWiDRMS1ZMLKw" className="text-blue-500">spotify.com.</Link> I produce using Ableton, and my genres are a bit fluid. Started off with rap, now making more experimental hip-hop.
        </p>
    </div>
    <div className="max-w-xl mx-3 md:mx-auto mt-12 text-justify">
        <h3 className="text-center mb-3 text-3xl underline">My Favourite Artists Right Now</h3>
        <div className="grid grid-cols-4 rounded-4xl overflow-hidden">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png"></img>
            </div>
            <div>
                <img src="https://www.revolvermag.com/wp-content/uploads/2017/08/18/aroundthefur.jpg"/>
            </div>
            <div>
                <img src="https://i1.sndcdn.com/artworks-brzBonZuRhUzGxYz-pIs0vQ-t500x500.jpg"/>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU555BkvcZMuDqE-JiVfRqo8g8fhe4haFbTw&s"/>
            </div>
        </div>
        <div className="grid grid-cols-4 text-lg italic">
            <p className="text-center">Radiohead</p>
            <p className="text-center">Deftones</p>
            <p className="text-center">JPEGMafia</p>
            <p className="text-center">Nirvana</p>
        </div>
    </div>
</>;
}
