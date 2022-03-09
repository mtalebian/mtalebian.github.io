import * as bd from "react-basic-design";
import SvgMenu from "../../icons/Menu";

export const HomeApp = () => {
    return (
        <>
            <bd.AppBar position="static">
                <bd.Toolbar>
                    <h5 className="appbar-title">Mahdi Talebian</h5>
                </bd.Toolbar>
            </bd.AppBar>
            <div className="container py-3">
                <div>
                    MyProjects:
                    <bd.Button variant="outline" href="/react-basic-design" className="m-s-3">
                        react-basic-design
                    </bd.Button>
                </div>
            </div>
        </>
    );
};
