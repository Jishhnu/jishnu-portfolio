import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer>
      <span>
        © {new Date().getFullYear()} {profile.name}. {profile.location}.
      </span>
      <a href="#top">Back to top</a>
    </footer>
  );
}
