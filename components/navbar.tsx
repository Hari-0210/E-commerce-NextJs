import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async (props: any) => {
  
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={props.store} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">
              {props.store}
              </p>
          </Link>
          {/* <MainNav data={[]} /> */}
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
