export default function Home() {
  return (
    <>
      <header>
        <span className="brand">Zoo Builders</span>
        <nav>
          <a href="https://zoo.ngo/docs/" target="_blank" rel="noopener noreferrer">Docs</a>
          <a href="https://github.com/zooai" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://zoo.network" target="_blank" rel="noopener noreferrer">Network</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Build on <span className="accent">Zoo Network</span></h1>
          <p className="lead">
            The developer portal for Zoo Network — a decentralized AI research chain
            for DeAI and DeSci experiments. Open source, community governed, post-quantum secure.
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="https://zoo.ngo/docs/" target="_blank" rel="noopener noreferrer">Read the docs</a>
            <a className="btn btn-secondary" href="https://github.com/zooai" target="_blank" rel="noopener noreferrer">View source</a>
          </div>
        </section>

        <section className="section">
          <h2>Network</h2>
          <p>Zoo Network is an L1 chain in the Lux multi-chain ecosystem, focused on decentralized AI and decentralized science.</p>
          <div className="chain-info">
            <dl>
              <dt>Mainnet Chain ID</dt>
              <dd>200200</dd>
            </dl>
            <dl>
              <dt>Testnet Chain ID</dt>
              <dd>200201</dd>
            </dl>
            <dl>
              <dt>Devnet Chain ID</dt>
              <dd>200202</dd>
            </dl>
            <dl>
              <dt>Native Coin</dt>
              <dd>ZOO</dd>
            </dl>
          </div>
        </section>

        <section className="section">
          <h2>Get started</h2>
          <div className="grid">
            <div className="card">
              <h3>Documentation</h3>
              <p>Architecture, RPC reference, smart-contract guides, validator setup.</p>
              <a className="more" href="https://zoo.ngo/docs/" target="_blank" rel="noopener noreferrer">Open docs ›</a>
            </div>
            <div className="card">
              <h3>GitHub</h3>
              <p>Open-source repos for the chain, SDKs, contracts, and tooling.</p>
              <a className="more" href="https://github.com/zooai" target="_blank" rel="noopener noreferrer">github.com/zooai ›</a>
            </div>
            <div className="card">
              <h3>ZIPs</h3>
              <p>Zoo Improvement Proposals — community governance for the protocol.</p>
              <a className="more" href="https://zips.zoo.ngo" target="_blank" rel="noopener noreferrer">zips.zoo.ngo ›</a>
            </div>
            <div className="card">
              <h3>Foundation</h3>
              <p>Zoo Labs Foundation — open AI research, DeAI &amp; DeSci.</p>
              <a className="more" href="https://zoo.ngo" target="_blank" rel="noopener noreferrer">zoo.ngo ›</a>
            </div>
            <div className="card">
              <h3>Network status</h3>
              <p>Mainnet, testnet, and devnet RPC endpoints and explorers.</p>
              <a className="more" href="https://zoo.network" target="_blank" rel="noopener noreferrer">zoo.network ›</a>
            </div>
            <div className="card">
              <h3>Lux ecosystem</h3>
              <p>Zoo runs on Lux Network L0 consensus alongside Hanzo, SPC, and Pars subnets.</p>
              <a className="more" href="https://lux.network" target="_blank" rel="noopener noreferrer">lux.network ›</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://zoo.ngo" target="_blank" rel="noopener noreferrer">Zoo Labs Foundation</a>
        <a href="https://github.com/zooai" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/zoo_labs" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://zips.zoo.ngo" target="_blank" rel="noopener noreferrer">ZIPs</a>
      </footer>
    </>
  );
}
