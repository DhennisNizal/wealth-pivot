export const articles = [
  {
    id: 1,
    category: "BUSINESS",
    title: "How to Start a Business Without Capital",
    description:
      "Learn practical ways to start a small business using skills, time, and digital tools instead of money.",
    content: `Starting a business without capital may sound unrealistic, but many successful entrepreneurs began with little to no money. The key is shifting your mindset from “What do I need to buy?” to “What value can I offer?” In today’s digital economy, skills, creativity, and time often matter more than cash.

One of the most effective ways to start is through service-based businesses. Freelancing, online tutoring, social media management, graphic design, and content writing require minimal resources beyond your skills and an internet connection. Platforms like freelancing marketplaces and social media allow you to reach clients without upfront marketing costs.

Another approach is leveraging existing platforms instead of building from scratch. Selling digital products such as templates, guides, or online courses removes inventory and storage costs. You can also use free tools for branding, communication, and project management while validating demand.

Bootstrapping is essential. This means reinvesting your first earnings back into the business instead of taking profits early. Even small income can help you upgrade tools, improve marketing, or outsource tasks later on.

Starting without capital forces discipline and creativity. While growth may be slower, it builds a strong foundation and reduces financial risk. With consistency and smart reinvestment, a zero-capital idea can evolve into a sustainable business.`,
    duration: "7 mins to read",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    isFeatured: true,
  },

  {
    id: 2,
    category: "FINANCE",
    title: "Investing 101: A Beginner’s Guide to Growing Your Money",
    description:
      "A beginner-friendly guide to stocks, bonds, mutual funds, and long-term investing.",
    content: `Investing is the process of using your money to generate more money over time. Unlike saving, where funds sit idle, investing allows your money to work through assets such as stocks, bonds, and funds. For beginners, understanding the basics is crucial before committing real money.

Stocks represent ownership in a company. When a company performs well, its stock value may increase, and some companies pay dividends. Bonds, on the other hand, are loans you give to governments or corporations in exchange for fixed interest payments, making them generally less risky than stocks.

Mutual funds and index funds are popular beginner options because they offer diversification. Instead of picking individual stocks, you invest in a collection of assets, spreading risk across multiple companies or sectors.

One of the most important investing principles is compounding. Earnings generate their own earnings over time, meaning the earlier you start, the greater the impact. Even small, consistent investments can grow significantly in the long run.

Successful investing is not about timing the market but staying invested. A long-term mindset, consistent contributions, and emotional discipline help reduce risk and improve returns.`,
    duration: "6 mins to read",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop",

    isFeatured: true,
  },

  {
    id: 3,
    category: "FINANCE",
    title: "Understanding Inflation and How It Affects Your Money",
    description:
      "A simple explanation of inflation and its impact on savings, income, and daily expenses.",
    content: `Inflation refers to the gradual increase in the prices of goods and services over time. When inflation rises, the purchasing power of money decreases, meaning you need more money to buy the same things you could afford before.

For example, if inflation is 5% annually and your income does not increase, your money effectively loses value. This is why keeping large amounts of cash without investing can be risky in the long term.

Inflation affects savings accounts, especially those with low interest rates. If your savings earn less than the inflation rate, you are losing purchasing power. This is one reason why people invest—to outpace inflation.

On the positive side, moderate inflation encourages spending and economic growth. However, high inflation can strain households, increase debt burdens, and reduce financial stability.

Understanding inflation helps individuals make smarter decisions about budgeting, investing, and negotiating income. It also highlights the importance of long-term financial planning.`,
    duration: "5 mins to read",
    thumbnail: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",
    isFeatured: false,
  },

  {
    id: 4,
    category: "PERSONAL FINANCE",
    title: "Smart Budgeting Strategies for Young Professionals",
    description:
      "Manage your income, control expenses, and build financial stability early.",
    content: `Budgeting is one of the most important financial skills young professionals can develop. With a steady income often comes lifestyle inflation—spending more simply because you earn more. A budget helps prevent this trap.

One popular method is the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings. Another approach is zero-based budgeting, where every peso or dollar is assigned a purpose.

Tracking expenses is critical. Many people underestimate how much they spend on small, recurring purchases. Awareness alone can significantly improve saving habits.

Budgeting is not about restriction but intention. A good budget allows you to enjoy your income while still preparing for emergencies, investments, and long-term goals.

Starting early builds discipline that pays off for decades.`,
    duration: "5 mins to read",
    thumbnail: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
    isFeatured: true,
  },

  {
    id: 5,
    category: "INVESTING",
    title: "Passive Income Ideas That Actually Work",
    description:
      "Explore realistic passive income streams you can build over time.",
    content: `Passive income is often misunderstood as easy or instant money. In reality, most passive income streams require significant effort or capital upfront.

Dividend-paying stocks provide regular income but require investment capital. Rental properties can generate steady cash flow but involve maintenance and management. Digital products such as ebooks or courses require initial creation but can sell repeatedly.

The advantage of passive income is scalability. Once established, income continues with minimal daily involvement. However, risks still exist, and diversification is essential.

Passive income should complement, not replace, active income—especially in the early stages of wealth building.`,
    duration: "6 mins to read",
    thumbnail: "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
    isFeatured: false,
  },

  {
    id: 6,
    category: "FINANCE",
    title: "Emergency Funds: Why You Need One and How to Build It",
    description:
      "Protect yourself financially from unexpected expenses and income loss.",
    content: `An emergency fund is money set aside for unexpected situations such as medical emergencies, job loss, or urgent repairs. Without one, people often rely on debt during crises.

Experts recommend saving three to six months’ worth of essential expenses. This fund should be easily accessible, such as in a high-yield savings account.

Building an emergency fund takes time. Start small, automate contributions, and prioritize consistency over amount. Even a modest fund can prevent financial stress.

An emergency fund provides peace of mind and acts as a financial safety net.`,
    duration: "4 mins to read",
    thumbnail: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f",
    isFeatured: true,
  },
];

export const featuredArticles = articles.filter(
  (article) => article.isFeatured
);
