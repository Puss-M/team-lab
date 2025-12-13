import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Resources() {
  const resources = {
    datasets: [
      {
        name: "示例数据集 v1.0",
        description: "用于XXX任务的大规模数据集，包含10万条标注数据",
        size: "2.5 GB",
        format: "JSON",
        downloadLink: "#",
        githubLink: "#",
        paperLink: "#",
      },
    ],
    code: [
      {
        name: "开源项目框架",
        description: "基于PyTorch的研究框架，支持多种深度学习模型",
        language: "Python",
        stars: "1.2k",
        githubLink: "#",
        docsLink: "#",
      },
    ],
    tools: [
      {
        name: "数据标注工具",
        description: "高效的数据标注工具，支持图像、文本等多种数据类型",
        platform: "Web",
        demoLink: "#",
        githubLink: "#",
      },
    ],
  };

  return (
    <Layout
      title="资源下载"
      description="下载实验室的开源数据集、代码和工具">
      <div className="container margin-vert--lg">
        <Heading as="h1">📦 资源与开源</Heading>
        <p className="hero__subtitle" style={{marginBottom: '3rem'}}>
          实验室公开的数据集、代码库和工具软件
        </p>

        {/* Datasets Section */}
        <section style={{marginBottom: '4rem'}}>
          <Heading as="h2" style={{marginBottom: '1.5rem'}}>
            📊 数据集
          </Heading>
          <div className="row">
            {resources.datasets.map((dataset, index) => (
              <div className="col col--6" key={index} style={{marginBottom: '2rem'}}>
                <div className="card" style={{padding: '1.5rem', height: '100%'}}>
                  <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem'}}>
                    {dataset.name}
                  </Heading>
                  <p style={{marginBottom: '1rem', color: 'var(--ifm-color-content-secondary)'}}>
                    {dataset.description}
                  </p>
                  <div style={{marginBottom: '1.5rem', fontSize: '0.9rem'}}>
                    <p style={{marginBottom: '0.25rem'}}>
                      <strong>大小:</strong> {dataset.size} | <strong>格式:</strong> {dataset.format}
                    </p>
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                    <a href={dataset.downloadLink} className="button button--primary button--sm">
                      ⬇️ 下载
                    </a>
                    {dataset.githubLink && (
                      <a href={dataset.githubLink} className="button button--secondary button--sm">
                        💻 GitHub
                      </a>
                    )}
                    {dataset.paperLink && (
                      <a href={dataset.paperLink} className="button button--secondary button--sm">
                        📄 论文
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code Repositories Section */}
        <section style={{marginBottom: '4rem'}}>
          <Heading as="h2" style={{marginBottom: '1.5rem'}}>
            💻 开源代码
          </Heading>
          <div className="row">
            {resources.code.map((repo, index) => (
              <div className="col col--6" key={index} style={{marginBottom: '2rem'}}>
                <div className="card" style={{padding: '1.5rem', height: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                    <Heading as="h3" style={{marginTop: 0, marginBottom: 0, fontSize: '1.25rem', flex: 1}}>
                      {repo.name}
                    </Heading>
                    <span style={{
                      fontSize: '0.85rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      backgroundColor: 'var(--ifm-color-primary)',
                      color: 'white',
                    }}>
                      ⭐ {repo.stars}
                    </span>
                  </div>
                  <p style={{marginBottom: '1rem', color: 'var(--ifm-color-content-secondary)'}}>
                    {repo.description}
                  </p>
                  <div style={{marginBottom: '1.5rem', fontSize: '0.9rem'}}>
                    <strong>语言:</strong> {repo.language}
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem'}}>
                    <a href={repo.githubLink} className="button button--primary button--sm">
                      💻 GitHub
                    </a>
                    {repo.docsLink && (
                      <a href={repo.docsLink} className="button button--secondary button--sm">
                        📖 文档
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <Heading as="h2" style={{marginBottom: '1.5rem'}}>
            🛠️ 工具软件
          </Heading>
          <div className="row">
            {resources.tools.map((tool, index) => (
              <div className="col col--6" key={index} style={{marginBottom: '2rem'}}>
                <div className="card" style={{padding: '1.5rem', height: '100%'}}>
                  <Heading as="h3" style={{marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem'}}>
                    {tool.name}
                  </Heading>
                  <p style={{marginBottom: '1rem', color: 'var(--ifm-color-content-secondary)'}}>
                    {tool.description}
                  </p>
                  <div style={{marginBottom: '1.5rem', fontSize: '0.9rem'}}>
                    <strong>平台:</strong> {tool.platform}
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem'}}>
                    {tool.demoLink && (
                      <a href={tool.demoLink} className="button button--primary button--sm">
                        🚀 在线使用
                      </a>
                    )}
                    {tool.githubLink && (
                      <a href={tool.githubLink} className="button button--secondary button--sm">
                        💻 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* License Notice */}
        <div className="card" style={{padding: '1.5rem', marginTop: '3rem', backgroundColor: 'var(--ifm-background-surface-color, #f9fafb)'}}>
          <p style={{marginBottom: 0, fontSize: '0.9rem', color: 'var(--ifm-color-content-secondary)'}}>
            📋 <strong>使用须知:</strong> 所有资源均遵循相应的开源协议。使用前请仔细阅读 LICENSE 文件。如在研究中使用，请引用相关论文。
          </p>
        </div>
      </div>
    </Layout>
  );
}
