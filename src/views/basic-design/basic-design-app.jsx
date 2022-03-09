import * as bd from "react-basic-design";
import SvgMenu from "../../icons/Menu";

export const BasicDesignApp = () => {
    return (
        <>
            <bd.AppBar position="static">
                <bd.Toolbar>
                    <bd.Button variant="icon" color="inherit" edge="start" href="/">
                        <SvgMenu />
                    </bd.Button>
                    <h5 className="appbar-title">BasicDesign</h5>
                </bd.Toolbar>
            </bd.AppBar>
            <div className="container py-3">
                <div className="row">
                    <div className="col" style={{ maxWidth: 200 }}>
                        <bd.List variant="menu" className="border bg-default" small compact>
                            <bd.ListItem variant="text" primary="Inputs:" />
                            <bd.ListItem
                                primary="Button"
                                onClick={(e) => (window.location = "/react-basic-design/button")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Button Group"
                                onClick={(e) => (window.location = "/react-basic-design/button-group")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Checkbox"
                                onClick={(e) => (window.location = "/react-basic-design/checkbox")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Radio button"
                                onClick={(e) => (window.location = "/react-basic-design/radio-button")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Switch"
                                onClick={(e) => (window.location = "/react-basic-design/switch")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Text Field"
                                onClick={(e) => (window.location = "/react-basic-design/text-field")}
                                className="text-primary"
                                inset
                            />

                            <bd.ListItem variant="text" primary="Data Display:" />

                            <bd.ListItem
                                primary="Avatar"
                                onClick={(e) => (window.location = "/react-basic-design/avatar")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Badge"
                                onClick={(e) => (window.location = "/react-basic-design/badge")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="List"
                                onClick={(e) => (window.location = "/react-basic-design/list")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Table"
                                onClick={(e) => (window.location = "/react-basic-design/table")}
                                className="text-primary"
                                inset
                            />

                            <bd.ListItem variant="text" primary="Surfaces:" />

                            <bd.ListItem
                                primary="AppBar"
                                onClick={(e) => (window.location = "/react-basic-design/appbar")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Accodion"
                                onClick={(e) => (window.location = "/react-basic-design/accodion")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Card"
                                onClick={(e) => (window.location = "/react-basic-design/card")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Paper"
                                onClick={(e) => (window.location = "/react-basic-design/paper")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Panel"
                                onClick={(e) => (window.location = "/react-basic-design/panel")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem variant="text" primary="Navigation:" />
                            <bd.ListItem
                                primary="Tabs"
                                onClick={(e) => (window.location = "/react-basic-design/tabs")}
                                className="text-primary"
                                inset
                            />

                            <bd.ListItem variant="text" primary="Layout:" />

                            <bd.ListItem
                                primary="Form Row"
                                onClick={(e) => (window.location = "/react-basic-design/form-row")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Form"
                                onClick={(e) => (window.location = "/react-basic-design/form")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Flex"
                                onClick={(e) => (window.location = "/react-basic-design/flex")}
                                className="text-primary"
                                inset
                            />

                            <bd.ListItem variant="text" primary="Utils:" />

                            <bd.ListItem
                                primary="msgbox"
                                onClick={(e) => (window.location = "/react-basic-design/msgbox  ")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="Colors"
                                onClick={(e) => (window.location = "/react-basic-design/colors")}
                                className="text-primary"
                                inset
                            />
                            <bd.ListItem
                                primary="New CSS"
                                onClick={(e) => (window.location = "/react-basic-design/new-css")}
                                className="text-primary"
                                inset
                            />
                        </bd.List>
                    </div>
                    <div className="col-12 col-lg-8">demo</div>
                </div>
            </div>
        </>
    );
};
