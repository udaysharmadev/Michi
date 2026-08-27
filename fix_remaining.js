const fs = require('fs');
const path = require('path');

const replacements = {
  "https://chat.lmsys.org/": "https://lmsys.org/blog/",
  "https://vector-db-comparison.com/": "https://github.com/milvus-io/milvus",
  "https://a16z.com/2023/06/20/navigating-the-high-cost-of-ai-compute/": "https://a16z.com/",
  "https://towardsdatascience.com/advanced-rag-techniques-an-illustrated-overview-04d193d8fec6": "https://python.langchain.com/docs/concepts/rag/",
  "https://sebastianraschka.com/blog/2023/llm-lora.html": "https://huggingface.co/docs/peft/index",
  "https://www.llamaindex.ai/blog/llamaindex-and-langchain-a-guide-to-using-them-together": "https://docs.llamaindex.ai/en/stable/",
  "https://neptune.ai/blog/experiment-tracking": "https://mlflow.org/docs/latest/tracking.html",
  "https://square.github.io/okhttp/features/interceptors/": "https://square.github.io/okhttp/4.x/okhttp/okhttp3/-interceptor/",
  "https://square.github.io/okhttp/": "https://github.com/square/okhttp",
  "https://source.android.com/docs/core/runtime/art": "https://developer.android.com/guide",
  "https://source.android.com/docs/core/runtime": "https://developer.android.com/guide/components/fundamentals",
  "https://source.android.com/docs/core/architecture": "https://developer.android.com/guide/platform",
  "https://www.oracle.com/java/technologies/javase/jvm-architecture.html": "https://docs.oracle.com/en/java/",
  "https://www.sqlshack.com/database-design-in-sql-server/": "https://learn.microsoft.com/en-us/sql/relational-databases/tables/tables",
  "https://www.vertabelo.com/blog/er-diagram-symbols-and-meaning/": "https://www.lucidchart.com/pages/er-diagrams",
  "https://cheatsheetseries.owasp.org/cheatsheets/OAuth_Cheat_Sheet.html": "https://oauth.net/2/",
  "https://www.apollographql.com/blog/backend/n-plus-one/": "https://www.apollographql.com/docs/apollo-server/data/dataloaders/",
  "https://devhints.io/nginx": "https://nginx.org/en/docs/",
  "https://redis.io/docs/latest/develop/data-types/hyperloglogs/": "https://redis.io/docs/latest/develop/data-types/",
  "https://socket.io/docs/v4/emitting-events/": "https://socket.io/docs/v4/tutorial/step-4",
  "https://socket.io/docs/v4/server-api/": "https://socket.io/docs/v4/",
  "https://docs.walletconnect.com/web3modal/javascript/about": "https://docs.walletconnect.com/",
  "https://docs.aave.com/faq/flash-loans": "https://docs.aave.com/",
  "https://www.hyperledger.org/learn": "https://www.hyperledger.org/",
  "https://www.digitalocean.com/resources/article/aws-vs-azure-vs-gcp": "https://aws.amazon.com/free/",
  "https://github.com/yevgeniy-logachev/infosec-resources": "https://github.com/sbilly/awesome-security",
  "https://www.digicert.com/what-is-an-ssl-tls-certificate": "https://www.cloudflare.com/learning/ssl/what-is-ssl/",
  "https://www.techtarget.com/searchsecurity/definition/DMZ": "https://www.fortinet.com/resources/cyberglossary/what-is-dmz",
  "https://towardsdatascience.com/linear-algebra-for-machine-learning-solve-a-system-of-linear-equations-3ec7e882e10f": "https://numpy.org/doc/stable/user/quickstart.html",
  "https://towardsdatascience.com/probability-for-data-science-9770b26643d0": "https://www.khanacademy.org/math/statistics-probability",
  "https://developer.chrome.com/docs/chromium/input": "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work",
  "https://javascript.info/es6-modern": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "https://www.gnu.org/software/bash/manual/": "https://linuxize.com/post/bash-scripting-tutorial/",
  "https://css-modules.github.io/": "https://github.com/css-modules/css-modules",
  "https://web.dev/explore/metrics": "https://web.dev/articles/vitals",
  "https://github.com/nicowillis/game-development-resources": "https://github.com/Kavex/GameDev-Resources",
  "https://github.com/EpicGames/Unreal-Binary-Builder": "https://github.com/EpicGames",
  "https://redis.io/docs/latest/develop/use/patterns/game-session-data/": "https://redis.io/docs/latest/use/patterns/",
  "https://martinfowler.com/bliki/ShiftLeft.html": "https://martinfowler.com/articles/practical-test-pyramid.html",
  "https://engineering.fb.com/2010/12/08/core-infra/a-brief-look-at-the-history-of-facebook-s-database-infrastructure/": "https://engineering.fb.com/category/core-data/",
  "https://netflixtechblog.com/": "https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a",
  "https://github.com/nicowillis/ux-research-resources": "https://github.com/alexpate/awesome-design-systems",
  "https://github.com/dsgov-acm/ux-reference-collection": "https://github.com/alexpate/awesome-design-systems",
  "https://m3.material.io/foundations/layout/understanding-layout/overview": "https://m3.material.io/foundations/layout/understanding-layout/",
  "https://betterprogramming.pub/understanding-the-cap-theorem-44fc40f4af8a": "https://www.ibm.com/topics/cap-theorem",
  "https://medium.com/ux-in-plain-english/the-ultimate-guide-to-ui-animations-6f49f33e0a7b": "https://m3.material.io/styles/motion/overview",
  "https://github.com/Reedsy/awesome-ux": "https://github.com/alexpate/awesome-design-systems",
  "https://www.figma.com/resource-library/design-handoff/": "https://www.figma.com/best-practices/guide-to-developer-handoff/",
  "https://www.ssl.com/faqs/what-is-an-ssl-certificate/": "https://www.cloudflare.com/learning/ssl/what-is-ssl/",
  "https://medium.com/dragonfly-research/what-explains-the-rise-of-amms-7d008af1c399": "https://uniswap.org/blog/",
  "https://www.paradigm.xyz/2021/05/wdf-the-price-impact-problem": "https://docs.uniswap.org/concepts/protocol/concentrated-liquidity"
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file === 'topics.ts') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [oldUrl, newUrl] of Object.entries(replacements)) {
        if (content.includes(oldUrl)) {
          content = content.split(oldUrl).join(newUrl);
          changed = true;
          console.log(`Replaced in ${fullPath}: ${oldUrl} -> ${newUrl}`);
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/data/content'));
console.log('Done replacing.');
