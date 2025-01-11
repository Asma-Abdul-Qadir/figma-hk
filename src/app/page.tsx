
import HeroSection from "../components/herosection";
import FeaturedProducts from "../components/featuredproducts";
import LatestProducts from "../components/latestproducts";
import OurFeatures from "../components/ourfeatures";
import TwoSections from "../components/twosections";
import TrendingProducts from "../components/trendingproducts";
import DiscountItem from "../components/discountitem";
import TopCategories from "../components/topcategories";
import Newsletter from "../components/newsletter";
import BrandsLogo from "../components/brandslogo";
import LatestBlog from "../components/latestblog";


export default function Home() {
  return (
    <div>
      

<HeroSection/>
<FeaturedProducts/>
<LatestProducts/>
<OurFeatures/>
<TwoSections/>
<TrendingProducts/>
<DiscountItem/>
<TopCategories/>
<Newsletter/>
<BrandsLogo/>

<LatestBlog/>

    </div>
   
  );
}
