import CSSLogo from "../logos/skills/css-logo";
import FirebaseLogo from "../logos/skills/firebase-logo";
import GitLogo from "../logos/skills/git-logo";
import GithHubLogo from "../logos/skills/github-logo";
import HTMLLogo from "../logos/skills/html-logo";
import JavaScriptLogo from "../logos/skills/javascript-logo";
import NextLogo from "../logos/skills/next-logo";
import NodeLogo from "../logos/skills/node-logo";
import NPMLogo from "../logos/skills/npm-logo";
import PythonLogo from "../logos/skills/python-logo";
import ReactLogo from "../logos/skills/react-logo";
import SQLiteLogo from "../logos/skills/sqlite-logo";
import SupabaseLogo from "../logos/skills/supabase-logo";
import TypeScriptLogo from "../logos/skills/typescript-logo";
import VSCodeLogo from "../logos/skills/vscode-logo";
import SkillBadge from "../skill-badge";
import SkillsGrid from "../skills-grid";
import HyperText from "../ui/hyper-text";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="w-full flex justify-center items-center mb-12 md:mb-16">
        <HyperText
          text="Skills"
          className="font-mono uppercase tracking-wide text-center"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-lg mb-4">Languages</h3>
        <SkillsGrid>
          <li>
            <SkillBadge
              icon={<JavaScriptLogo />}
              name="JavaScript"
              color="#f7df1e"
            />
          </li>
          <li>
            <SkillBadge
              icon={<TypeScriptLogo />}
              name="TypeScript"
              color="#1976d2"
            />
          </li>
          <li>
            <SkillBadge icon={<PythonLogo />} name="Python" color="#0277BD" />
          </li>
          <li>
            <SkillBadge icon={<HTMLLogo />} name="HTML" color="#E65100" />
          </li>
          <li>
            <SkillBadge icon={<CSSLogo />} name="CSS" color="#0277BD" />
          </li>
        </SkillsGrid>
      </div>
      <div className="mb-8">
        <h3 className="text-lg mb-4">Frameworks</h3>
        <SkillsGrid>
          <li>
            <SkillBadge icon={<ReactLogo />} name="React.js" color="#61dbfb" />
          </li>
          <li>
            <SkillBadge icon={<NextLogo />} name="Next.js" color="#ffffff" />
          </li>
        </SkillsGrid>
      </div>
      <div className="mb-8">
        <h3 className="text-lg mb-4">Tools</h3>
        <SkillsGrid>
          <li>
            <SkillBadge icon={<VSCodeLogo />} name="VS Code" color="#29b6f6" />
          </li>
          <li>
            <SkillBadge icon={<NodeLogo />} name="Node.js" color="#6FA660" />
          </li>
          <li>
            <SkillBadge icon={<NPMLogo />} name="NPM" color="#d50000" />
          </li>
          <li>
            <SkillBadge icon={<GitLogo />} name="Git" color="#F4511E" />
          </li>
          <li>
            <SkillBadge icon={<GithHubLogo />} name="Github" color="#ffffff" />
          </li>
          <li>
            <SkillBadge icon={<SQLiteLogo />} name="SQLite" color="#0b7fcc" />
          </li>
          <li>
            <SkillBadge
              icon={<FirebaseLogo />}
              name="Firebase"
              color="#ff8f00"
            />
          </li>
          <li>
            <SkillBadge
              icon={<SupabaseLogo />}
              name="Supabase"
              color="#3ed18f"
            />
          </li>
        </SkillsGrid>
      </div>
    </section>
  );
}
