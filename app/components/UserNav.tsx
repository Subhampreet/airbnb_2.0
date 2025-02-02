import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { createAirbnbHome } from "../action";

export default async function UserNav() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const createHomewithId = createAirbnbHome.bind(null, {
        userId: user?.id as string,
    });


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <img
                        src={user?.picture ?? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                        alt="Image of the user"
                        className="rounded-full h-8 w-8 hidden lg:block"
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {
                    user ?
                        (<>
                            <DropdownMenuItem>
                                <form className="w-full" action={createHomewithId}>
                                    <button type="submit" className="w-full text-start">Airbnb your Home</button>
                                </form>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/my-homes" className="w-full">My Listings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/favourite" className="w-full">My Favourites</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/reservations" className="w-full">My Reservations</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><LogoutLink className="w-full">Log Out</LogoutLink></DropdownMenuItem>
                        </>) :
                        (<>
                            <DropdownMenuItem><LoginLink className="w-full">Login</LoginLink></DropdownMenuItem>
                            <DropdownMenuItem><RegisterLink className="w-full">Register</RegisterLink></DropdownMenuItem>
                        </>
                        )
                }

            </DropdownMenuContent>
        </DropdownMenu>
    )
}