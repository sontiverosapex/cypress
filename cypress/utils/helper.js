import GearPage from "../pages/GearPage";
import HomePage from "../pages/HomePage";
import MenPage from "../pages/MenPage";
import SalePage from "../pages/SalePage";
import TrainingPage from "../pages/TrainingPage";
import WhatsNewPage from "../pages/WhatsNewPage";
import WomenPage from "../pages/WomenPage";

class Helper {
    objects = {
        "GearPage": GearPage,
        "HomePage": HomePage,
        "MenPage": MenPage,
        "SalePage": SalePage,
        "TrainingPage": TrainingPage,
        "WhatsNewPage": WhatsNewPage,
        "WomenPage": WomenPage,
    }

    setCurrentPage(page) {
        return Object.create(this.objects[this.camelCase(page)].prototype);
    }

    camelCase(str) {
        return (' ' + str + " page").toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
            return chr.toUpperCase()
        });
    }
}

export default new Helper();