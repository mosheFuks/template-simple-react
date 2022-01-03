import "./Blog.css"
import img1 from '../img/imagenes/nocheDeBrujas.jpg'
import img2 from '../img/imagenes/educacion.jpg'
{/*import maggie from '../img/imagenes/maggie.jpg' */}

const Blog = () => {
    return (  
        <div className="fondoBlog">
            <div className="mt-3 div1">
                <h1>Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996</h1>
                <img src={img1} alt="Noche de brujas"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere 
                volutpat quis, egestas cras ullamcorper cum convallis cubilia placerat habitant vel, ac duis ridiculus suscipit 
                ultricies lobortis primis montes dis. Magna ullamcorper turpis class semper cursus tellus sociis morbi, 
                dapibus hac sapien conubia quam diam dignissim taciti, neque viverra netus quis litora congue velit. 
                Metus nostra fringilla magna velit vehicula quisque, phasellus odio ornare dui laoreet placerat, 
                accumsan vitae feugiat lobortis himenaeos.</p>

                <h1 className="titulo2">Episodio "Lucha Educativa", Abril 16, 1995</h1>
                <img src={img2} alt="Educacion"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere 
                volutpat quis, egestas cras ullamcorper cum convallis cubilia placerat habitant vel, ac duis ridiculus suscipit 
                ultricies lobortis primis montes dis. Magna ullamcorper turpis class semper cursus tellus sociis morbi, 
                dapibus hac sapien conubia quam diam dignissim taciti, neque viverra netus quis litora congue velit. 
                Metus nostra fringilla magna velit vehicula quisque, phasellus odio ornare dui laoreet placerat, 
                accumsan vitae feugiat lobortis himenaeos.</p>
            </div>
        
        
        
        
        
        
        
        
        </div>
    );
}
 
export default Blog;