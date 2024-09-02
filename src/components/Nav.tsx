import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="bg-custom_black text-primary-foreground flex justify-center gap-[2rem] h-[5vh]">
      {navLinks.map((el) => (
        <NavLink key={el.to} el={el} />
      ))}
    </nav>
  );
}

const navLinks = [
  { to: "/login", title: "login" },
  { to: "/signup", title: "signup" },
];
