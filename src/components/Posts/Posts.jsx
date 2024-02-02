import '../Posts/Posts.css';
import Chole from '../../assets/images/chloe.png';
import Emily from '../../assets/Icons/emily.png';
import Vector from '../../assets/Icons/Vector.png';
import Union from '../../assets/Icons/Union.png';
import Group from '../../assets/Icons/Group 95.png';
import VectoR from '../../assets/Icons/VectoRigth.png';
import GroupC from '../../assets/Icons/Group 79.png';
import GruopP from '../../assets/Icons/Group 83.png';
import Ellipse from '../../assets/Icons/Ellipse 17.png';
import VectorCr from '../../assets/Icons/VectorCr.png';
import GroupPs from '../../assets/Icons/Group 6.png';
import Furka from '../../assets/images/furka.jpg';
import Furkan from '../../assets/images/furkan.jpg';
import Pexels from '../../assets/images/pexels.jpg';
import Chalo from '../../assets/images/chalo.jpg';
import Caio from '../../assets/images/caio.jpg';
import Rodrigo from '../../assets/images/rodrigo.jpg';




const postsBody = [
    {
        name: "Emily",
        img: Chalo,
        imgPerfil: Emily,
        textState: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus non animi vitae maxime.Optio, provident aperiam? Porro",
        likeIcons: GroupC,
        likes: "32.8k likes",
        imgposts: Ellipse,
        imgname: "amanxux",
    },
    {
        name: "Elizabeth",
        img: Furka,
        imgPerfil: Furkan,
        textState: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus non animi vitae maxime.Optio, provident aperiam? Porro",
        likeIcons: GroupC,
        likes: "11.2k likes",
        imgposts: Ellipse,
        imgname: "Furkan The",
    },
    {
        name: "Felipe",
        img: Caio,
        imgPerfil: Rodrigo,
        textState: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus non animi vitae maxime.Optio, provident aperiam? Porro",
        likeIcons: GroupC,
        likes: "1.8k likes",
        imgposts: Ellipse,
        imgname: "Furkan The",
    },
];


const Posts = () => {

    return (

        <>
            {postsBody.map((profile) => {

                return (<div id={profile.name} className='postsContainer' key={profile.name}>

                    <div className='postsImg' style={{ backgroundImage: `url(${profile.img})` }}>

                        <div className='union'>
                            <img src={Union} />
                        </div>

                        <div className='icons'>

                            <div className='iconsRigth'>
                                <img className='vectoR' src={VectoR} />
                                <img className='group' src={Group} />
                            </div>

                            <div className='iconsLeft'>
                                <img className='vector' src={Vector} />
                                <img className='groupL' src={Group} />
                            </div>
                        </div>

                    </div>


                    <div className='containerCm'>

                        <div className='postsP'>

                            <img className='imgEmily' src={profile.imgPerfil} />

                            <div>
                                <p className='textEmily'>{profile.name}</p>
                                <p className='textMinu'>57 minutes ago</p>
                            </div>

                        </div>

                        <div className='posts'>
                            {profile.textState}
                        </div>

                        <div className='cajabutton'>
                            <img src={GroupC} />
                        </div>

                        <div className='likes'>
                            <p>{profile.likes}</p>
                        </div>

                        <div className='postsSg'>

                            <div className='PerfilPs'>
                                <img src={profile.imgposts} />
                                <p>{profile.imgname}</p>
                            </div>

                            <div className='iconsPs'>
                                <img src={GroupPs} />
                                <img src={VectorCr} />
                            </div>

                        </div>

                        <p className='text'>Это тестовое сообщение</p>

                        <div className='reply'>
                            <p>37m ago</p>  <p>25 Likes</p> <p>Reply</p>
                        </div>

                        <div className='reply'>
                            <p>______ View Replies (12)</p>
                        </div>

                        <div className='reply'>
                            <p>View all 1988 comments</p>
                        </div>

                        <div>
                            <input className='inpitsearh' type="text" placeholder='Scroll down to read others comments' />
                        </div>

                    </div>

                    <div className='postsPts'>
                        <div>
                            <img src={GruopP} />
                        </div>
                    </div>

                </div>)
            })}
        </>
    );
}

export default Posts;

