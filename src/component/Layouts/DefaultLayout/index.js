import Header from "~/component/Layouts/components/Header";
import Sidebar from "./Sidebar";
function DefautLayout({children}){
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default DefautLayout;