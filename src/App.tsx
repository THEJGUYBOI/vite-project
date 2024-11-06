import reactLogo from "./assets/Cross.svg";

import "./App.css";
import { useWeb3React } from "@web3-react/core";
import Card from "./components/Card";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  const { connector, hooks } = useWeb3React();
 // we are going to link are token link here
  return (
    <ClerkProvider publishableKey="pk_test_bmF0aXZlLW1hbGxhcmQtMTkuY2xlcmsuYWNjb3VudHMuZGV2JA"> 
    <>
 <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      <div>
        <a href=""target="_blank">
        </a>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coded Secrets</h1>

      <p>The Glory Transactions DAO is an innovative decentralized organization that aims to foster trust, transparency, and positive impact within its community and beyond. The guiding virtues of *mercy*, *love*, and *honesty* serve as the foundation of the DAO’s principles, shaping its approach to governance, decision-making, and member interaction. These virtues not only uphold the ethical framework of the organization but also help cultivate a unique culture of empathy, integrity, and shared purpose in the digital space.

### Mercy: The Foundation of Compassionate Collaboration

Mercy is a virtue that embodies compassion, forgiveness, and the ability to consider the perspectives and struggles of others. Within the Glory Transactions DAO, mercy is essential for building a community that values the humanity of its members. As a decentralized organization, the DAO requires active participation from a diverse group of contributors who may come from various backgrounds and experiences. Mercy helps create an environment where mistakes are met with understanding rather than punishment. This culture of forgiveness encourages individuals to take risks, share ideas, and contribute openly without fear of judgment.

Furthermore, mercy plays a vital role in conflict resolution within the DAO. Disputes can arise in any collaborative setting, especially in one that relies on democratic governance. By fostering mercy, the DAO emphasizes resolution over retribution, understanding that a compassionate approach helps resolve issues more constructively. This virtue enables the DAO to uphold a supportive and inclusive space where members feel respected and valued, making it easier to reach consensus and maintain cohesion.

### Love: The Heart of Community and Connection

Love, in this context, is an expression of unity, shared vision, and care for the well-being of the community. It’s the virtue that drives members to look beyond their individual interests to contribute to the greater good of the DAO and its mission. The Glory Transactions DAO can utilize love to inspire members to not only fulfill their roles but also to look for ways to support one another actively. This could mean sharing knowledge, mentoring new members, or contributing to community projects that benefit the DAO as a whole.

Love within the DAO also translates into a commitment to long-term goals that benefit everyone involved, not just a select few. When members are motivated by love, they are more likely to work toward sustainable solutions, consider the future impact of their decisions, and make choices that uphold the organization’s ethical standards. In practical terms, this could manifest in prioritizing initiatives that benefit the ecosystem, such as developing fair governance practices, transparent financial reporting, or social impact projects. This virtue helps align the interests of individual members with the broader mission, creating a resilient and purpose-driven organization.

### Honesty: The Cornerstone of Trust and Transparency

Honesty is the backbone of any successful organization, especially in decentralized systems where trust is essential. For the Glory Transactions DAO, honesty means a commitment to transparency, ethical behavior, and open communication. As a decentralized entity, the DAO relies on the trust of its members to make collective decisions without traditional hierarchies. Honesty ensures that all information is shared transparently, fostering trust between members and with external stakeholders.

In practical terms, honesty manifests in how the DAO handles its finances, project updates, and member communications. Transparent financial practices allow members to see exactly how funds are allocated and used, while open reporting on progress ensures that members are informed of the DAO’s achievements and challenges. Honesty also encourages accountability; members are expected to uphold their commitments and act in ways that benefit the collective. By embedding honesty into its structure, the DAO can create a solid foundation of trust, which in turn attracts more committed and reliable contributors.

Honesty also helps safeguard the DAO against malicious actors or unethical behavior. In a system where everyone is encouraged to speak the truth, it becomes easier to identify and address any potential threats to the organization’s integrity. This transparency is critical in building a resilient and trusted organization, as it assures both current and potential members that the DAO is committed to ethical standards.

### Conclusion

Mercy, love, and honesty are more than just guiding principles for the Glory Transactions DAO—they are foundational virtues that create a unique and inspiring framework for a decentralized organization. Mercy fosters a culture of empathy, allowing members to contribute without fear of judgment. Love builds a sense of shared purpose and commitment, aligning individual goals with the greater good of the community. Honesty anchors the organization in transparency and trust, ensuring that all actions are conducted ethically and openly.

By adhering to these virtues, the Glory Transactions DAO can position itself as a model for decentralized organizations that prioritize ethical behavior and the well-being of their members. This approach not only strengthens the DAO’s internal community but also sets a positive example in the wider blockchain ecosystem. In a world where digital interactions are often impersonal and transactional, the virtues of mercy, love, and honesty remind us of the power of human values to create meaningful and lasting connections—even in a decentralized space.</p>
      <div className="App">
        <p style={{ fontSize: "80px", margin: "25px"}}> </p>


      <h1>Glory Transactions</h1>
      <div className="card">
        <Card connector={connector} hooks={hooks} name='phantom' />
      </div>
    </div>
    </>
    </ClerkProvider>
  );
}

export default App;