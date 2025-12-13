import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Papers() {
  const papers = [
    {
      title: "示例论文标题：深度学习在XXX领域的应用研究",
      authors: "张三, 李四, 王五",
      venue: "顶级会议名称 (Conference/Journal) 2024",
      year: 2024,
      links: {
        pdf: "#",
        code: "#",
        bibtex: "#",
      },
      abstract: "这是论文的简短摘要，描述研究的主要贡献和创新点...",
    },
    {
      title: "另一篇示例论文",
      authors: "赵六, 张三",
      venue: "知名期刊 (Journal) 2023",
      year: 2023,
      links: {
        pdf: "#",
        arxiv: "#",
      },
      abstract: "本文提出了一种新颖的方法来解决XX问题...",
    },
  ];

  return (
    <Layout
      title="论文发表"
      description="查看实验室发表的学术论文">
      <div className="container margin-vert--lg">
        <Heading as="h1">📚 论文发表</Heading>
        <p className="hero__subtitle" style={{marginBottom: '2rem'}}>
          实验室成员在顶级会议和期刊上发表的学术论文
        </p>

        {/* Year filter could be added here */}
        <div style={{marginBottom: '3rem'}}>
          <div className="button-group">
            <Link className="button button--primary">全部</Link>
            <Link className="button button--outline button--primary" style={{marginLeft: '0.5rem'}}>2024</Link>
            <Link className="button button--outline button--primary" style={{marginLeft: '0.5rem'}}>2023</Link>
            <Link className="button button--outline button--primary" style={{marginLeft: '0.5rem'}}>更早</Link>
          </div>
        </div>

        {/* Papers List */}
        <div className="row">
          {papers.map((paper, index) => (
            <div className="col col--12" key={index} style={{marginBottom: '2rem'}}>
              <div className="card" style={{padding: '2rem'}}>
                <Heading as="h3" style={{marginTop: 0}}>
                  {paper.title}
                </Heading>
                <p style={{color: 'var(--ifm-color-content-secondary)', marginBottom: '0.5rem'}}>
                  <strong>作者：</strong> {paper.authors}
                </p>
                <p style={{color: 'var(--ifm-color-primary)', marginBottom: '1rem', fontWeight: 600}}>
                  {paper.venue}
                </p>
                <p style={{marginBottom: '1.5rem'}}>
                  {paper.abstract}
                </p>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                  {paper.links.pdf && (
                    <a href={paper.links.pdf} className="button button--secondary button--sm">
                      📄 PDF
                    </a>
                  )}
                  {paper.links.code && (
                    <a href={paper.links.code} className="button button--secondary button--sm">
                      💻 代码
                    </a>
                  )}
                  {paper.links.arxiv && (
                    <a href={paper.links.arxiv} className="button button--secondary button--sm">
                      📝 arXiv
                    </a>
                  )}
                  {paper.links.bibtex && (
                    <a href={paper.links.bibtex} className="button button--secondary button--sm">
                      📋 BibTeX
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for empty state */}
        {papers.length === 0 && (
          <div className="card" style={{padding: '3rem', textAlign: 'center'}}>
            <p style={{fontSize: '3rem', marginBottom: '1rem'}}>📝</p>
            <Heading as="h3">暂无发表论文</Heading>
            <p style={{color: 'var(--ifm-color-content-secondary)'}}>
              我们的研究成果即将发布，敬请期待！
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
