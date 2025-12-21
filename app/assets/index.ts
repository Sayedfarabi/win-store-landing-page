import logo from "@/app/assets/images/logo.png";
import cart from "@/app/assets/svgs/cart.svg";
import heart from "@/app/assets/svgs/heart.svg";
import user from "@/app/assets/svgs/user.svg";
import humberg from "@/app/assets/svgs/humberg.svg";
import facebook from "@/app/assets/svgs/facebook.svg";
import twitter from "@/app/assets/svgs/twitter.svg";
import linkedIn from "@/app/assets/svgs/linkedIn.svg";
import instagram from "@/app/assets/svgs/instagram.svg";
import banner_bg from "@/app/assets/images/banner_bg.png";
import category_1 from "@/app/assets/images/categories/electronics.png";
import category_2 from "@/app/assets/images/categories/fashion.png";
import category_3 from "@/app/assets/images/categories/appliances.png";
import category_4 from "@/app/assets/images/categories/babies.png";

const assets = {
  images: {
    logo: logo,
    banner_bg: banner_bg,
    categories: [category_1, category_2, category_3, category_4],
  },
  svgs: {
    cart: cart,
    heart: heart,
    user: user,
    humberg: humberg,
  },
  icons: {
    facebook: facebook,
    twitter: twitter,
    linkedIn: linkedIn,
    instagram: instagram,
  },
};

export default assets;
